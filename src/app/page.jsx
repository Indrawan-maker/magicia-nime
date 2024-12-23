import Header from "@/components/CardAnimeList/header"
import CardAnimeList from "@/components/CardAnimeList"

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
  const topAnime = await response.json()
  
  return (
    <>
    {/* {Anime TerPopuler} */}
      <section>
      <Header title="Paling Populer" linkTitle={"List Populer"} linkHref="/populer" />
    <CardAnimeList api={topAnime}/>
      </section>
  </>
)
}

export default Home