import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home({ searchParams }) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "",
    fuel: searchParams.fuel || "",
    year: searchParams.year || "",
    limit: searchParams.limit || "",
  })

  const isDataEmpty = !Array.isArray(allCars) || !allCars || allCars.length < 1;
  
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-y padding-x max-width " id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catalogue Autos:</h1>
          <p>Explorez les voitures de votre choix.</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
          </div>
        </div>
        { isDataEmpty ? ( 
          <div className="home__error-container">
            <h1 className="text-black text-xl font-bold">Aucune voiture trouvée</h1>
            <p>{allCars?.message}</p>
          </div>
          ) : (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => <CarCard car={car}/>)}
            </div>
          </section>
        )} 
      </div>
    </main>
  )
}
