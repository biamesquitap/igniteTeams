import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { useCallback, useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { EmptyList } from '@components/EmptyList';
import { Button } from '@components/Button';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getAllGroups } from '@storage/group/getAllGroups';

export function Groups() {
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('NewGroup')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)
      const data = await getAllGroups()
      setGroups(data)
    } catch (error) {
      Alert.alert('Turmas', 'Não foi possível carregar as turmas');
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('Players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />
      <Highlight
        title='Turmas'
        subtitle='Jogue com a sua turma!'
      />
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
            onPress={() => handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={
          groups.length === 0 && { flex: 1 }
        }
        ListEmptyComponent={() => (
          <EmptyList message='Cadastre a primeira turma!' />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  );
}

