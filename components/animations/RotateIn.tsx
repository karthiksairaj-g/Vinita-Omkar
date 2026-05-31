'use client'; import {motion} from 'framer-motion';
export default function RotateIn({children}:{children:React.ReactNode}){
return <motion.div initial={{opacity:0,rotate:-5}} whileInView={{opacity:1,rotate:0}}>{children}</motion.div>
}