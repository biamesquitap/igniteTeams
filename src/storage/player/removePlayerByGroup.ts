import AsyncStorage from '@react-native-async-storage/async-storage'
import { getPlayersByGroup } from "./getPlayersByGroup"
import { PLAYER_COLLECTION } from '@storage/storageConfig'

export async function removePlayerByGroup(playerName: string, group: string) {
  try {
    const storage = await getPlayersByGroup(group)
    const filtered = storage.filter(player => player.name !== playerName)
    const players = JSON.stringify(filtered)

    await AsyncStorage.setItem(`${PLAYER_COLLECTION} - ${group}`, players)

  } catch (error) {
    throw error
  }
}