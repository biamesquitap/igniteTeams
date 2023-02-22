
import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoImg from "@assets/logo.png"

type PropsHeader = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: PropsHeader) {
  return (
    <Container>

      {
        showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }

      <Logo source={logoImg} />
    </Container>
  )
}