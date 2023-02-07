import { createGlobalStyle } from "styled-components"
import theme, { darken} from "./theme"

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${darken(theme.mainColor, 20)}
    }
`

export default GlobalStyles
