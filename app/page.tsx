
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { searchParamsProps } from "@/types";
import { getCars } from "@/utils";
import { useState } from "react";



export default function Home({searchParams}) { // server component gives access to searchParams
  
  const filterParams: searchParamsProps =  {model: searchParams.model || "" , manufacturer: searchParams.manufacturer || "", year: searchParams.year || "", fuel: searchParams.fuel || "", limit: searchParams.limit || '10'}
  const allCars = await getCars(filterParams);
console.log(searchParams)
// useEffect(()=>{
//   allCars()
// }, [searchParams])
  const dataIsEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      {/* hero */}
      <Hero />

      {/* catalogue */}
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!dataIsEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car, id) => (
                <CarCard key={id} car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 2) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl">Oops, no cars!!!</h2>
          </div>
        )}
      </div>
    </main>
  );
}
