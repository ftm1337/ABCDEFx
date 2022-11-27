import { Currency, ETHER, Token } from '@ftm1337/abcdefx-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'MTV'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
