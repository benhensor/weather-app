import styled from 'styled-components'

const APICount = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-md);
    border-radius: var(--sm);
	font-size: var(--fs-xs);
	width: 100%;
	height: 100%;
	padding: var(--xs);
    > div {
        flex: 1;
        background-color: var(--bg-lt);
        border-radius: var(--xs);
        padding: var(--sm);
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Separator = styled.p`
    margin: 0 var(--xs);
`

export { APICount, Separator }