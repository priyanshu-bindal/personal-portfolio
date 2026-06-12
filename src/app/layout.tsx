import type { Metadata } from "next";
import { Geist, Space_Mono, Space_Grotesk, Bebas_Neue, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "600", "700"],
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  variable: "--font-bebas-neue",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  weight: ["800"],
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400"],
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Priyanshu Bindal | Full Stack & Mobile Developer",
    template: "%s | Priyanshu Bindal",
  },
  description: "Portfolio of Priyanshu Bindal, a Full Stack and Mobile Developer specializing in modern web experiences, Next.js, React, and Flutter.",
  keywords: ["Full Stack Developer", "Mobile Developer", "Next.js", "React", "Flutter", "TypeScript", "Priyanshu Bindal"],
  authors: [{ name: "Priyanshu Bindal" }],
  creator: "Priyanshu Bindal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://priyanshubindal.in',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://priyanshubindal.in",
    title: "Priyanshu Bindal | Full Stack & Mobile Developer",
    description: "Portfolio of Priyanshu Bindal, a Full Stack and Mobile Developer specializing in modern web experiences.",
    siteName: "Priyanshu Bindal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Bindal | Full Stack & Mobile Developer",
    description: "Portfolio of Priyanshu Bindal, a Full Stack and Mobile Developer specializing in modern web experiences.",
    creator: "@priyanshubindal",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Priyanshu Bindal',
  url: 'https://priyanshubindal.in',
  jobTitle: 'Full Stack Engineer & App Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance'
  },
  sameAs: [
    'https://github.com/priyanshu-bindal',
    'https://www.linkedin.com/in/priyanshu-bindal-4b720332a/'
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
        lang="en"
        data-scroll-behavior="smooth"
        className={`${geistSans.variable} ${spaceMono.variable} ${spaceGrotesk.variable} ${bebasNeue.variable} ${bricolageGrotesque.variable} ${jetbrainsMono.variable} h-full antialiased dark scroll-smooth`}
      >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
