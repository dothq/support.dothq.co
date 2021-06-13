import React from "react"
import { SearchboxInput, StyledSearchbox } from "./style"

export const Searchbox = () => {
    const ref = React.useRef<HTMLInputElement>(null);

    const onSearchBoxClick = () => {
        if(ref.current) {
            ref.current.focus();
        }
    }

    return (
        <StyledSearchbox onClick={() => onSearchBoxClick()}>
            <i></i>
            <SearchboxInput type="text" ref={ref} placeholder={"How can we help you?"}></SearchboxInput>
        </StyledSearchbox>
    )
}