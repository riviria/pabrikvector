'use client'
import {createContext,useContext,useEffect,useState,ReactNode} from 'react'
import {Lang} from '@/lib/data'
import {copy} from '@/lib/i18n'
type Context={lang:Lang;setLang:(lang:Lang)=>void;t:typeof copy.id | typeof copy.en}
const LanguageContext=createContext<Context | null>(null)
export function LanguageProvider({children}:{children:ReactNode}){
 const [lang,setLanguage]=useState<Lang>('id')
 useEffect(()=>{const saved=window.localStorage.getItem('pv-language');if(saved==='id'||saved==='en')setLanguage(saved)},[])
 const setLang=(next:Lang)=>{setLanguage(next);window.localStorage.setItem('pv-language',next)}
 useEffect(()=>{document.documentElement.lang=lang},[lang])
 return <LanguageContext.Provider value={{lang,setLang,t:copy[lang]}}>{children}</LanguageContext.Provider>
}
export function useLanguage(){const ctx=useContext(LanguageContext);if(!ctx)throw new Error('LanguageProvider missing');return ctx}
