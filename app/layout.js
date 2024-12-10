import { Montserrat } from 'next/font/google'
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Napelem rendszer Kalkulátor - Profi Greentech",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body
          className={`${montserrat.className} antialiased `}
        ><Nav />
          {children}
        <Footer />
      </body>
    </html>
  );
}
