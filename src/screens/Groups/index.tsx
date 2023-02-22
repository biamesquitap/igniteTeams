import { Header } from '@components/Header';
import { Container } from './styles';
import { Highlight } from '@components/HighLight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { EmptyList } from '@components/EmptyList';
import { Button } from '@components/Button';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

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
          />
        )}
        contentContainerStyle={
          groups.length === 0 && { flex: 1 }
        }
        ListEmptyComponent={() => (
          <EmptyList message='Cadastre a primeira turma!' />
        )}
      />

      <Button
        title='Criar nova turma'
      />
    </Container>
  );
}

