import React from 'react'
import { Heading, Flex, TicketFillIcon, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from 'utils/formatBalance'
import IconCard, { IconCardData } from '../IconCard'
import FarmCardContent from './FarmCardContent'
import TradeCardContent from './TradeCardContent'
import PoolCardContent from './PoolCardContent'
import FeeCardContent from './FeeCardContent'

// Values fetched from bitQuery effective 6/9/21
const txCount = 30841921
const addressCount = 2751624

const Stats = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const { theme } = useTheme()

  const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }

  const FarmCardData: IconCardData = {
    icon: <CommunityIcon color="secondary" width="36px" />,
  }

  const PoolCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  const LotteryCardData: IconCardData = {
    icon: <TicketFillIcon color="secondary" width="36px" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      {/* <GradientLogo height="48px" width="48px" mb="24px" /> */}
      <Heading textAlign="center" scale="xl" mb="24px">
        {t('Choose your path to the Defi Infinity.')}
      </Heading>
      {/* <Text textAlign="center" color="textSubtle">
        {t('PancakeSwap has the most users of any decentralized platform, ever.')}
      </Text>
      <Flex flexWrap="wrap">
        <Text display="inline" textAlign="center" color="textSubtle" mb="20px">
          {entrusting}
          <>{data ? <>{tvlString}</> : <Skeleton display="inline-block" height={16} width={70} mt="2px" />}</>
          {inFunds}
        </Text>
      </Flex>

      <Text textAlign="center" color="textSubtle" bold mb="32px">
        {t('Will you join them?')}
      </Text> */}
      <Flex flex="1" maxWidth={['275px', null, null, '100%']}>
        <IconCard {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <TradeCardContent />
        </IconCard>
        <IconCard {...FarmCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <FarmCardContent />
        </IconCard>
        <IconCard {...PoolCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <PoolCardContent />
        </IconCard>
        <IconCard {...LotteryCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>
          <FeeCardContent />
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
