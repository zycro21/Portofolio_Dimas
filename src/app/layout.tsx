import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/src/context/SidebarContext";

// Import font Poppins dari Google Fonts
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portfolio (Mochamad Dimas Putra Hermawan)",
  description: "Personal portfolio of Mochamad Dimas Putra Hermawan, a FullStack developer and Software Engineer",
  icons: {
    icon: "/favicon.svg", // Pastikan file ini ada di folder /public
  },
  // Tambahin Open Graph
  openGraph: {
    title: "Portfolio (Mochamad Dimas Putra Hermawan)",
    description: "Personal portfolio of Mochamad Dimas Putra Hermawan, a FullStack developer and Software Engineer",
    url: "https://portofolio-dimasputra.vercel.app/",
    siteName: "Portfolio Dimas",
    images: [
      {
        url: "https://portofolio-dimasputra.vercel.app/images/metadata.png",
        width: 1200,
        height: 630,
        alt: "Preview Portfolio Dimas",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // Tambahin Twitter card
  twitter: {
    card: "summary_large_image",
    title: "Portfolio (Mochamad Dimas Putra Hermawan)",
    description: "Personal portfolio of Mochamad Dimas Putra Hermawan, a FullStack developer and Software Engineer",
    images: ["https://portofolio-dimasputra.vercel.app/images/metadata.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
