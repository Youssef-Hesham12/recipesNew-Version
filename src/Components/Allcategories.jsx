import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router'

export default function Allcategories() {
   //state
   //loading
   let [searcharams] = useSearchParams();

  let categ = searcharams.get("c");

  console.log(categ);

  categ = categ ? categ : "Beef";

    function getallCategro(){
     return  axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    }



   


  let {data,error,isLoading,isError}  =  useQuery({
        queryKey:["allcateg"],
        queryFn:getallCategro,
        select:(data)=> data.data.meals
    })


    // console.log(data)


  if (data){
    return (
        <>

        <div className='flex flex-wrap my-5 gap-5 w-[90%]'> 
             {data.map((meal)=><> <Link to={`?c=${meal.strCategory}`} className={`p-3 ${categ==meal.strCategory?"bg-amber-400":"bg-amber-50 "} hover:bg-amber-400 border-2 text-black rounded-2xl`}>{meal.strCategory}</Link>  </>)}

        </div>

       
        
        </>
    )
  }

  if (isLoading){
    return(
        <>
        <h1>loading..........</h1>
        </>
    )
  }




  return (
    <>


    
    </>
  )
}
