import { Container, Subtitle, Title } from "./styles";

type PropsHighlight = {
  title: string
  subtitle: string
}

export function Highlight({ title, subtitle }: PropsHighlight) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}