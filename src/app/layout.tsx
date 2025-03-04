import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neon Multipurpose Solution",
  description: "Your trusted partner in IT education and professional development.",
  icons: {
    icon: [
      {
        url: "/assets/images/logo.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/assets/images/logo.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/images/logo.png",
        type: "image/png",
      },
    ],
  }
};

export const dynamic = 'force-static';
export const revalidate = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/png" href="/assets/images/logo.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div id="root">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
