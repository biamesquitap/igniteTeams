
import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoImg from "@assets/logo.png"

type PropsHeader = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: PropsHeader) {
  const navigation = useNavigation()

  function handleGoHome() {
    navigation.navigate('Groups')
    //pode usar tbm o navigation.popToTop()
  }

  return (
    <Container>

      {
        showBackButton &&
        <BackButton onPress={handleGoHome}>
          <BackIcon />
        </BackButton>
      }

      <Logo source={logoImg} />
    </Container>
  )
}