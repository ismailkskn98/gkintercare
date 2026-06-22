const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gkintercare.com";

export default function manifest() {
  return {
    name: "GK InterCare",
    short_name: "GK InterCare",
    description: "Premium health tourism and international patient coordination services in Istanbul.",
    start_url: "/en",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0B3C5D",
    icons: [
      {
        src: "/images/logo/iconcuk.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/images/logo/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    id: siteUrl,
  };
}
