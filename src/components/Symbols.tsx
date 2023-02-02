type SymbolsPropsType = {
    list: Array<string>,
    current: string
}

const Symbols = ({list, current}: SymbolsPropsType) => {
    const onSelectChange = (e) => {
        console.log(e.target.value)
    }
    return (
        <select
            className="symbols"
            onChange={onSelectChange}
            value={current}
        >
            {list.sort().map((currency) => (
                <option key={currency}>{currency}</option>
            ))}
        </select>
    );
}

export default Symbols
