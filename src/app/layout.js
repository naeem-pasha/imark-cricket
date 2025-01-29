import { inter } from "@/lib/font";
import "./globals.css";
import { QuickAccess } from "@/components/quick-access";
import { Footer } from "@/components/footer";
import { ScrollToTopButton } from "@/components/Scroll-Buttom";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/Themeprovider";

export const metadata = {
  title: "Cricket Live Scores & News",
  description: "Live cricket scores, news, and updates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="min-h-screen bg-background">
            <Header />
            <QuickAccess />
            <div className="container mx-auto px-4 py-2 min-h-svh">
              {children}
            </div>
            <ScrollToTopButton />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
