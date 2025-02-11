import { Montserrat } from 'next/font/google'
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ContextProvider from './Context';
import { Toaster } from 'sonner'
import {GoogleAnalytics, GoogleTagManager} from "@next/third-parties/google"

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
      
        <body
          className={`${montserrat.className} antialiased `}
        >
        <ContextProvider>
            <Toaster position="bottom-center" richColors closeButton />
          <Nav />
          {children}
        <Footer />
        </ContextProvider>
        </body>
        <GoogleAnalytics gaId='G-JV1RD9PM34' />
        <GoogleTagManager gtmId='AW-401271164' />
    </html>
  );
}
