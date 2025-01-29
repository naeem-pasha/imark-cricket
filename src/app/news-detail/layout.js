import { Inter } from "next/font/google";

export const metadata = {
  title: "News Detail",
  description: "Live cricket scores, news, and updates",
};
export default function RootLayout({ children }) {
  return <main className=" max-w-3xl mx-auto bg-white">{children}</main>;
}
