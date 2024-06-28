import React from 'react'
import Link from 'next/link'
const foodlist= async ()=>{
    try{
        const response=await fetch('https://dummyjson.com/recipes');
        const data= await response.json();
        
        return data.recipes;
    }
    catch(error){
        console.log(error)
    }
}
const Home = async() => {
    const list=await foodlist();
   
  return (
    <div>
     <div className="flex justify-center">
     <img src='./logo.png' className="" height="150px" width="150px"/>
     </div>
     <hr className=""/>
     <h1 className="text-center text-2xl p-5 font-extrabold underline">Top Products Recipes</h1>
     <div className="flex flex-wrap justify-center">
     {
        list.map((x)=>{
            return(
                <Link href={`/Home/${x.id}`}>
                <div className='m-5 border-2 border-slate-300 p-3'>
                <img src={x.image} className="w-60 h-60" alt="food"/>
                <h1 className="text-center text-xl font-bold">{x.name}</h1>
                <p className="text-center">Reviews: {x.reviewCount}</p>
                <p className="text-center">Rating: {x.rating}</p>
                </div>
                </Link>
            )
        })
     }
     </div>
    </div>
  )
}

export default Home
