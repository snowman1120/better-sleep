import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import Purchases from 'react-native-purchases'
import styled from 'styled-components/native'
import { fonts, StyleProps } from '../../styles/themes'
import { IconBold } from '../iconRegular'
import TranslatedText from '../TranslatedText'

const BuyCoaching = () => {
  const navigation = useNavigation()
  const [price, setPrice]: any = useState(null)

  const getProducts = async () => {
    try {
      const offerings = await Purchases.getOfferings()
      if (
        offerings.current !== null &&
        offerings.current.monthly !== undefined
      ) {
        setPrice(offerings.current.monthly?.product.price_string)
      }
    } catch (e) {}
  }

  useEffect(() => {
    getProducts()
  }, [])

  const moveToPurchase = () => {
    navigation.navigate('PurchaseView')
  }

  return (
    <Container>
      <AndroidContainer>
        <Button activeOpacity={0.9} onPress={moveToPurchase}>
          <LeftColumn>
            <Text>SUB_NOW</Text>
            <MiniText>SUB_NOW_MINI</MiniText>
          </LeftColumn>

          <RightColumn>
            {price ? (
              <>
                <PriceContainer>
                  <Price>{price}</Price>
                  <Monthly>MONTH</Monthly>
                </PriceContainer>
                <Icon name="chevronRight" height={30} width={30} />
              </>
            ) : (
              <Loader />
            )}
          </RightColumn>
        </Button>
      </AndroidContainer>
    </Container>
  )
}

export default BuyCoaching

const LeftColumn = styled.View`
  flex: 1;
`
const RightColumn = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const Icon = styled(IconBold).attrs((props: StyleProps) => ({
  fill: props.theme.SECONDARY_TEXT_COLOR
}))``

const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
`

const AndroidContainer = styled.View`
  elevation: 3;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
  background-color: ${(props: StyleProps) =>
    props.theme.SECONDARY_BACKGROUND_COLOR};
`

const Button = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: ${(props: StyleProps) =>
    props.theme.SECONDARY_BACKGROUND_COLOR};
  padding: 20px;
  box-shadow: ${(props: StyleProps) => props.theme.SHADOW};
  flex-direction: row;
`

const Text = styled(TranslatedText)`
  flex: 1;
  font-size: 18px;
  color: ${(props: StyleProps) => props.theme.PRIMARY_TEXT_COLOR};
  font-family: ${fonts.bold};
`

const MiniText = styled(TranslatedText)`
  flex: 1;
  font-size: 11px;
  color: ${(props: StyleProps) => props.theme.PRIMARY_TEXT_COLOR};
  font-family: ${fonts.bold};
`
const PriceContainer = styled.View`
  margin-right: 15px;
  flex-direction: column;
`

const Price = styled.Text`
  color: ${(props: StyleProps) => props.theme.PRIMARY_TEXT_COLOR};
  font-family: ${fonts.bold};
  font-size: 20px;
`

const Monthly = styled(TranslatedText)`
  color: ${(props: StyleProps) => props.theme.SECONDARY_TEXT_COLOR};
  font-family: ${fonts.bold};
  font-size: 11px;
`

const Loader = styled.ActivityIndicator``
