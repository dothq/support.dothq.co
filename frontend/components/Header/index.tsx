import React from "react"
import { Logo } from "../Logo/style"
import { StyledHeader } from "./style"

export const Header = ({ style }: { style: any }) => {
    return (
        <StyledHeader style={style}>
            <div>
                <Logo />
            </div>
            <div>
                <a 
                    href={"https://www.dothq.co"} 
                    target={"_blank"} 
                    style={{ 
                        display: "flex", 
                        gap: "10px", 
                        fontWeight: 600, 
                        padding: "10px",
                        textDecoration: "none",
                        color: "currentColor"
                    }}
                >
                    <img src={"/assets/open_in_new.svg"}></img>
                    <span style={{ display: "flex", gap: "4px" }}>
                        @HEADER_RETURN_TO_MAIN@
                    </span>
                </a>
            </div>
        </StyledHeader>
    )
}