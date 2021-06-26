import React from "react"
import { MainHero } from "../components/MainHero"
import { ProductLine } from "../components/ProductLine"
import { Footer } from "../components/Footer"

export const Home = () => {
    return (
        <>
            <MainHero />
            <ProductLine />
            <Footer />
        </>
    )
}