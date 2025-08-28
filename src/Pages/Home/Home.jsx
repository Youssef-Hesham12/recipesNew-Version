import React from "react";
import Allcategories from "../../Components/Allcategories";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useSearchParams } from "react-router";

export default function Home() {
  let [searcharams] = useSearchParams();

  let categ = searcharams.get("c");

//   console.log(categ);

  categ = categ ? categ : "Beef";

  function AllMeals() {
    return axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categ}`
    );
  }

  let { data, isLoading } = useQuery({
    queryKey: ["allMeals", categ], // allmealsBeef   allmealpasta
    queryFn: AllMeals,
    select: (data) => data.data.meals,
    staleTime:20000,
    
  });

//   console.log(data);

  if (isLoading) {
    return (
      <>
        <h3>loading..............</h3>
      </>
    );
  }

  if (data) {
    return (
      <>
        <h1 className=" text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-300 ">Learn, Cook, Eat Your Food</h1>

        <Allcategories />

        <div className=" flex flex-wrap justify-center gap-y-4 ">

            {data.map((meal)=><>

           <div className="w-[25%] px-4">
             <div className=" p-3 flex justify-center items-center flex-col rounded-xl bg-white">
                <img src={meal.strMealThumb} className="w-[130px] rounded-full" alt="" />
                <h4 className="my-5">{meal.strMeal.split(" ").slice(0,2).join(" ")}</h4>
                <Link className={'bg-green-500 text-white p-3 rounded-2xl'} to={`/meal/${meal.idMeal}`}>View Details</Link>
            </div>
           </div>
            
            </>)}

           

            

         


        </div>
      </>
    );
  }

  return <></>;
}