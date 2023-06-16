import { CarCard, CustomFilter, Hero, SearchBar, ShowMoreCards } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";

export default async function Home( {searchParams} : any , props: any) {

  const allCars = await fetchCars(
    {
      manufacturer: searchParams.manufacturer || "",
      year: searchParams.year || 2022,
      fuel: searchParams.fuel || "",
      limit: searchParams.limit || 10,
      model: searchParams.model || "",
    }
  )

  const isDataEmpty = !Array.isArray(allCars) || !allCars || allCars.length < 1;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-y padding-x max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catalogue:</h1>
          <p>Explorez les voitures de votre choix.</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter  title="fuel" options={fuels} {...props} />
            <CustomFilter  title="year" options={yearsOfProduction} {...props} />
          </div>
        </div>
        {isDataEmpty ? (
          <div className="home__error-container">
            <h1 className="text-black text-xl font-bold">Aucune voiture trouvée</h1>
            <p>{allCars?.message}</p>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => <CarCard car={car} />)}
            </div>
            <ShowMoreCards
              pageNumber={( searchParams.limit || 10 ) / 10 } 
              isNext={(searchParams.limit || 10) > allCars.length }         
            />
          </section>
        )}
      </div>
    </main>
  )
}
