import React from "react"
import { SearchboxInput, StyledSearchbox } from "./style"

export const Searchbox = () => {
    const ref = React.useRef<HTMLInputElement>(null);
    
    React.useEffect(() => {
        window.addEventListener("DOMContentLoaded", () => {
            if(ref.current) ref.current.value = "";
        })
    }, [ref])

    const onSearchBoxClick = () => {
        if(ref.current) {
            ref.current.focus();
        }
    }

    return (
        <StyledSearchbox onClick={() => onSearchBoxClick()}>
            <i></i>
            <SearchboxInput 
                type="text" 
                ref={ref} 
                placeholder={"@WELCOME_LANDING_SEARCH_PLACEHOLDER@"} 
                autoComplete={"off"}
            />
        </StyledSearchbox>
    )
}