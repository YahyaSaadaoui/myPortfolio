import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
    title: 'Yahya Saadaoui',
    description: 'Implementation Engineer at HPS working on PowerCARD switching, ISO 8583, Oracle CDC, Kafka, and payment security. Explore backend, full-stack, and AI projects.',
    generator: 'Next.js + Vercel',
    keywords: ['Yahya Saadaoui', 'HPS', 'PowerCARD', 'ISO 8583', 'Oracle CDC', 'Kafka', 'Payment Systems'],
    authors: [{ name: 'Yahya Saadaoui', url: 'https://yahyasaadaoui.vercel.app/' }],
    creator: 'Yahya Saadaoui',
    publisher: 'Yahya Saadaoui',
    applicationName: 'Yahya Saadaoui Portfolio',
    metadataBase: new URL('https://yahyasaadaoui.vercel.app/'),
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${GeistSans.className} ${GeistSans.variable} ${GeistMono.variable}`}>
            <body>{children}</body>
        </html>
    )
}
