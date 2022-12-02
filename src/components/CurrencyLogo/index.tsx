//
import { Currency, ETHER, Token } from '@ftm1337/abcdefx-sdk'
import React, { useMemo } from 'react'
import styled from 'styled-components'

///import EthereumLogo from '../../assets/images/ethereum-logo.png'
import eth from '../../assets/images/coins/eth.svg'
import ftm from '../../assets/images/coins/ftm.svg'
import mtv from '../../assets/images/coins/mtv.svg'
import ech from '../../assets/images/coins/ech.svg'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import Logo from '../Logo'

const getTokenLogoURL = (address: string) =>
  `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${address}/logo.png`

const StyledEthereumLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`
function getEthereumLogo(_cid:any) : any {
  if(_cid == 1) return eth;
  if(_cid == 3) return eth;
  if(_cid == 4) return eth;
  if(_cid == 42) return eth;
  if(_cid == 250) return ftm;
  if(_cid == 3000) return ech;
  if(_cid == 62621) return mtv;
}
export default function CurrencyLogo({
  currency,
  size = '24px',
  style
}: {
  currency?: Currency
  size?: string
  style?: React.CSSProperties
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getTokenLogoURL(currency.address)]
      }

      return [getTokenLogoURL(currency.address)]
    }
    return []
  }, [currency, uriLocations])

  if (currency === ETHER) {
    const { chainId } = useActiveWeb3React()
    console.log(chainId+" is the ChainId for COIN.logo");
    return <StyledEthereumLogo src={getEthereumLogo(chainId)} size={size} style={style} />
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
