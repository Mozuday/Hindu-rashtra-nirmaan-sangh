import "./globals.css";

export const metadata = {
  title: "HRNS",
  description: "Hindu Rashtra Nirman Sangh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}