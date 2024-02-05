import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs Page",
  description: "Content of blogs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
