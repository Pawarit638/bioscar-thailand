import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const thai = IBM_Plex_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const title = "Bioscar Thailand | เซรั่มดูแลรอยแผลเป็น ไบโอนาโนเจล";
const description =
  "Bioscar เซรั่มดูแลรอยแผลเป็น รอยดำ รอยแดง ด้วยเทคโนโลยีไบโอนาโนเจล ผสานสารสกัดสมุนไพร 7 ชนิดจากจังหวัดน่าน ทาได้ทั้งผิวหน้าและผิวกาย ราคา 190 บาท";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Bioscar Thailand",
  openGraph: {
    title,
    description,
    siteName: "Bioscar Thailand",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f7c7f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${thai.variable} antialiased`}>{children}</body>
    </html>
  );
}
