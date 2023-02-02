import styled from "styled-components";
import {Symbols} from "./index";

type ResultPropsType = {
    result: number,
    symbol: string,
}
const ResultDiv = styled.div`
    padding: 1rem;
    border: #1a1a1a 2px solid;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
`
const Result = ({result, symbol = 'EUR'}: ResultPropsType) => {
    return (
        <ResultDiv>
            <div>
                {result}
                <span className="value-symbol"> {symbol}</span>
            </div>
            <div>
                <Symbols list={['EUR', 'USD', 'CAD']} current='EUR'></Symbols>
            </div>
        </ResultDiv>
    );
}

export default Result
