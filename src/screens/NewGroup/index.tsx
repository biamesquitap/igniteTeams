import { Container, Content, IconGroup, SpaceBottom } from "./styles";
import { Alert } from 'react-native';
import { Header } from "@components/Header";
import { Highlight } from "@components/HighLight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";


export function NewGroup() {
  const [group, setGroup] = useState('')
  const navigation = useNavigation()

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert('Novo grupo', 'Informe o nome da turma')
      }

      await groupCreate(group)
      navigation.navigate('Players', { group })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message)
      } else {
        Alert.alert('Novo grupo', 'Não foi possível criar o novo grupo')
        console.log(error)
      }
    }
  }

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
          onChangeText={setGroup}
        />
        <SpaceBottom />

        <Button
          title='Criar'
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}