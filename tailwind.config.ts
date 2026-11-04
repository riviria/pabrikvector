import type { Config } from 'tailwindcss'
const config: Config = {content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{paper:'#F9F8F5',ink:'#22201F',muted:'#787570',orange:'#F15A32',line:'#E7E4DE',cream:'#F1EEE7'},fontFamily:{sans:['Arial','Helvetica','sans-serif']},boxShadow:{card:'0 18px 45px rgba(29,25,20,.07)'}}},plugins:[]}
export default config
