
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZappAssist - Sistema de Atendimento Multicanal",
  description: "Sistema inteligente de atendimento que unifica WhatsApp, Instagram, Facebook e mais canais em uma única plataforma.",
  keywords: "atendimento multicanal, whatsapp business, chatbot, crm, automação",
  authors: [{ name: "ZappAssist" }],
  openGraph: {
    title: "ZappAssist - Sistema de Atendimento Multicanal",
    description: "Sistema inteligente de atendimento que unifica WhatsApp, Instagram, Facebook e mais canais em uma única plataforma.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
