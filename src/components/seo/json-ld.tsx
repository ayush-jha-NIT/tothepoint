/** Never interpolate JSON-LD as raw JSX text; escape HTML-sensitive characters. */
export function JsonLd({ data }: { data: Record<string, unknown> | readonly Record<string, unknown>[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c").replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }}/>;
}
