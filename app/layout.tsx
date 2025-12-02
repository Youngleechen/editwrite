// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EditWrite",
  description: "A Next.js app deployed to Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}