import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Medi Connect",
  description: "Connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        {/* Header */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="bg-muted/50 py-8">
            <div className="container mx-auto px-4 text-center text-gray-200">
              <p>Made with 💗 by Anshuman</p>
            </div>
          </footer>
        </ThemeProvider>

        {/* Footer */}

      </body>
    </html>
  );
}
