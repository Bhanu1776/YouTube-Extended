import 'styles/globals.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from '@/Providers';
import Navbar from '@/components/Navigation/Navbar/Navbar';
import Sidebar from '@components/Navigation/Sidebar';

export const metadata = {
  title: 'Youtube',
  description: 'The finest alternative to YouTube with additional features',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Youtube Extended" />
        <meta name="twitter:title" content="Youtube Extended" />

        <meta name="description" content="Extended version of Youtube" />
        <meta property="og:description" content="Extended version of Youtube" />
        <meta
          name="twitter:description"
          content="Extended version of Youtube"
        />

        <meta property="og:image" content="https://i.imgur.com/AV7sLqE.png" />
        <meta name="twitter:image" content="https://i.imgur.com/AV7sLqE.png" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="../public/favicons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="../public/favicons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="../public/favicons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="../public/favicons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="../public/favicons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="../public/favicons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="../public/favicons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="../public/favicons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../public/favicons/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="../public/favicons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../public/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="../public/favicons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../public/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={classNames({
          'debug-screens': process.env.NODE_ENV === 'development',
        })}
      >
        <Providers>
          <Navbar />
          <div className="flex">
            <Sidebar />
            {children}
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
