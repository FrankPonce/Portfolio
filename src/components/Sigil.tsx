/**
 * Cybersigil ornaments: a long-rayed Y2K four-point star, and a divider where thin barbed,
 * thorned lines taper out from that star on both sides. Pure SVG, colour from currentColor.
 */

/** Right half of the divider (the left half is the same paths mirrored around x = 120). */
function DividerHalf() {
  return (
    <>
      {/* main tapered spine */}
      <path d="M150 11.4 Q 192 11.7 234 12 Q 192 12.3 150 12.6 Z" />
      {/* thorns along the spine */}
      <path d="M166 11.7 L171 11.7 L176 4.5 Z" />
      <path d="M186 12.3 L191 12.3 L196 19.5 Z" />
      <path d="M206 11.8 L210 11.8 L214 6.5 Z" />
      <path d="M220 12.2 L223 12.2 L226 16.5 Z" />
      {/* barbed hook curling off the spine */}
      <path d="M154 12 C 160 8 170 2.5 182 3 C 176 3.6 168 6.5 158 12 Z" />
      <path d="M154 12 C 160 16 168 20 176 20.5 C 170 19.2 163 16.5 157 12 Z" />
      {/* end spike */}
      <path d="M234 12 L237 10.6 L240 12 L237 13.4 Z" />
    </>
  );
}

/** The four-point star at the centre of the divider (viewBox 0 0 24 24). */
const STAR = "M12 0.5 L13.1 10.9 L23.5 12 L13.1 13.1 L12 23.5 L10.9 13.1 L0.5 12 L10.9 10.9 Z";

export function SigilStar({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d={STAR} />
    </svg>
  );
}

export function SigilDivider({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 240 24">
      <g>
        <DividerHalf />
      </g>
      <g transform="translate(240 0) scale(-1 1)">
        <DividerHalf />
      </g>
      {/* centre star, stretched wide like a Y2K sparkle */}
      <path d="M120 0 L121.6 10.6 L146 12 L121.6 13.4 L120 24 L118.4 13.4 L94 12 L118.4 10.6 Z" />
      <circle cx="120" cy="12" r="1.6" fill="var(--pf-canvas, #111)" />
    </svg>
  );
}
