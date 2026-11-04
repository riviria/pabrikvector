import type {Metadata} from 'next'
import './globals.css'
import {LanguageProvider} from '@/components/language'
import {Header,Footer,FloatingWhatsapp} from '@/components/site'
export const metadata:Metadata={title:{default:'Pabrik Vector — Creative Digital Design Studio',template:'%s | Pabrik Vector'},description:'Studio ilustrasi dan desain digital. Temukan aset vector, ikon, karakter, ilustrasi flat dan layanan desain custom.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body><LanguageProvider><Header/><main>{children}</main><Footer/><FloatingWhatsapp/></LanguageProvider></body></html>}
