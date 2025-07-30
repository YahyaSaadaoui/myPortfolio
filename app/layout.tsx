import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
    title: 'Yahya Saadaoui – Software Engineer & Full-Stack Developer',
    description: 'Personal portfolio of Yahya Saadaoui, a full-stack software engineer specializing in Java, Spring Boot, React, Angular and microservices. Explore projects, experience, and CV.',
    generator: 'Next.js + Vercel',
    keywords: ['Yahya Saadaoui', 'Software Engineer', 'Full-Stack Developer', 'Java', 'Spring Boot', 'React', 'Angular' , 'Portfolio', 'Microservices'],
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
        <html lang="en">
        <head>
            <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        </head>
        <body>{children}</body>
        </html>
    )
}