import { Send } from "react-feather";
import FormStyled from "./FormStyled";

const Form = () => {
    return (
        <FormStyled>
            <input
                type="text"
                placeholder='Type your message'
                className='input'
            />
            <button className="submit">
                <Send size='100%' />
            </button>
        </FormStyled>
    );
}

export default Form
