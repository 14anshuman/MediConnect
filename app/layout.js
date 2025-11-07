import "./globals.css";
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctors Appointment App",
  description: "Connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
