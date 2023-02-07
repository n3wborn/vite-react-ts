import styled from "styled-components"
import theme, {lighten} from "../../styles/theme"

const ChatStyled = styled.div`
    width: 33vw;
    background-color: ${lighten(theme.mainColor, .60)};
    box-shadow: 0 0 3em rgba(0, 0, 0, .4);
`

export default ChatStyled
