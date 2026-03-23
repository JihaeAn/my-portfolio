import "./pdf.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "안지해 | 포트폴리오 PDF",
}

export default function PDFLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
