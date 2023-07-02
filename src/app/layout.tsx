import Script from "next/script";
import "./globals.css";
import { Inter } from "next/font/google";
import screenshot from "../../public/screenshot.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Tailwind Animations | 50+ Handcrafted Tailwind Animations For Your Next Project",
  description:
    "Beautiful gradients, buttons, backgrounds and more. Simply copy & paste the code into your project. Get started today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        property="og:image"
        content="https://media.licdn.com/dms/image/D5622AQGfX0DVU_v7LQ/feedshare-shrink_2048_1536/0/1688274807107?e=1691020800&v=beta&t=sEEonYlyuBguwxUJDfit31XT40MOH2Lp23-x7kLlfz8"
      />
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></Script>
        <Script
          id="gtag"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
