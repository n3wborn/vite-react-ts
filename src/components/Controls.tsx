// @ts-ignore
const Controls = ({randomFirstColor, randomLastColor}) => (
        <>
            <div className="buttons group">
                <button
                    type="button"
                    className="button"
                    id="randFirst"
                    onClick={randomFirstColor}
                >
                    Random First
                </button>
                <button
                    type="button"
                    className="button"
                    id="randLast"
                    onClick={randomLastColor}
                >
                    Random Last
                </button>
            </div>
        </>
    )

export default Controls
