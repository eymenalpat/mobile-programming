// Expo status bar bileşenini import ediyoruz - cihazın durum çubuğunu yönetir
import { StatusBar } from "expo-status-bar";
// React Native temel bileşenlerini import ediyoruz
// Image: Resim gösterimi, SafeAreaView: Güvenli alan, StyleSheet: Stil tanımları, Text: Metin, View: Container
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
// Feather ikon paketini import ediyoruz - Instagram benzeri ikonlar için
import Feather from "@expo/vector-icons/Feather";
// Expo sabitlerini import ediyoruz - cihaz bilgileri için
import Constants from "expo-constants";

// Ana uygulama bileşeni - Instagram benzeri arayüz
export default function App() {
  // Yerel resim dosyasını require ile yüklüyoruz
  const img = require("./assets/images/user.jpg");
  // Web'den resim URL'si ile resim tanımlıyoruz
  const webImage = { uri: "https://randomuser.me/api/portraits/women/19.jpg" };
  
  return (
    // Ana container - tüm uygulamayı sarar
    <View style={styles.container}>
      {/* Güvenli alan - notch ve status bar'ı dikkate alır */}
      <SafeAreaView>
        {/* Header bölümü - üst menü */}
        <View style={styles.header}>
          {/* Sol taraf - kamera ikonu */}
          <View style={styles.headerLeft}>
            <Feather name="camera" size={24} color="#262626" />
          </View>
          {/* Orta - Instagram logosu */}
          <Text style={styles.logoText}>Instagram</Text>
          {/* Sağ taraf - airplay ve gönder ikonları */}
          <View style={styles.headerRight}>
            <Feather name="airplay" size={24} color="#262626" />
            <Feather name="send" size={24} color="#262626" />
          </View>
        </View>
        {/* İçerik bölümü - resimler */}
        <View style={styles.content}>
          {/* Yerel resim dosyasından resim */}
          <Image source={img} />
          {/* Aynı yerel resim dosyasından ikinci resim */}
          <Image source={img} />
          {/* Web'den yüklenen resim */}
          <Image style={styles.image} source={webImage} />
        </View>
      </SafeAreaView>
    </View>
  );
}

// Stil tanımlamaları
const styles = StyleSheet.create({
  // Ana container stili
  container: {
    flex: 1, // Tüm ekranı kaplar
    flexDirection: "column", // Dikey düzen
    backgroundColor: "#fafafa", // Açık gri arka plan
    alignItems: "stretch", // Yatayda tam genişlik
    paddingTop: Constants.statusBarHeight, // Status bar yüksekliği kadar üst boşluk
  },
  // Header stili
  header: {
    flexDirection: "row", // Yatay düzen
    height: 48, // Sabit yükseklik
    justifyContent: "space-between", // Elemanları arasında eşit boşluk
    backgroundColor: "#fafafa", // Açık gri arka plan
    alignItems: "center", // Dikey olarak ortalar
    paddingHorizontal: 20, // Yatay iç boşluk
    borderBottomColor: "#A6A6AAaa", // Alt kenarlık rengi
    borderBottomWidth: 1, // Alt kenarlık kalınlığı
  },
  // İçerik bölümü stili
  content: {
    backgroundColor: "#fff", // Beyaz arka plan
    flex: 1, // Kalan alanı kaplar
  },
  // Sağ header bölümü stili
  headerRight: {
    flexDirection: "row", // Yatay düzen
    columnGap: 10, // Elemanlar arası boşluk
    flexBasis: 80, // Sabit genişlik
    justifyContent: "flex-end", // Sağa hizalar
  },
  // Sol header bölümü stili
  headerLeft: {
    flexBasis: 80, // Sabit genişlik
  },
  // Logo metni stili
  logoText: {
    fontSize: 24, // Metin boyutu
    color: "#262626", // Koyu gri renk
    flex: 1, // Kalan alanı kaplar
    textAlign: "center", // Ortalar
  },
  // Resim stili
  image: {
    width: 150, // Genişlik
    height: 150, // Yükseklik
  },
});
