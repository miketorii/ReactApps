import { NavLinks } from './ui/nav-links';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      </head>
      <body>
	<NavLinks />
        <main>{children}</main>
      </body>
    </html>
  );
}

