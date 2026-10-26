import "./globals.css";
import ClientShell from "../components/client-shell";

export const metadata = {
  title: "ittisal / اتصال — Find your next Gulf opportunity",
  description: "A more human way to find work, hire talent, and invest across the GCC.",
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body><ClientShell>{children}</ClientShell></body>
    </html>
  );
}
