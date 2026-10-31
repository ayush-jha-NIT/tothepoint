import { ServiceGlyph, type ServiceGlyphName } from "@/components/home/service-glyph";
import type { BlogCategory } from "@/config/blog";

const glyphs: Record<BlogCategory, ServiceGlyphName> = {
  kundli: "kundli",
  relationships: "marriage",
  career: "career",
  numerology: "numerology",
  vastu: "vastu",
  muhurat: "muhurat",
};

const labels: Record<BlogCategory, string> = {
  kundli: "Vedic birth charts",
  relationships: "Connection & compatibility",
  career: "Work & direction",
  numerology: "Numbers & symbolism",
  vastu: "Living spaces",
  muhurat: "Traditional timing",
};

export function BlogArtwork({ category, featured = false }: { category: BlogCategory; featured?: boolean }) {
  return (
    <div aria-hidden="true" className={[
      "star-field relative isolate flex items-center justify-center overflow-hidden border-b border-gold/25 bg-[radial-gradient(ellipse_at_55%_35%,#203e51_0%,#0a1d31_55%,#061427_100%)]",
      featured ? "h-64 sm:h-[350px] lg:h-full lg:min-h-[410px]" : "h-48 sm:h-52",
    ].join(" ")}>
      <div className="absolute size-[240px] rounded-full border border-gold/20 sm:size-[285px]"/>
      <div className="absolute size-[190px] rounded-full border border-gold/35 sm:size-[230px]"/>
      <div className="absolute size-[140px] rounded-full border border-gold/15 sm:size-[170px]"/>
      <div className="absolute size-56 rounded-full bg-gold/5 blur-3xl"/>
      <div className={["relative text-gold-light drop-shadow-[0_0_23px_rgba(227,181,100,.33)]",featured ? "scale-150" : ""].join(" ")}>
        <ServiceGlyph name={glyphs[category]} size={92}/>
      </div>
      <div className="absolute bottom-4 left-5 right-5 rounded-lg border border-gold/25 bg-navy-deep/75 px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[.18em] text-gold-light backdrop-blur">
        {labels[category]}
      </div>
    </div>
  );
}
