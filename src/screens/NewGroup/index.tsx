import { Container, Content, IconGroup } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/HighLight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";


export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <IconGroup />
        <Highlight
          title='Nova Turma'
          subtitle='Cria a turma para adicionar as pessoas!'
        />

        <Input
          placeholder="Nome da turma"
        />

        <Button
          title='Criar'
        />
      </Content>
    </Container>
  )
}