import type { Metadata } from 'next';
import { Cairo, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  weight: ['300', '400', '600', '700', '900'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'B_20 | Digital Engineering Elite',
  description: 'نحن لا نبني مواقع فقط... نحن نصنع تجارب رقمية من المستقبل. B_20 فريق هندسة رقمية متخصص في تطوير المواقع، الأنظمة الذكية، وتكامل الذكاء الاصطناعي.',
  keywords: ['B_20', 'تطوير مواقع', 'برمجة', 'ذكاء اصطناعي', 'تصميم', 'digital engineering', 'web development', 'AI'],
  openGraph: {
    title: 'B_20 | Digital Engineering Elite',
    description: 'نحن نصنع تجارب رقمية من المستقبل',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased text-white bg-[#030303]" suppressHydrationWarning>
        <div className="bg-noise mix-blend-overlay"></div>
        {children}
      </body>
    </html>
  );
}
