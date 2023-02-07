import styled from "styled-components"
import theme, {lighten} from "../../styles/theme"

const ChatStyled = styled.div`
    width: 33vw;
    margin: 10px auto 0 auto;
    display: flex;
    flex-direction: column;
    background-color: ${lighten(theme.mainColor, .20)};
    box-shadow: 0 0 3em rgba(0, 0, 0, .4);
    border-radius: 5px;
`

export default ChatStyled
