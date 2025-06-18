// React Native temel bileşenlerini import ediyoruz
// StyleSheet: Stil tanımları, View: Container bileşeni
import { StyleSheet, View } from "react-native";
// Özel Menu bileşenini import ediyoruz
import Menu from "./components/Menu";

// Ana uygulama bileşeni - Menu bileşeni ve layout örnekleri
export default function App() {
  return (
    // Ana container - tüm uygulamayı sarar
    <View style={styles.container}>
      {/* Menu bileşeni - özel oluşturulmuş menü */}
      <Menu />
      {/* Parent container - iç içe layout örneği */}
      <View style={styles.parent}>
        {/* Child container - parent içindeki alt bileşen */}
        <View style={styles.child}></View>
      </View>
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

  // Parent container stili - kırmızı yuvarlak kutu
  parent: {
    width: 200, // Genişlik
    height: 100, // Yükseklik
    padding: 20, // İç boşluk
    backgroundColor: "#f55", // Kırmızı arka plan
    borderRadius: 50, // Yuvarlak köşeler
  },
  // Child container stili - mavi yuvarlak kutu
  child: {
    backgroundColor: "#55f", // Mavi arka plan
    flex: 1, // Parent'ın tüm alanını kaplar
    borderRadius: 30, // Yuvarlak köşeler
  },
});
