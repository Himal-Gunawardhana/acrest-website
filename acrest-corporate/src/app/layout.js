import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Acrest Waste Solutions | Environmental Infrastructure & Resource Recovery",
  description: "Developing innovative resource recovery, biomass processing, and carbon manufacturing solutions that create environmental and economic value in Northern Minnesota.",
  keywords: "Acrest Waste Solutions, Resource Recovery Minnesota, Biomass Processing Minnesota, Carbon Products Minnesota, Biochar Minnesota, Environmental Infrastructure, Waste Diversion Solutions, Forestry Residual Processing, Circular Economy Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
