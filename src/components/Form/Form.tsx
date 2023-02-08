import { Send } from "react-feather";
import FormStyled from "./FormStyled";

export interface formPropsTypes {
    inputValue: string
    changeInputValue: Function
    sendMessage: Function
}

const Form = ({ inputValue, changeInputValue, sendMessage}: formPropsTypes) => {
    const handleChange = (e) => {
        changeInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit !')
        sendMessage()
    }

    return (
        <FormStyled>
            <input
                type="text"
                placeholder='Type your message'
                className='input'
                value={inputValue}
                onChange={handleChange}
            />
            <button
                className="submit"
                onSubmit={handleSubmit}
            >
                <Send size='100%' />
            </button>
        </FormStyled>
    );
}

export default Form
