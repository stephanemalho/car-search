import { CustomFilter, Hero, SearchBar } from "@/components";

export default function Home() {
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
      </div>
    </main>
  )
}
