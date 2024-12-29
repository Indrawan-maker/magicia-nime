import Header from "@/components/CardAnimeList/header"
import CardAnimeList from "@/components/CardAnimeList"
import { getAnimeResponse, getNestedAnimeResponse } from "@/libs/api-libs"


const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = { data : recommendedAnime }


  
  return (
    <>
    {/* {Anime TerPopuler} */}
      <section>
      <Header title="Paling Populer" linkTitle={"List Populer"} linkHref="/populer" />
    <CardAnimeList api={topAnime}/>
      </section>
      {/* Anime recomended */}
      <section>
      <Header title="Rekomendasi" />
    <CardAnimeList api={recommendedAnime}/>
      </section>
  </>
)
}

export default Page