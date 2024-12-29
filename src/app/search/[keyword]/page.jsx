import { getAnimeResponse } from "@/libs/api-libs"
import CardAnimeList from "@/components/CardAnimeList"
import Header from "@/components/CardAnimeList/header"


const Page = async ( { params } ) => {
    const {keyword} = params

    const decodedKeyword = decodeURI(keyword)
    const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`)


    return (
        <>
            {/* {keyword user} */}
            <section>
                <Header title={`pencarian untuk ${decodedKeyword}...`} linkTitle={"List Populer"} linkHref="/populer" />
                <CardAnimeList api={searchAnime} />
                </section>
</>
    )
}

export default Page
