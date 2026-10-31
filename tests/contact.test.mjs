import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { validateContactSubmission, prepareContactEmail, deliverContactEmail } from "../src/lib/contact.ts";

const read = (path) => readFileSync(new URL("../" + path, import.meta.url), "utf8");
const valid = {
  name: "Example Visitor", email: "visitor@example.com",
  subject: "Kundli consultation enquiry", service: "kundli-analysis",
  message: "I would like to ask about the consultation format, fees and availability.",
  consent: true, website: "",
};

test("contact validation accepts correct enquiry and normalized fields", () => {
  const v=validateContactSubmission({...valid, name:"  Example Visitor  ", email:" Visitor@Example.com "});
  assert.equal(v.success, true);
  if(v.success){ assert.equal(v.data.name,"Example Visitor"); assert.equal(v.data.email,"visitor@example.com");}
});
test("contact validation rejects missing, oversized or invalid data", () => {
  for(const value of [null, [], {}, {...valid, email:"bad"}, {...valid, name:"X"}, {...valid, subject:"hey"},
  {...valid, service:"not-real"}, {...valid, message:"too short"}, {...valid, consent:false},
  {...valid, message:"x".repeat(2001)}, {...valid, website:"x".repeat(501)}]) {
    assert.equal(validateContactSubmission(value).success, false);
  }
});
test("email payload keeps safe, verified reply address and subject", () => {
  const result=validateContactSubmission(valid);
  assert.equal(result.success, true);
  if(!result.success)return;
  const formatted=prepareContactEmail(result.data);
  assert.equal(formatted.replyTo,"visitor@example.com");
  assert.match(formatted.text,/Kundli Analysis/);
  assert.match(formatted.text,/not a confirmed consultation booking/);
  assert.doesNotMatch(formatted.subject,/\r|\n/);
});
test("delivery calls Resend with server-side auth and reply_to", async () => {
  const parsed=validateContactSubmission(valid);
  if(!parsed.success)throw Error("invalid fixture");
  let captured;
  const fake=async (url, options) => {
    captured={url,options};
    return new Response(JSON.stringify({id:"test-resend-id"}),{status:200,headers:{"Content-Type":"application/json"}});
  };
  const result=await deliverContactEmail(parsed.data,{apiKey:"test-secret",from:"Website <contact@verified.example>",to:"tothepointastrology@gmail.com"},fake);
  assert.deepEqual(result,{success:true,id:"test-resend-id"});
  assert.equal(captured.url,"https://api.resend.com/emails");
  const payload=JSON.parse(captured.options.body);
  assert.deepEqual(payload.to,["tothepointastrology@gmail.com"]);
  assert.equal(payload.reply_to,"visitor@example.com");
  assert.equal(captured.options.headers.Authorization,"Bearer test-secret");
});
test("Resend rejection and missing receipt ID must never report success", async () => {
  const parsed=validateContactSubmission(valid);if(!parsed.success)throw Error("fixture");
  const cfg={apiKey:"test",from:"test@verified.example",to:"tothepointastrology@gmail.com"};
  const rejection=await deliverContactEmail(parsed.data,cfg,async()=>new Response('{"message":"rejected"}',{status:403}));
  assert.deepEqual(rejection,{success:false,status:403});
  const missing=await deliverContactEmail(parsed.data,cfg,async()=>new Response("{}",{status:200}));
  assert.deepEqual(missing,{success:false,status:502});
});
test("contact route has runtime guards and no public API key", () => {
  const route=read("src/app/api/contact/route.ts");
  for(const required of ["export async function POST","MAX_BYTES", "origin", "content-type","RESEND_API_KEY",
  "CONTACT_FROM_EMAIL","CONTACT_TO_EMAIL","deliverContactEmail", "Cache-Control"]) assert.ok(route.includes(required),required);
  assert.doesNotMatch(route,/NEXT_PUBLIC_RESEND/);
  assert.match(route,/status: 503|\}, 503\)/);
});
test("contact UI sends real API requests and displays errors without false success", () => {
  const page=read("src/app/contact/page.tsx");
  const form=read("src/components/contact/contact-form.tsx");
  const nav=read("src/config/navigation.ts");
  assert.match(page,/export const metadata/);
  assert.match(page,/<ContactForm\/>/);
  assert.match(form,/fetch\("\/api\/contact"/);
  assert.match(form,/res.ok && result.accepted/);
  assert.match(form,/setErrors\(result.fields/);
  assert.match(form,/privacy-policy/);
  assert.doesNotMatch(nav,/\n\s*contact: \{ title:/);
});
