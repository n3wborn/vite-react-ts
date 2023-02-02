// Action types
export const CHANGE_CURRENCY = 'CHANGE_CURRENCY'

// Action creators
export const changeCurrency = (currency: string) => ({
    type: CHANGE_CURRENCY,
    // shorten properties of: currency: currency
    currency
})

