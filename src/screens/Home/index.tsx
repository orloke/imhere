import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

export const Home = () => {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  const handleParticipantAdd = (participant: string) => {
    if (participants.includes(participant)) {
      return Alert.alert(
        'Participante Existe.',
        'Já existe um participante com esse nome na lista.'
      )
    }
    setParticipants((prev) => [...prev, participant])
    setParticipantName('')
  }

  const handleParticipantRemove = (participant: string) => {
    Alert.alert('Remover', `Remover o participante ${participant}?`, [
      {
        text: 'Sim',
        onPress: () => {
          Alert.alert('Deletado!')
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sabado, 4 de Novembro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          value={participantName}
          onChangeText={setParticipantName}
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd(participantName)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  )
}
