import styled from "styled-components";
import React from "react";

type AmountPropsStyle = {
    amount: number,
    changeAmountValue: Function,
}

const AmountDiv = styled.div`
    width: 80%;
    padding: 0.5rem;
    border-left: #1a1a1a 2px solid;
    border-right: #1a1a1a 2px solid;
    text-align: right;
`

const SymbolDiv = styled.div`
    width: 20%;
    padding: 0.5rem;
    border-right: #1a1a1a 2px solid;
    font-weight: bold;
`

const DivWrapper = styled.div`
    display: flex;
`

const Amount = ({amount, changeAmountValue}: AmountPropsStyle) => {
    // execute something when the input changed
    const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        // keep only numeric values
        const result = e.target.value.replace(/\D/g,'')

        // the function (created by the container) that will be executed
        changeAmountValue(e.target.value)
    }

    return (
        <DivWrapper>
            <AmountDiv>
                <input
                    type='text'
                    className='value'
                    value={amount}
                    onChange={onInputChange}
                />
            </AmountDiv>
            <SymbolDiv>EUR</SymbolDiv>
        </DivWrapper>
    )
}

export default Amount
