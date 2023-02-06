import {connect, ConnectedProps} from "react-redux";

import {AppDispatch, RootState} from "../store";
import {Amount} from "../components";
import {changeAmount} from "../actions";

// prepare props to be displayed by component
// if no data to get => `const mapStateToProps = null`
const mapStateToProps = (state: RootState) => {
    return {
        amount: state.amount
    }
}

// prepare functions to be u sed by the component
// if no data to set => `const mapDispatchToProps = {}`
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        changeAmountValue: (value: number) => {
            dispatch(changeAmount(value))
        },
    }
}

// connect container to it's component with `connect(mapStateToProps, mapDispatchToProps)(ComponentName);`
const AmountContainer = connect(mapStateToProps, mapDispatchToProps)(Amount);

export type AmountContainerProps = ConnectedProps<typeof AmountContainer>
export default AmountContainer
