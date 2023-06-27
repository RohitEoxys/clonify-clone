import "./globals.css";
import Header from "./Components/Common/Header/Header";
import { Roboto } from "next/font/google";
import Providers from "./redux/Provider";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Clonify",
  description: "Web platform to create a youtube channel clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Providers>
          <Header />
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
