import { Exo_2 } from "next/font/google"
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const Exo = Exo_2({ subsets: ["latin"] })

export const metadata = {
  title: "AiCourse",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body className={Exo.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
