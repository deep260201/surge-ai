import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const palette = { black: "#0C0F0C", cream: "#F5F0E8", muted: "#8E8E88", line: "#2A2D2A" };

const font = (file: string) => readFile(join(process.cwd(), "src/assets/fonts", file));

// Same geometry as LogoMark in src/components/brand/Logo.tsx, embedded as a data URI so Satori can rasterise it.
// TODO: replace with the real Surge AI logo SVG when supplied.
const markSvg = (fill: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="${fill}"><defs><mask id="m"><rect width="100" height="100" fill="white"/><polygon points="58,18 40,54 51,54 40,84 62,42 51,42" fill="black"/></mask></defs><g mask="url(#m)"><rect x="22" y="22" width="62" height="28" rx="14" transform="rotate(-34 53 36)"/><rect x="16" y="50" width="62" height="28" rx="14" transform="rotate(-34 47 64)"/></g></svg>`;

export const markDataUri = (fill = palette.cream) => `data:image/svg+xml,${encodeURIComponent(markSvg(fill))}`;

type OgProps = {
  eyebrow: string;
  lead: string;
  accent?: string;
};

const host = site.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export async function renderOg({ eyebrow, lead, accent = "" }: OgProps) {
  const [display, serif, sans] = await Promise.all([
    font("SpaceGrotesk-Bold.woff"),
    font("InstrumentSerif-Italic.woff"),
    font("Inter-Regular.woff"),
  ]);

  const length = lead.length + accent.length;
  const fontSize = length > 70 ? 58 : length > 44 ? 68 : 80;
  const leadWords = lead.split(" ").filter(Boolean);
  const accentWords = accent.split(" ").filter(Boolean);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: palette.black,
          color: palette.cream,
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={markDataUri()} width={44} height={44} alt="" />
            <div style={{ fontFamily: "Space Grotesk", fontSize: 24, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Surge AI
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: palette.muted,
              fontSize: 20,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: 999, background: palette.muted }} />
            {eyebrow}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            columnGap: fontSize * 0.26,
            maxWidth: 1000,
            fontSize,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
          }}
        >
          {leadWords.map((w, i) => (
            <span key={`l${i}`} style={{ fontFamily: "Space Grotesk", fontWeight: 700 }}>
              {w}
            </span>
          ))}
          {accentWords.map((w, i) => (
            <span key={`a${i}`} style={{ fontFamily: "Instrument Serif", fontStyle: "italic", letterSpacing: "-0.01em" }}>
              {w}
            </span>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: `1px solid ${palette.line}`,
            fontSize: 22,
            color: palette.muted,
          }}
        >
          <div>{site.tagline}</div>
          <div>{host}</div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Space Grotesk", data: display, weight: 700, style: "normal" },
        { name: "Instrument Serif", data: serif, weight: 400, style: "italic" },
        { name: "Inter", data: sans, weight: 400, style: "normal" },
      ],
    },
  );
}

/** Square brand icon: cream mark on a black rounded tile. */
export function renderIcon(size: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: palette.black,
          borderRadius: size * 0.22,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={markDataUri()} width={size * 0.72} height={size * 0.72} alt="" />
      </div>
    ),
    { width: size, height: size },
  );
}
