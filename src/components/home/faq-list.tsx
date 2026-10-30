import { frequentlyAskedQuestions } from "@/config/home";
import { Container } from "@/components/ui/container";

export function HomeFaq() {
  return (
    <section id="questions" aria-labelledby="faq-title" className="border-t border-gold/15 bg-navy-deep py-16 sm:py-24">
      <Container>
        <div className="mx-auto mb-11 max-w-2xl text-center">
          <p className="eyebrow">Frequently asked questions</p>
          <h2 id="faq-title" className="mt-3 font-display text-4xl text-cream sm:text-5xl">Find quick answers</h2>
          <p className="mt-4 text-sm leading-7 text-muted">The essentials, explained clearly before you get in touch.</p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {frequentlyAskedQuestions.map((item) => (
            <details key={item.question} className="group h-fit rounded-lg border border-gold/25 bg-navy-soft/70 transition-colors open:border-gold/55">
              <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 text-sm font-medium text-cream marker:content-none sm:px-6 [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span aria-hidden="true" className="shrink-0 text-gold transition-transform group-open:rotate-45">
                  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                </span>
              </summary>
              <div className="border-t border-gold/15 px-5 pb-5 pt-4 text-sm leading-7 text-muted sm:px-6">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
