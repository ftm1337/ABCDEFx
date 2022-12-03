import { Currency, ETHER, Token } from '@ftm1337/abcdefx-sdk'
import { COIN_symbol } from '../utils/coinMeta'
import { useActiveWeb3React } from '../hooks'

export function currencyId(currency: Currency): string {
  const { chainId } = useActiveWeb3React()
  if (currency === ETHER) return COIN_symbol(chainId)
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
