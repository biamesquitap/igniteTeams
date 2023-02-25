import { Container, FilterStyleProps, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & FilterStyleProps & {
  title: string,
}

export function Filter({ title, isActivity = false, ...rest }: Props) {
  return (
    <Container {...rest} isActivity={isActivity}>
      <Title>
        {title}
      </Title>
    </Container>
  )
}