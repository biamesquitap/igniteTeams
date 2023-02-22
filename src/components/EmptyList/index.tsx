import { Container, Message } from "./styles";

type EmptyListsProps = {
  message: string
}

export function EmptyList({ message }: EmptyListsProps) {
  return (
    <Container>
      <Message>
        {message}
      </Message>
    </Container>
  )
}