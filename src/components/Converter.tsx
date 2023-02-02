import {
    Amount,
    Result,
    Spinner,
} from "./index";
import styled from "styled-components";

type ConverterPropsType = {
    loading: boolean
}

const Title = styled.h1`
    font-size: 3.2em;
    line-height: 1;
    margin: 1rem 0;
`

const TopDiv = styled.div`
    padding: 0.5rem;
    border: #1a1a1a 2px solid;
    border-radius: 1.5rem 1.5rem 0 0;
`

const Converter = ({loading}: ConverterPropsType) => {
    return (
        <>
            <TopDiv>
                <Title>Converter</Title>
            </TopDiv>
            {
                loading && (
                    <Spinner/>
                )
            }
            {
                !loading && (
                    <>
                        <Amount amount={1}/>
                        <Result result={1} symbol='EUR'/>
                    </>
                )
            }
        </>
    );
}

export default Converter
