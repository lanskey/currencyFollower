import { addActiveCurrency } from 'constants/manageCurrencies'

const initialState = {
  list: [
    {
      "currency": "dolar amerykański",
      "code": "USD",
      "bid": 4.0299,
      "ask": 4.1113
    },
    {
      "currency": "dolar australijski",
      "code": "AUD",
      "bid": 3.0809,
      "ask": 3.1431
    },
    { "currency": "dolar kanadyjski", "code": "CAD", "bid": 3.0780, "ask": 3.1402 }, {
      "currency": "euro",
      "code": "EUR",
      "bid": 4.2719,
      "ask": 4.3583
    },
    {
      "currency": "forint (Węgry)",
      "code": "HUF",
      "bid": 0.013865,
      "ask": 0.014145
    },
    { "currency": "frank szwajcarski", "code": "CHF", "bid": 4.0061, "ask": 4.0871 }, {
      "currency": "funt szterling",
      "code": "GBP",
      "bid": 5.0341,
      "ask": 5.1359
    },
    { "currency": "jen (Japonia)", "code": "JPY", "bid": 0.035373, "ask": 0.036087 }, {
      "currency": "korona czeska",
      "code": "CZK",
      "bid": 0.1581,
      "ask": 0.1613
    },
    { "currency": "korona duńska", "code": "DKK", "bid": 0.5745, "ask": 0.5861 }, {
      "currency": "korona norweska",
      "code": "NOK",
      "bid": 0.4800,
      "ask": 0.4896
    },
    { "currency": "korona szwedzka", "code": "SEK", "bid": 0.4510, "ask": 0.4602 }, {
      "currency": "SDR (MFW)",
      "code": "XDR",
      "bid": 5.4420,
      "ask": 5.5520
    }
  ],
  active: {}
}

function manageCurrencies (state = initialState, action) {
  switch (action.type) {
    case addActiveCurrency.request:
      return { ...state, active: action.which }
    default:
      return state
  }
}

export default manageCurrencies