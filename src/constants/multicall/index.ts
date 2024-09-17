import { ChainId } from '@ftm1337/abcdefx-sdk'
import MULTICALL_ABI from './abi.json'







const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]:	'0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.ROPSTEN]:	'0x53C43764255c17BD724F74c4eF150724AC50a3ed',
  [ChainId.RINKEBY]:	'0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
  [ChainId.CRONOS]:		'0x0fA4d452693F2f45D28c4EC4d20b236C4010dA74',
  [ChainId.GÖRLI]:		'0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
  [ChainId.KOVAN]:		'0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
  [ChainId.BSC]:		'0x41263cBA59EB80dC200F3E2544eda4ed6A90E76C',
  [ChainId.XDAI]:		'0xb5b692a88BDFc81ca69dcB1d924f59f0413A602a',
  [ChainId.MATIC]:		'0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
  [ChainId.FANTOM]:		'0xb828C456600857abd4ed6C32FAcc607bD0464F4F',
  [ChainId.KCC]:		'0x72790D167204be7DF79866d8e6CA9dE09Df83873',
  [ChainId.ECHELON]:	'0x73823ade726449e7ada19d288a5a53cf4eaf5ffb',
  [ChainId.MULTIVAC]:	'0x245bf88a54841490197354ddcc22f8a305543642',
  [ChainId.KAVA]:		'0x7c3e2545ad7009d6f053CAa0153137F60685dD32',
  [ChainId.AVALANCHE]:	'0x071d3cbc06741F062Bee76e4c95f527dF071eD8F',
  [ChainId.TEST_SONIC]:	'0x64532EB2E28B0D0B56b5cba35C0A88fa06285D08'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
