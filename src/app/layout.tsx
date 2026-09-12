import type { Metadata } from "next";
import { Inter, Instrument_Serif, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Navbar } from "@/components/layout/Navbar";
import { Analytics } from "@/components/seo/Analytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/config/site";
import { ogPaths, openGraphFor } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic", // only the italic face is used (accent words)
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s — ${site.name}` },
  description: site.description,
  openGraph: openGraphFor(ogPaths.site, `${site.name} — ${site.tagline}`),
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: "/icons/icon-64.png", sizes: "64x64", type: "image/png" }],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

// Reveals `[data-reveal]` elements (see components/ui/Reveal) as they enter the viewport.
// Runs before hydration and uses the Web Animations API, so it never touches React-owned attributes.
const revealScript = `(function(){if(!('IntersectionObserver'in window)||!Element.prototype.animate)return;var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;var seen=new WeakSet();var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);var d=parseFloat(e.target.getAttribute('data-reveal')||'0')*1000||0;e.target.animate([{opacity:0,transform:'translateY(20px)'},{opacity:1,transform:'none'}],{duration:reduce?0:600,delay:reduce?0:d,easing:'cubic-bezier(.22,1,.36,1)',fill:'both'})})},{rootMargin:'0px 0px -60px 0px'});var queued=false;function scan(){queued=false;document.querySelectorAll('[data-reveal]').forEach(function(el){if(!seen.has(el)){seen.add(el);io.observe(el)}})}function schedule(){if(!queued){queued=true;requestAnimationFrame(scan)}}new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true});if(document.readyState!=='loading')scan();else document.addEventListener('DOMContentLoaded',scan)})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cream"
        >
          Skip to content
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${site.url}/#organization`,
                name: site.name,
                url: site.url,
                slogan: site.tagline,
                description: site.description,
                email: site.email,
                logo: `${site.url}/icons/apple-touch-icon.png`,
                sameAs: Object.values(site.socials),
              },
              {
                "@type": "WebSite",
                "@id": `${site.url}/#website`,
                name: site.name,
                url: site.url,
                publisher: { "@id": `${site.url}/#organization` },
              },
            ],
          }}
        />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingActions />
        <Analytics />
      </body>
    </html>
  );
}
