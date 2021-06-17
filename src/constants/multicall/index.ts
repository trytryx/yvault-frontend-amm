import { ChainId } from '@yvaultswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MATIC]: '0x35e4aA226ce52e1E59E5e5Ec24766007bCbE2e7D', // TODO
  [ChainId.MUMBAI]: '0x01173890E45aA0f694B68eB89Cb63B295b439FC3'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
