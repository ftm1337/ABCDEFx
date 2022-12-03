import { Currency, ETHER, Token } from '@ftm1337/abcdefx-sdk'
import { COIN_symbol } from '../utils/coinMeta'
import { useActiveWeb3React } from '../hooks'

const { chainId } = useActiveWeb3React()
export function currencyId(currency: Currency): string {
  if (currency === ETHER) return COIN_symbol(chainId)
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
