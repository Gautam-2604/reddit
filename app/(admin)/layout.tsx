import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "Reddish Sanity Admin Panel",
  description: "Reddit but better Sanity Sanity Admin Panel",
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
