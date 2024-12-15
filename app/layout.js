import { Montserrat } from 'next/font/google'
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ContextProvider from './Context';
import { Toaster } from 'sonner'

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
      <ContextProvider>
        <body
          className={`${montserrat.className} antialiased `}
        ><Toaster position="bottom-center" richColors />
          <Nav />
          {children}
        <Footer />
        </body>
      </ContextProvider>
    </html>
  );
}
