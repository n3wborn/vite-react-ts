import {Form} from "../components";
import {changeMessageInput} from "../actions"
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../store";

const mapStateToProps = (state: RootState) => ({
    inputValue: state.inputMessage,
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    changeInputValue: (value: string) => {
        dispatch(changeMessageInput(value))
    }
})

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form)

export default FormContainer
