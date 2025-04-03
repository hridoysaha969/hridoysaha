"use client";

import { useEffect, useRef, useState } from "react";

export default function GoogleAd({ adSlot }) {
  const [isClient, setIsClient] = useState(false);
  const adClient = process.env.GOOGLE_AD_CLIENT;

  const adRef = useRef(null);

  useEffect(() => {
    setIsClient(true); // Ensures ad loads only on the client
    if (typeof window !== "undefined" && adRef.current) {
      try {
        if (!adRef.current.dataset.loaded) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          adRef.current.dataset.loaded = "true"; // Prevent reloading the ad
        }
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, [adRef]);

  if (!isClient) return null; // Prevent SSR mismatch warning

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
