'use client'
import Link from 'next/link'
import Image from 'next/image'
import {ArrowUpRight,Expand,X} from 'lucide-react'
import {useEffect,useState} from 'react'
import {Product,categoryNames,formatPrice} from '@/lib/data'
import {useLanguage} from './language'

export function ProductCard({product}:{product:Product}){
 const {lang,t}=useLanguage()
 const [preview,setPreview]=useState(false)
 const sold=product.status==='sold'
 useEffect(()=>{
  if(!preview)return
  const onKey=(event:KeyboardEvent)=>{if(event.key==='Escape')setPreview(false)}
  document.addEventListener('keydown',onKey)
  const oldOverflow=document.body.style.overflow
  document.body.style.overflow='hidden'
  return()=>{document.removeEventListener('keydown',onKey);document.body.style.overflow=oldOverflow}
 },[preview])
 const art=<>
  <div className="product-image relative aspect-[1.12] overflow-hidden rounded-[18px] flex items-center justify-center" style={{background:product.bg}}>
   <Image src={product.image} alt={product.title} fill sizes="(max-width:768px) 90vw, (max-width:1200px) 45vw, 30vw" className="object-contain p-5 md:p-7 group-hover:scale-[1.07] transition-transform duration-500"/>
   {sold&&<span className="absolute z-10 top-4 left-4 px-3 py-1.5 bg-ink text-white rounded-full text-[10px] font-bold uppercase tracking-wider">{t.sold}</span>}
   <span className="absolute bottom-4 right-4 rounded-full w-10 h-10 bg-white flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-colors">{sold?<Expand size={17}/>:<ArrowUpRight size={18}/>}</span>
  </div>
  <div className="pt-4 flex justify-between items-start gap-3">
   <div><p className="text-muted text-xs mb-1.5">{categoryNames[product.category][lang]}</p><h3 className="font-bold text-lg tracking-tight">{product.title}</h3></div>
   {!sold&&<p className="font-semibold text-sm pt-5 whitespace-nowrap">{formatPrice(product.price)}</p>}
  </div>
 </>
 return <>
  {sold?<button type="button" onClick={()=>setPreview(true)} aria-label={`${lang==='id'?'Lihat gambar':'View image'} ${product.title}`} className="group block min-w-0 w-full text-left focus-visible:outline-2 focus-visible:outline-orange focus-visible:outline-offset-4 rounded-[18px]">{art}</button>:<Link href={`/shop/${product.slug}`} className="group block min-w-0">{art}</Link>}
  {sold&&preview&&<div className="sold-preview-backdrop" role="presentation" onMouseDown={(event)=>{if(event.target===event.currentTarget)setPreview(false)}}>
   <div role="dialog" aria-modal="true" aria-label={`${product.title} — ${t.sold}`} className="sold-preview-dialog">
    <button type="button" onClick={()=>setPreview(false)} className="sold-preview-close" aria-label={lang==='id'?'Tutup gambar':'Close image'} autoFocus><X size={22}/></button>
    <div className="sold-preview-art" style={{background:product.bg}}><Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 96vw, 760px" className="object-contain p-7 md:p-12" priority/></div>
    <div className="sold-preview-caption"><span className="font-black tracking-tight">{product.title}</span><span className="text-xs font-bold text-muted uppercase tracking-wider">{t.sold}</span></div>
   </div>
  </div>}
 </>
}
