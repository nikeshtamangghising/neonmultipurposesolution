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
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "/assets/images/logo.png",
        sizes: "16x16",
        type: "image/png"
      }
    ],
    shortcut: ["/assets/images/logo.png"],
    apple: [
      {
        url: "/assets/images/logo.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
