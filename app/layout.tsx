import './globals.css';
import { Header } from './Header';
export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {

  return (
    <html lang="ko" dir="ltr">
      <body>
        {/* <Header /> */}
        {/* <main> */}
          {children}
        {/* </main> */}
      </body>
    </html>
  );
}