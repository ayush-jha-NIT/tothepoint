import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";

/** Internal, source-controlled MDX only. Never compile untrusted visitor input. */
function headingId(children: unknown) {
  return String(children ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children, id, ...rest }: ComponentPropsWithoutRef<"h2">) =>
      <h2 {...rest} id={id ?? headingId(children)} className="scroll-mt-28 mt-11 mb-5 font-display text-3xl leading-tight text-cream sm:text-4xl">{children}</h2>,
    h3: (props: ComponentPropsWithoutRef<"h3">) => <h3 {...props} className="mt-8 mb-4 font-display text-2xl text-cream"/>,
    p: (props: ComponentPropsWithoutRef<"p">) => <p {...props} className="my-5 text-[15px] leading-8 text-cream/80 sm:text-base"/>,
    ul: (props: ComponentPropsWithoutRef<"ul">) => <ul {...props} className="my-5 list-disc space-y-2 pl-6 text-[15px] leading-8 text-cream/80 marker:text-gold"/>,
    ol: (props: ComponentPropsWithoutRef<"ol">) => <ol {...props} className="my-5 list-decimal space-y-2 pl-6 text-[15px] leading-8 text-cream/80 marker:text-gold"/>,
    li: (props: ComponentPropsWithoutRef<"li">) => <li {...props}/>,
    strong: (props: ComponentPropsWithoutRef<"strong">) => <strong {...props} className="font-semibold text-gold-light"/>,
    blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => <blockquote {...props} className="my-7 rounded-r-xl border-l-4 border-gold bg-navy-soft/75 px-6 py-3 text-cream"/>,
    a: (props: ComponentPropsWithoutRef<"a">) => <a {...props} className="font-medium text-gold-light underline underline-offset-4 hover:text-gold"/>,
    ...components,
  };
}
