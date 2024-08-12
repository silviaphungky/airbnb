import '@testing-library/jest-dom'

const fetchPolifill = require('whatwg-fetch')
global.fetch = fetchPolifill.fetch
