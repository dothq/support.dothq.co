import React from "react"
import { MainHero } from "../components/MainHero"
import { ProductLine } from "../components/ProductLine"

export const Article = ({ match }: { match: any }) => {
    return (
        <>
            {match.params.product}
            <MainHero />
        </>
    )
}