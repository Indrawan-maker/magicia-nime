import Header from "@/components/CardAnimeList/header"
import CardAnimeList from "@/components/CardAnimeList"
import { getAnimeResponse } from "./libs/api-libs"


const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")


  
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

export default Page