import type { ReactNode } from "react";
import type { ServiceGlyphName } from "@/components/home/service-glyph";
import { ServiceGlyph } from "@/components/home/service-glyph";

/** Distinct lightweight SVG illustrations for each card, without unverified photos or remote assets. */
function Illustration({ name }: { name: ServiceGlyphName }) {
  const drawings: Record<ServiceGlyphName, ReactNode> = {
    kundli: (
      <>
        <circle cx="180" cy="110" r="89" stroke="#e8b664" strokeOpacity=".4" strokeWidth="1.2" />
        <circle cx="180" cy="110" r="69" stroke="#f2d19c" strokeOpacity=".75" strokeWidth="1.3" />
        <path d="M111 41 249 179M249 41 111 179M180 22v176M91 110h178" stroke="#e8b664" strokeOpacity=".48" strokeWidth=".8" />
        <path d="m180 59 20 33 38 18-38 18-20 33-20-33-38-18 38-18Z" stroke="#f2d19c" strokeWidth="1.6" fill="#a77a3f" fillOpacity=".22" />
        <circle cx="180" cy="110" r="11" fill="#e8b664" fillOpacity=".75" />
      </>
    ),
    marriage: (
      <>
        <circle cx="151" cy="110" r="59" stroke="#edbd82" strokeWidth="8" strokeOpacity=".85"/>
        <circle cx="207" cy="110" r="59" stroke="#e8b664" strokeWidth="8" strokeOpacity=".85"/>
        <circle cx="151" cy="110" r="49" stroke="#ffe3af" strokeWidth="1" strokeOpacity=".8"/>
        <circle cx="207" cy="110" r="49" stroke="#ffe3af" strokeWidth="1" strokeOpacity=".8"/>
        <path d="M180 44c12-18 29-24 42-19M130 182c-14 1-30-3-41-12" stroke="#e8b664" strokeWidth="1.5" strokeLinecap="round" />
        <path d="m180 16 4 10 10 4-10 4-4 10-4-10-10-4 10-4ZM259 164l3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" fill="#ffe6ba" />
      </>
    ),
    career: (
      <>
        <path d="M52 186h261" stroke="#f0c787" strokeOpacity=".35"/>
        <path d="M72 186v-62h37v62M115 186V96h48v90M169 186v-81h43v81M219 186V70h39v116M265 186v-42h32v42" stroke="#f1cf99" strokeWidth="1.5" fill="#dbab63" fillOpacity=".12"/>
        <path d="m78 103 53-27 40 15 65-56 44 3" stroke="#f6d39d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m266 25 14 13-19 10" stroke="#f6d39d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="236" cy="35" r="37" fill="#f4cc84" fillOpacity=".08"/>
      </>
    ),
    numerology: (
      <>
        <circle cx="180" cy="110" r="90" stroke="#e8b664" strokeOpacity=".55"/>
        <circle cx="180" cy="110" r="65" stroke="#f4d398" strokeOpacity=".35"/>
        <circle cx="180" cy="110" r="106" stroke="#e8b664" strokeOpacity=".16" strokeDasharray="3 9"/>
        <text x="180" y="145" textAnchor="middle" fontSize="110" fontFamily="Georgia,serif" fill="#f6d49c">8</text>
        <text x="100" y="76" textAnchor="middle" fontSize="31" fontFamily="Georgia,serif" fill="#efc789" opacity=".8">3</text>
        <text x="259" y="73" textAnchor="middle" fontSize="31" fontFamily="Georgia,serif" fill="#efc789" opacity=".8">5</text>
        <text x="105" y="168" textAnchor="middle" fontSize="29" fontFamily="Georgia,serif" fill="#efc789" opacity=".8">1</text>
        <text x="267" y="172" textAnchor="middle" fontSize="29" fontFamily="Georgia,serif" fill="#efc789" opacity=".8">9</text>
      </>
    ),
    vastu: (
      <>
        <path d="m58 108 122-86 122 86" stroke="#f3cf92" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M81 110v84h198v-84" stroke="#e8b664" strokeWidth="2" fill="#e8b664" fillOpacity=".07"/>
        <path d="M159 194v-68h43v68M105 131h31v35h-31M227 131h29v35h-29" stroke="#f3cf92" strokeWidth="2"/>
        <path d="m180 44 0 73M101 194h158M69 203h222" stroke="#f3cf92" strokeOpacity=".36" strokeWidth="2"/>
        <circle cx="180" cy="88" r="18" fill="#e8b664" fillOpacity=".12" stroke="#e8b664" strokeOpacity=".5"/>
        <path d="M60 66c22-24 47-37 78-43M224 22c30 4 55 17 78 44" stroke="#d1a76b" strokeOpacity=".65"/>
      </>
    ),
    muhurat: (
      <>
        <circle cx="180" cy="93" r="73" stroke="#f6d29b" strokeOpacity=".55" strokeWidth="1.5"/>
        <circle cx="180" cy="93" r="56" stroke="#e8b664" strokeOpacity=".35"/>
        <path d="M180 37v10M180 139v10M124 93h10M226 93h10M180 93l20-25M180 93v-35" stroke="#f8dfb2" strokeWidth="3" strokeLinecap="round" />
        <circle cx="180" cy="93" r="5" fill="#f6d29b"/>
        <path d="M117 164c32 14 95 14 126 0M133 169l10 15h74l10-15" stroke="#e8b664" strokeWidth="2" fill="#d9a55d" fillOpacity=".18"/>
        <path d="M180 161c-18-11-11-22 0-33 11 11 18 22 0 33Z" fill="#f6d29b" fillOpacity=".82"/>
        <path d="M151 191h58" stroke="#f6d29b" strokeWidth="3" strokeLinecap="round"/>
      </>
    ),
  };

  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 360 220" fill="none" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id={`halo-${name}`}>
          <stop stopColor="#b77d34" stopOpacity=".35"/>
          <stop offset=".7" stopColor="#0e2941" stopOpacity=".08"/>
          <stop offset="1" stopColor="#071427" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="180" cy="107" r="132" fill={`url(#halo-${name})`} />
      <g opacity=".55" fill="#f4d59f">
        <circle cx="22" cy="28" r="1.1"/><circle cx="61" cy="174" r="1.1"/><circle cx="312" cy="35" r="1.2"/>
        <circle cx="318" cy="176" r="1.4"/><circle cx="45" cy="84" r=".8"/><circle cx="293" cy="116" r=".8"/>
      </g>
      {drawings[name]}
    </svg>
  );
}

export function ServiceArtwork({ name }: { name: ServiceGlyphName }) {
  return (
    <div aria-hidden="true" className="star-field relative isolate h-[212px] overflow-hidden bg-[radial-gradient(ellipse_at_50%_50%,#223750_0%,#101f32_54%,#071425_100%)] sm:h-[220px]">
      <Illustration name={name}/>
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-navy-deep/65 to-transparent" />
      <div className="absolute bottom-3 left-5 flex size-12 items-center justify-center rounded-full border border-gold/60 bg-navy-deep/95 text-gold-light shadow-xl">
        <ServiceGlyph name={name} size={30}/>
      </div>
    </div>
  );
}
