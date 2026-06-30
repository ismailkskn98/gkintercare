import localFont from "next/font/local";
import { ToastProvider } from "@/components/ui/toast";
import "../globals.css";

const manrope = localFont({
  src: [
    { path: "../../fonts/Manrope-ExtraLight.woff2", weight: "200" },
    { path: "../../fonts/Manrope-Light.woff2", weight: "300" },
    { path: "../../fonts/Manrope-Regular.woff2", weight: "400" },
    { path: "../../fonts/Manrope-Medium.woff2", weight: "500" },
    { path: "../../fonts/Manrope-SemiBold.woff2", weight: "600" },
    { path: "../../fonts/Manrope-Bold.woff2", weight: "700" },
    { path: "../../fonts/Manrope-ExtraBold.woff2", weight: "800" },
  ],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = localFont({
  src: [
    { path: "../../fonts/CormorantGaramond-Light.woff2", weight: "300" },
    { path: "../../fonts/CormorantGaramond-Regular.woff2", weight: "400" },
    { path: "../../fonts/CormorantGaramond-Italic.woff2", weight: "400", style: "italic" },
    { path: "../../fonts/CormorantGaramond-Medium.woff2", weight: "500" },
    { path: "../../fonts/CormorantGaramond-SemiBold.woff2", weight: "600" },
    { path: "../../fonts/CormorantGaramond-Bold.woff2", weight: "700" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  title: "GK InterCare Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminRootLayout({ children }) {
  return (
    <html lang="tr" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className={`${manrope.className} bg-[#eef4f8] antialiased`}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
