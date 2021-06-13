import React from "react"
import { StyledCard } from "./style"

export const Card = ({ children, bg, w, h, style }: { children: any; bg?: any; w?: number; h?: number; style?: any }) => {
    return (
        <StyledCard background={bg} w={w} h={h} style={style}>
            {children}
        </StyledCard>
    )
}