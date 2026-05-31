'use client';
import Container from '../ui/Container';
export default function StoryChapter({title,subtitle,children}:{title:string;subtitle?:string;children?:React.ReactNode}){
return (<section className="min-h-screen flex items-center py-24"><Container><p>{subtitle}</p><h2>{title}</h2>{children}</Container></section>);
}