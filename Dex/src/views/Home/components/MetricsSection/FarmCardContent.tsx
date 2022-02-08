import React, { useState, useEffect, useMemo } from 'react'
import { Flex, Text, Skeleton, Link, Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  width: 100%;
`

const FarmCardContent = () => {
  const { t } = useTranslation()
  
  return (
    <>
      <Flex flexDirection="column" mt="48px">
        <Text bold fontSize="40px">
          {t('Yield')}
        </Text>
        <Text mb="40px">
          {t('Buy tickets with CAKE, win CAKE if your numbers match')}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <StyledLink href="/lottery" id="homepage-prediction-cta">
          <Button width="100%">
            <Text bold color="invertedContrast">
              {t('Farms')}
            </Text>
          </Button>
        </StyledLink>
      </Flex>
    </>
  )
}

export default FarmCardContent
