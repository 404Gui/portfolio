import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../src/i18n/routing';
import localFont from 'next/font/local';
import '../globals.css';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: "Guilherme Pappi | Portfolio",
  description:
    "Portfólio de Guilherme Pappi, desenvolvedor full-stack com foco em soluções escaláveis usando React, Next.js, FastAPI e .NET.",
  keywords: [
    "Guilherme Pappi",
    "Desenvolvedor Full-Stack",
    "React",
    "Next.js",
    "FastAPI",
    ".NET",
    "Analista de Sistemas",
    "Portfólio Desenvolvedor",
    "Dev Frontend Backend",
  ],
  authors: [{ name: "Guilherme Pappi", url: "https://www.pappi.dev" }],
  creator: "Guilherme Pappi",
  openGraph: {
    title: "Guilherme Pappi | Portfólio",
    description:
      "Conheça o portfólio de Guilherme Pappi com projetos em React, Next.js, FastAPI e mais.",
    url: "https://www.pappi.dev",
    siteName: "Guilherme Pappi",
    locale: "pt_BR",
    type: "website",
  },
};


export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}