import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Home () {
  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>
        Sabado, 4 de Novembro de 2023
      </Text>
    </View>
  )
}
