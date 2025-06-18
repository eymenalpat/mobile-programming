// React Native temel bileşenlerini import ediyoruz
// StyleSheet: Stil tanımları, View: Container bileşeni
import { StyleSheet, View } from "react-native";
// Counter bileşenini import ediyoruz - sayaç işlevselliği için
import Counter from "./components/Counter";

// Ana uygulama bileşeni - Counter bileşeni örneği
export default function App() {
  return (
    // Ana container - tüm uygulamayı sarar
    <View style={styles.container}>
      {/* Counter bileşeni - min, max ve başlangıç değerleri ile */}
      <Counter minValue={0} maxValue={5} initialValue={2} />
    </View>
  );
}

// Stil tanımlamaları
const styles = StyleSheet.create({
  // Ana container stili
  container: {
    flex: 1, // Tüm ekranı kaplar
    backgroundColor: "#fff", // Beyaz arka plan
    alignItems: "center", // Yatay olarak ortalar
    justifyContent: "center", // Dikey olarak ortalar
  },
});
