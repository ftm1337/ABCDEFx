//
import { Currency, ETHER, Token } from '@ftm1337/abcdefx-sdk'
import React, { useMemo } from 'react'
import styled from 'styled-components'

///import EthereumLogo from '../../assets/images/ethereum-logo.png'
import eth from '../../assets/images/coins/eth.svg'
import cro from '../../assets/images/coins/cro.svg'
import bnb from '../../assets/images/coins/bnb.svg'
import dai from '../../assets/images/coins/dai.svg'
import matic from '../../assets/images/coins/matic.svg'
import ftm from '../../assets/images/coins/ftm.svg'
import kcs from '../../assets/images/coins/kcs.svg'
import ech from '../../assets/images/coins/ech.svg'
import mtv from '../../assets/images/coins/mtv.png'
import kava from '../../assets/images/coins/kava.svg'
import avax from '../../assets/images/coins/avax.svg'
import useHttpLocations from '../../hooks/useHttpLocations'
import { WrappedTokenInfo } from '../../state/lists/hooks'
import Logo from '../Logo'
import { useActiveWeb3React } from '../../hooks'

const getTokenLogoURL = (_cid:any, address: string) =>
  `https://ftm.guru/tokenlists/icons/${_cid}/${address}.png`

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
  if(_cid == 5) return eth;
  if(_cid == 26) return cro;
  if(_cid == 42) return eth;
  if(_cid == 56) return bnb;
  if(_cid == 100) return dai;
  if(_cid == 137) return matic;
  if(_cid == 250) return ftm;
  if(_cid == 321) return kcs;
  if(_cid == 3000) return ech;
  if(_cid == 62621) return mtv;
  if(_cid == 2222) return kava;
  if(_cid == 43114) return avax;
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

  const { chainId } = useActiveWeb3React()

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return []

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getTokenLogoURL(chainId, currency.address)]
      }

      return [getTokenLogoURL(chainId, currency.address)]
    }
    return []
  }, [currency, uriLocations])

  if (currency === ETHER) {
    console.log(chainId+" is the ChainId for COIN.logo");
    return <StyledEthereumLogo src={getEthereumLogo(chainId)} size={size} style={style} />
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
}
