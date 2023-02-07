import styled from "styled-components"
import theme from "../../styles/theme"

const MessagesStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 2rem;
    max-width: 700px;
    background: ${theme.bg};
    color: ${theme.mainColor};
    font-size: bold;
    border-radius: 5px;
`

export default MessagesStyled
