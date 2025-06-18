import { View, StyleSheet, Text } from "react-native";

function App() {
  // JSX ile kullanıcı arayüzünü oluşturuyoruz
  return (
    // Ana container - tüm içeriği sarar
    <View style={styles.container}>
      {/* Ekranda gösterilecek metin */}
      <Text style={styles.text}>Hello React Native</Text>
    </View>
  );
}

// Stil tanımlamaları - StyleSheet.create ile performanslı stil oluşturma
const styles = StyleSheet.create({
  // Ana container stili
  container: {
    backgroundColor: "#55f", // Mavi arka plan rengi
    display: "flex", // Flexbox layout kullanımı
    flex: 1, // Tüm ekranı kaplar
    justifyContent: "center", // Dikey olarak ortalar
    alignItems: "flex-end", // Yatay olarak sağa hizalar
  },
  // Metin stili
  text: {
    color: "#fff", // Beyaz metin rengi
    fontSize: 32, // Metin boyutu
  },
});

// Bileşeni dışa aktarıyoruz - diğer dosyalarda kullanılabilir
export default App;
