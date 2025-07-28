import { Noto_Sans_JP } from "next/font/google"
import "./globals.css"

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"], // 必要に応じて
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}