'use client'; import {motion} from 'framer-motion';
export default function FadeLeft({children}:{children:React.ReactNode}){
return <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}}>{children}</motion.div>
}