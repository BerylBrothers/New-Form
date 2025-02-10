import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains_Mono = JetBrains_Mono({
  subsets: ["latin"], weight: ["100", "200", "300", "400",
    "500", "600", "700", "800",],
    variable:'--font-jetbrainsMono'
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains_Mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
