import type { Metadata } from "next";
import { profile } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://frankponce.dev"),
  title: `${profile.name} | ${profile.role}`,
  description: profile.intro,
  openGraph: { title: `${profile.name} Portfolio`, description: profile.intro, images: ["/images/home-hero.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&family=Inter:wght@400;500;600;700&family=Lora:wght@400;500;600&family=Grenze+Gotisch:wght@500;600;700&family=Pirata+One&display=swap"
        />
      </head>
      <body>
        {/* data-pf-theme switches the whole color palette (see globals.css) */}
        <main
          className="bg-pf-canvas font-pf-body text-pf-text relative flex min-h-screen flex-col"
          data-pf-theme="noir"
          style={{ "--pf-nav-height": "77px" } as React.CSSProperties}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
