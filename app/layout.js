import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ContextProvider from "./Context";
import { Toaster } from "sonner";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import MetaPixelTracker from "./components/MetaPixelTracker";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Napelem rendszer Kalkulátor - Profi Greentech",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '109272727997510');
        fbq('track', 'PageView');
      `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=109272727997510&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Meta Pixel Lead Event */}
        <script
          dangerouslySetInnerHTML={{
            __html: `fbq('track', 'Lead');`,
          }}
        />
        {/* End Meta Pixel Code */}
      </head>
      <body className={`${montserrat.className} antialiased `}>
        <ContextProvider>
          <Toaster position="bottom-center" richColors closeButton />
          <Nav />
          {children}
          <Footer />
        </ContextProvider>
      </body>
      <GoogleAnalytics gaId="G-JV1RD9PM34" />
      <GoogleTagManager gtmId="AW-401271164" />
    </html>
  );
}
