import CardAnimeList from "@/components/CardAnimeList"
import Header from "@/components/CardAnimeList/header"


const Page = async ( { params } ) => {
    const {keyword} = params
    const decodedKeyword = decodeURI(keyword)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedKeyword}`)
    const searchAnime = await response.json()


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
