import styled from "styled-components";

type AmountPropsStyle = {
    amount: number | string
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

const Amount = ({amount}: AmountPropsStyle) => {
    const onInputChange = (e) => {
        console.log('Amount : ', e.target.value)
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
