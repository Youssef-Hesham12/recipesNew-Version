import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'

export default function Details() {

    let {id}=useParams()
       

    function getDetails(){
       return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    }

   let {data, isLoading} =useQuery({
        queryKey:["meal",id],
        queryFn:getDetails,
        
    })

    let meal=data?.data.meals[0]

    console.log(meal)


    if (meal){
        return (
            <>

            <div>
                <h1 className='text-4xl font-bold'>{meal.strMeal}</h1>

                <div className='flex flex-wrap my-5'>

                    <div className='md:w-[33.333%]'>

                        <img src={meal.strMealThumb} className='w-full' alt="" />

                    </div>
                    <div className='md:w-[33.333%]'>

                        <p className='px-5'>
                            {meal.strInstructions}
                        </p>

                    </div>
                    <div className='md:w-[33.333%] px-5'>
                        <h3 className='border-b-4 pb-2 border-gray-400'>Ingredients</h3>

                      <div className='bg-white p-5'>


                        <li className='flex my-2 justify-between border-b-2 border-gray-300'>
                            <h5>{meal.strIngredient1}</h5>
                            <span>{meal.strMeasure1}</span>
                        </li>
                        <li className='flex my-2 justify-between border-b-2 border-gray-300'>
                            <h5>{meal.strIngredient2}</h5>
                            <span>{meal.strMeasure2}</span>
                        </li>
                        <li className='flex my-2 justify-between border-b-2 border-gray-300'>
                            <h5>{meal.strIngredient3}</h5>
                            <span>{meal.strMeasure3}</span>
                        </li>
                        <li className='flex my-2 justify-between border-b-2 border-gray-300'>
                            <h5>{meal.strIngredient4}</h5>
                            <span>{meal.strMeasure4}</span>
                        </li>
                        <li className='flex my-2 justify-between border-b-2 border-gray-300'>
                            <h5>{meal.strIngredient5}</h5>
                            <span>{meal.strMeasure5}</span>
                        </li>

                      </div>

                    </div>

                </div>


            </div>
            
            </>
        )
    }



  return (
    <div>Details</div>
  )
}
