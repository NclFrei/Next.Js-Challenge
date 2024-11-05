'use client';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
