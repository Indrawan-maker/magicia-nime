import { getAnimeResponse } from "@/app/libs/api-libs"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
console.log(anime)
    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-2xl text-color-primary font-bold">{anime.data.title} - {anime.data.episodes}
                </h3>
            </div>
            <div className="pt-4 px-4 gap-2 flex sm:flex-nowrap flex-wrap text-color-primary justify-center items-center">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Ranking :</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Skor :</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Anggota :</h3>
                    <p>{anime.data.members}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Popularitas :</h3>
                    <p>{anime.data.popularity}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Tahun :</h3>
                    <p>{anime.data.year}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>Episode :</h3>
                    <p>{anime.data.episodes}</p>
                </div>
            </div>
            <div className="flex sm:flex-nowrap flex-wrap pt-4 px-4 gap-2 text-color-primary">
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="w-full rounded object-cover"
                />
                <p className="text-justify text-xl">{anime.data.synopsis}</p>
            </div>
        </>
    )
}

export default Page