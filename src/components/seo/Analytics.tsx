import Script from "next/script";
import { site } from "@/config/site";

/** GA4 via NEXT_PUBLIC_GA_ID. Renders nothing when the ID is unset. */
export function Analytics() {
  if (!site.gaId) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.gaId}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
