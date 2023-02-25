import { TouchableOpacityProps } from 'react-native'
import { Container, Title, ButtonTypeProps } from './styles'


type ButtonProps = TouchableOpacityProps & {
  title: string,
  type?: ButtonTypeProps,
}

export function Button({ title, type = 'GREEN', ...rest }: ButtonProps) {
  return (
    <Container
      type={type}
      {...rest}
    >
      <Title>{title}</Title>
    </Container >
  )
}