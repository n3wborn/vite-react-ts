import styled from "styled-components"
import theme, { lighten } from "../../styles/theme"

const FormStyled = styled.form`
    height: 4rem;
    display: flex;
    border-radius: 5px;

    .input {
        border: none;
        background: none;
        outline: none;
        width: 100%;
        padding: 1em;
        font-size: 1.2em;

        &:hover {
            border: none;
        }

        &:focus {
            border: none;
        }
    }

    .submit {
        border: none;
        background: none;
        padding: 1em;
        width: 5em;
        background-color: ${theme.mainColor};

        &:hover {
            color: ${lighten(theme.bg, 20)};
        }
    }
`

export default FormStyled
