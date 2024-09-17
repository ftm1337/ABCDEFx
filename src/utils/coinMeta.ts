import { ChainId } from '@ftm1337/abcdefx-sdk'

const COINS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]:	'ETH',
  [ChainId.RINKEBY]:	'ETH',
  [ChainId.ROPSTEN]:	'ETH',
  [ChainId.GÖRLI]:		'ETH',
  [ChainId.CRONOS]:		'CRO',
  [ChainId.KOVAN]:		'ETH',
  [ChainId.BSC]:		'BNB',
  [ChainId.XDAI]:		'XDAI',
  [ChainId.MATIC]:		'MATIC',
  [ChainId.FANTOM]:		'FTM',
  [ChainId.KCC]:		'KCS',
  [ChainId.ECHELON]:	'ECH',
  [ChainId.MULTIVAC]:	'MTV',
  [ChainId.KAVA]:		'KAVA',
  [ChainId.AVALANCHE]:	'AVAX',
  [ChainId.TEST_SONIC]:	'tS'
}

const WCOINS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]:	'WETH',
  [ChainId.RINKEBY]:	'WETH',
  [ChainId.ROPSTEN]:	'WETH',
  [ChainId.GÖRLI]:		'WETH',
  [ChainId.CRONOS]:		'WCRO',
  [ChainId.KOVAN]:		'WETH',
  [ChainId.BSC]:		'WBNB',
  [ChainId.XDAI]:		'WXDAI',
  [ChainId.MATIC]:		'WMATIC',
  [ChainId.FANTOM]:		'WFTM',
  [ChainId.KCC]:		'WKCS',
  [ChainId.ECHELON]:	'WECH',
  [ChainId.MULTIVAC]:	'WMTV',
  [ChainId.KAVA]:		'WKAVA',
  [ChainId.AVALANCHE]:	'WAVAX',
  [ChainId.TEST_SONIC]:	'WtS'
}

export function COIN_symbol_null(chainId: ChainId | undefined ): string {
  return chainId?COINS[chainId]:"???"
}

export function COIN_symbol(chainId: ChainId): string {
  return COINS[chainId]
}

export function WETH_symbol(chainId: ChainId): string {
  return WCOINS[chainId]
}
