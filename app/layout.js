import { Montserrat } from 'next/font/google'
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ContextProvider from './Context';
import { Toaster } from 'sonner'
import {GoogleAnalytics} from "@next/third-parties/google"

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Energiafelhasználási audit napelem rendszerhez - Profi Greentech",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body
          className={`${montserrat.className} antialiased `}
        ><Toaster position="bottom-center" richColors closeButton />
          <Nav />
          {children}
        <Footer />
        </body>
        <GoogleAnalytics gaId='G-JV1RD9PM34' />
      </ContextProvider>
    </html>
  );
}
