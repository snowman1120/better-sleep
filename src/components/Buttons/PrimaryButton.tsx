import React from 'react'
import styled from 'styled-components/native'
import colors from '../../styles/colors'
import { fonts } from '../../styles/themes'
import TranslatedText from '../TranslatedText'
import ScalingButton from './ScalingButton'

interface PrimaryButton {
  disabled?: boolean
  onPress: () => void
  title: string
  white?: boolean
  loading?: boolean
}

export const PrimaryButton: React.SFC<PrimaryButton> = (props) => {
  const { loading, white, disabled, title, onPress } = props
  return (
    <ScalingButton
      disabled={loading || disabled}
      onPress={onPress}
      analyticsEvent={`Button ${title} pressed`}>
      <Button white={white} disabled={loading || disabled}>
        {loading ? (
          <Loading />
        ) : (
          <ButtonText white={white} disabled={loading || disabled}>
            {title}
          </ButtonText>
        )}
      </Button>
    </ScalingButton>
  )
}

interface ButtonProps {
  readonly disabled?: boolean
  readonly white?: boolean
}

const Button = styled.View<ButtonProps>`
  border-radius: 5px;
  border-color: ${(props) =>
    props.white ? colors.radiantBlue : 'transparent'};
  border-width: 1px;
  padding: 15px;
  min-width: 150px;
  margin-bottom: 10px;
  width: auto;
  align-items: center;
  background-color: ${(props) =>
    props.white ? colors.white : colors.radiantBlue};
  opacity: ${(props: ButtonProps) => (props.disabled ? 0.2 : 1)};
`

const ButtonText = styled(TranslatedText)<ButtonProps>`
  font-family: ${fonts.medium};
  color: ${(props) => (props.white ? colors.radiantBlue : colors.white)};
  font-size: 15px;
  text-align: center;
  opacity: ${(props: ButtonProps) => (props.disabled ? 0.5 : 1)};
`

const Loading = styled.ActivityIndicator``
