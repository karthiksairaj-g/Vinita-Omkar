export default function Polaroid({src,caption}:{src:string,caption:string}){
 return <div className='bg-white p-4 rounded-xl rotate-1'><img src={src}/><p>{caption}</p></div>
}