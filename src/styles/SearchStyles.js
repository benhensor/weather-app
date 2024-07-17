import styled from 'styled-components'

const StyledSearch = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
    background-color: #77777775;
    border-radius: 1rem;
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

const SearchInput = styled.input`
    min-width: 10em;
    width: 65%;
    border: 1px solid #ffffff25;
    border-radius: 0.5rem;
    padding: 0.5em 1em;
    outline: none;
    color: #ddd;
    background: none;
    font-size: 1.6rem;
    margin-right: 1em;
    position: relative;
    &::placeholder {
        color: #aaa;
        font-size: 1.6rem;
    }
    &:focus {
        outline: none;
        border: 1px solid #ffffff25;
    }
    &::before {
        content: "${props => props.errorMessage}";
        color: red;
        position: absolute;
        top: 0;
        left: 100%;
        padding: 0.5em 1em;
        font-size: 1.2rem;
    }
`

const SearchIcons = styled.div`
    display: flex;
    align-items: center;
`

const SearchButton = styled.button`
    border: none;
    background: none;
    img {
        width: 2em;
        height: 2em;
        margin: 0 0.5rem;
        cursor: pointer;
    }
`

export { StyledSearch, SearchContainer, SearchInput, SearchIcons, SearchButton }