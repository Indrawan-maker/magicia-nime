"use client"

import React, { useEffect, useState } from 'react'
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';
import CardAnimeList from '@/components/CardAnimeList';
import { getAnimeResponse } from '../libs/api-libs';

const Page = () => {
    const [page, setPage] = useState(1)
    const[topAnime, setTopAnime] = useState([])

    const fetchData = async() => {
        const populerAnime = await getAnimeResponse("top/anime", `page=${page}`)
            setTopAnime(populerAnime)
    }

    useEffect(()=> {
        fetchData()
    }, [page])

    return (
        <>
            <HeaderMenu title={`Anime Terpopuler #${page}`}/>
            <CardAnimeList api={topAnime}/>
            <Pagination page={page} 
            lastPage={topAnime.Pagination?.last_visible_page}
            setPage={setPage}
            />
        </>
    );
};

export default Page;