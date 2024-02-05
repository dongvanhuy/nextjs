import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detail Blogs",
  description: "Content detail of blogs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
