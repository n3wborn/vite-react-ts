const randomHexColor = (): string => {
    return `#${Math.random().toString(16).slice(2, 8)}`
}

const generateSpanColor = (color: string): string => {
    return `<span style="color: ${color}">${color}</span>`
}

export {randomHexColor, generateSpanColor}
