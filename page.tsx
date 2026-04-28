import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "和継 Watsugi | Discover. Connect. Keep craft alive.",
  description: "Watsugi connects Japanese artisans and their work with people who truly value craftsmanship.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
