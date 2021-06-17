import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://yvaultswap.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://yvaultswap.finance/farms'
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: 'https://yvaultswap.finance/nests'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://yvaultswap.finance/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.yvaultswap.finance',
      },
      {
        label: 'Tokens',
        href: 'https://info.yvaultswap.finance/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.yvaultswap.finance/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.yvaultswap.finance/accounts',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/yvaultswap',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/yvaultswap/',
      },
    ]
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/yvaultswap/",
      },
      {
        label: "Docs",
        href: "https://yvaultswap.gitbook.io/yvaultswap-finance/",
      },
      {
        label: "Blog",
        href: "https://yvaultswap.medium.com/",
      },
    ],
  },
]

export default config
