'use client'; import {motion} from 'framer-motion';
export default function ScaleIn({children}:{children:React.ReactNode}){
return <motion.div initial={{opacity:0,scale:.9}} whileInView={{opacity:1,scale:1}}>{children}</motion.div>
}