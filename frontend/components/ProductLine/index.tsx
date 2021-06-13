import React from "react"
import { Link } from "react-router-dom"
import { Card } from "../Card"
import { PLContainer, ProductCardIcon, StyledProductLine } from "./style"

const ProductCard = ({ name, description, icon, slug }: { name: any, description: any, icon: any; slug: any }) => {
    return (
        <Link to={`/${slug}`}>
            <Card w={259} h={238} style={{ alignItems: "center", color: "#1662D3" }}>
                <ProductCardIcon icon={icon} />
                <h3 style={{ marginBottom: "10px" }}>{name}</h3>
                <p style={{ color: "gray", textAlign: "center", maxWidth: "180px", lineHeight: "22px" }}>{description}</p>
            </Card>
        </Link>
    )
}

export const ProductLine = () => {
    return (
        <StyledProductLine>
            <PLContainer>
                <h2>@PRODUCTS_LIST_TITLE@</h2>
                <div>
                    <ProductCard 
                        name={"Dot Browser"} 
                        description={"The privacy-based web browser for Windows, macOS and Linux."} 
                        icon={"/assets/product-icons/desktop.svg"}
                        slug={"desktop"} 
                    />

                    <ProductCard 
                        name={"Dot Browser for Android"} 
                        description={"Your favourite privacy browser on Android."} 
                        icon={"/assets/product-icons/mobile.svg"} 
                        slug={"android"} 
                    />

                    <ProductCard 
                        name={"Dot ID"} 
                        description={"Sync your browsing data securely between all your devices."} 
                        icon={"/assets/product-icons/id.svg"} 
                        slug={"one"} 
                    />

                    <ProductCard 
                        name={"Dot Search"} 
                        description={"Browse the web with complete anonymity."} 
                        icon={"/assets/product-icons/search.svg"} 
                        slug={"search"} 
                    />

                    <ProductCard 
                        name={"Postbox"} 
                        description={"Mask your email address and limit what services can send you."} 
                        icon={"/assets/product-icons/postbox.svg"} 
                        slug={"postbox"} 
                    />
                </div>
            </PLContainer>
        </StyledProductLine>
    )
}