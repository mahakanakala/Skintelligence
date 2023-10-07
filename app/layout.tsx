import "./globals.css";
import { MdMenu } from 'react-icons/md'
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        suppressHydrationWarning={ true}>
        <div className="navContainer">
          <MdMenu className="menu-icon" />
          <nav className="navbar">
            <Link href="/">
              Home
            </Link>
            <Link href="/about">
              About
            </Link>
            {/* <Link href="/safe" >
              Is your product safe?
            </Link> */}
            <Link href="/stats" >
              See the stats
            </Link>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
