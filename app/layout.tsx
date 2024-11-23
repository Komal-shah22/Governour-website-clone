import type { Metadata } from "next";
import "./globals.css";
import { Roboto} from "next/font/google";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";

const roboto = Roboto({
  weight:['300','400','700','900'],
  subsets:['latin']
});

export const metadata: Metadata = {
  title: "Governour Initiative",
  description: "Governour Initiative for Artificial Intelligence, web 3.o and Metaverse",
  icons:{
    icon:{url:"/logo.png",type:"image/png" }
  }
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
