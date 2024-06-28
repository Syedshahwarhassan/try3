
const list =async(id)=>{
const response=await fetch(`https://dummyjson.com/recipes/${id}`)
const data= await response.json();
console.log(data)
return data; 
}
const detail= async ({params})=>{
  const singlelist=await list(params.detail);
    return(
        
<div>
<div className="flex justify-center">
     <img src='./logo.png' className="" height="150px" width="150px"/>
     </div>
     <hr className=""/>
<div className='w-100 h-100 flex flex-wrap justify-evenly'>

<div className='w-1/2 h-100  flex justify-center'>
<img src={singlelist?.image} className='w-4/5 h-100 m-5' alt=''/>

</div>
<div className='w-1/2 h-100 '>
<h1 className="text-2xl text-black p-5 font-extrabold">{singlelist?.name}</h1>
<div className='flex flex-wrap'>
Ingredients:
{
singlelist?.ingredients.map((c)=>{
    return(
    <p className='p-5  text-slate-600 font-bold'>{c}</p>
    )
    })
}
</div>
<div>
Instructions:
{
    singlelist?.instructions.map((i)=>{
        return(
            <p className='text-medium text-slate-500 p-1'>{i}</p>
        )
    })
}
</div>
</div>
</div>
</div>
    )
}
export default detail