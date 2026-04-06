import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Magrão Pinturas – Pintor Imobiliário em Porto Velho',
  description:
    'Transforme sua casa com as mãos de Dean De Andrade Belo – Magrão Pinturas. Pintura imobiliária de qualidade em Porto Velho. Solicite seu orçamento pelo WhatsApp!',
  icons: { icon: '/logo_guia.ico' },
  openGraph: {
    title: 'Magrão Pinturas',
    description: 'O poder de um novo começo, com uma nova cor.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
