import tinycolor from "tinycolor2"

const colors = {
    richBlack: '#0d1b2a',
    oxfordBlue: '#1b263b',
    YinMnBlue: '#415A77',
    SilverLakeBlue: '#778DA9',
    Platinum: '#E0E1DD',
}

export const lighten = (color: string, amount: number) => tinycolor(color).lighten(amount).toString()
export const darken = (color: string, amount: number) => tinycolor(color).darken(amount).toString()

const theme = {
    mainColor: colors.YinMnBlue,
    bg: '#000000',
    bgGradient: 'linear-gradient(to right, #434343, #000000)',
}

//export {}
export default theme
