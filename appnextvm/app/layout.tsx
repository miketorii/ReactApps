import { NavLinks } from './ui/nav-links';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
	<NavLinks />
        <main>{children}</main>
      </body>
    </html>
  );
}

