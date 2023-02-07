import styled from "styled-components"
import theme from "../../styles/theme"

const MessagesStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-color: white;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
        background-color: white;
    }
    padding: 2rem;
    background: ${theme.bg};
    color: ${theme.mainColor};
    font-size: bold;
    border-radius: 5px 5px 0px 0px;

    .message {
        margin-bottom: 1.2rem;

        &-author {
            font-size: .8rem;
        }

        &-body {
            padding: .5em 1em;
            position: relative;
            display: inline-block;
        }
    }
`

export default MessagesStyled
