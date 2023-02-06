// Action types
export const CHANGE_AMOUNT = 'CHANGE_AMOUNT'
export const CHANGE_CURRENCY = 'CHANGE_CURRENCY'
export const WAKE_UP = 'WAKE_UP'

// Action creators
export const changeAmount = (amount: number) => ({
    type: CHANGE_AMOUNT,
    amount
})

export const changeCurrency = (currency: string) => ({
    type: CHANGE_CURRENCY,
    // shorten properties of: currency: currency
    currency
})

export const awake = (loading: boolean) => ({
    type: WAKE_UP,
})
