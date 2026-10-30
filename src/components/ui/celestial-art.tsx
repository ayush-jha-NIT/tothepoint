/** Decorative SVG illustration; no external assets, network fonts, or animation required. */
export function CelestialArt({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={["relative mx-auto aspect-square w-full max-w-[540px]", className].join(" ")}>
      <div className="absolute inset-[10%] rounded-full bg-gold/5 blur-3xl" />
      <svg viewBox="0 0 540 540" className="relative h-full w-full text-gold" fill="none">
        <defs>
          <radialGradient id="orbit-core"><stop stopColor="#aa7b3b" stopOpacity=".34" /><stop offset="1" stopColor="#061427" stopOpacity=".07" /></radialGradient>
          <linearGradient id="orbit-gold" x1="80" y1="90" x2="430" y2="440" gradientUnits="userSpaceOnUse"><stop stopColor="#f9dda4" /><stop offset=".5" stopColor="#bd8c4c" /><stop offset="1" stopColor="#f9dda4" /></linearGradient>
        </defs>
        <circle cx="270" cy="270" r="234" stroke="currentColor" strokeOpacity=".18" strokeWidth="1"/>
        <circle cx="270" cy="270" r="215" stroke="url(#orbit-gold)" strokeOpacity=".7" strokeWidth="1.3"/>
        <circle cx="270" cy="270" r="183" stroke="currentColor" strokeOpacity=".3" strokeWidth=".8"/>
        <circle cx="270" cy="270" r="155" stroke="url(#orbit-gold)" strokeWidth="1.5" strokeOpacity=".7"/>
        <circle cx="270" cy="270" r="119" fill="url(#orbit-core)" stroke="currentColor" strokeOpacity=".65" strokeWidth="1.4"/>
        <circle cx="270" cy="270" r="95" stroke="currentColor" strokeOpacity=".2" />
        <path d="M270 38v464M38 270h464M106 106l328 328M434 106 106 434" stroke="currentColor" strokeOpacity=".14"/>
        {Array.from({length:12},(_,i)=>{
          const a=i*Math.PI/6;
          const x1=270+196*Math.sin(a),y1=270-196*Math.cos(a);
          const x2=270+213*Math.sin(a),y2=270-213*Math.cos(a);
          return <path key={i} d={`M${x1} ${y1}L${x2} ${y2}`} stroke="currentColor" strokeWidth="1.4" opacity=".65"/>;
        })}
        <path d="M270 188 290 251 353 270 290 289 270 352 250 289 187 270 250 251 270 188Z" fill="url(#orbit-gold)" opacity=".91"/>
        <circle cx="270" cy="270" r="19" fill="#051527" stroke="#f3d09a" strokeWidth="1.4"/>
        <circle cx="270" cy="270" r="7" fill="#f3d09a"/>
        <circle cx="270" cy="55" r="5" fill="#f7d79d"/><circle cx="485" cy="270" r="4" fill="#f7d79d"/>
        <circle cx="117" cy="116" r="3" fill="#f7d79d"/><circle cx="422" cy="422" r="3" fill="#f7d79d"/>
        <path d="m112 47 2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7ZM445 84l2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7ZM90 405l2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7Z" fill="#f7d79d"/>
      </svg>
    </div>
  );
}
