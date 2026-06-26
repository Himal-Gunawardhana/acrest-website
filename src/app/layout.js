import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit'
});

export const metadata = {
  title: "Acrest Waste Solutions | Environmental Infrastructure & Resource Recovery",
  description: "Developing innovative resource recovery, biomass processing, and carbon manufacturing solutions that create environmental and economic value in Northern Minnesota.",
  keywords: "Acrest Waste Solutions, Resource Recovery Minnesota, Biomass Processing Minnesota, Carbon Products Minnesota, Biochar Minnesota, Environmental Infrastructure, Waste Diversion Solutions, Forestry Residual Processing, Circular Economy Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
        <GoogleAnalytics gaId="G-PLACEHOLDER" />
      </body>
    </html>
  );
}
