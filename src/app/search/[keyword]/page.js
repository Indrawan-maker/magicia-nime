import CardAnimeList from "@/components/CardAnimeList"
import Header from "@/components/CardAnimeList/header"


const Page = async ( { params } ) => {
    const {keyword} = params
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`)
    const searchAnime = await response.json()


    return (
        <>
            {/* {keyword user} */}
            <section>
                <Header title={`pencarian untuk ${keyword}...`} linkTitle={"List Populer"} linkHref="/populer" />
                <CardAnimeList api={searchAnime} />
                </section>
</>
    )
}

export default Page
