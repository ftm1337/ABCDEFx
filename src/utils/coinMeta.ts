import { ChainId } from '@ftm1337/abcdefx-sdk'

const COINS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]:	'ETH',
  [ChainId.RINKEBY]:	'ETH',
  [ChainId.ROPSTEN]:	'ETH',
  [ChainId.GÖRLI]:		'ETH',
  [ChainId.KOVAN]:		'ETH',
  [ChainId.FANTOM]:		'FTM',
  [ChainId.ECHELON]:	'ECH',
  [ChainId.MULTIVAC]:	'MTV'
}

const WCOINS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]:	'WETH',
  [ChainId.RINKEBY]:	'WETH',
  [ChainId.ROPSTEN]:	'WETH',
  [ChainId.GÖRLI]:		'WETH',
  [ChainId.KOVAN]:		'WETH',
  [ChainId.FANTOM]:		'WFTM',
  [ChainId.ECHELON]:	'WECH',
  [ChainId.MULTIVAC]:	'WMTV'
}

export function COIN_symbol_null(chainId: ChainId | undefined ): string {
  return chainId?COINS[chainId]:"???"
}

export function COIN_symbol(chainId: any): any {
  if(chainId && chainId) {
    return COINS[chainId]
  }
}

export function WETH_symbol(chainId: any): any {
  if(chainId && chainId) {
    return WCOINS[chainId]
  }
}