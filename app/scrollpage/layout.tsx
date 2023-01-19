import '../globals.css';
export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {

  return (
    <html lang="ko" dir="ltr">
      <body>
          {children}
      </body>
    </html>
  );
}