// React Native temel bileşenlerini import ediyoruz
// StyleSheet: Stil tanımları, Text: Metin bileşeni, View: Container bileşeni
import { StyleSheet, Text, View } from "react-native";
// React kütüphanesini import ediyoruz
import React from "react";
// MenuItem bileşenini import ediyoruz - menü öğeleri için
import MenuItem from "./MenuItem";

// Menu bileşeni - birden fazla menü öğesini içeren container
const Menu = () => {
  return (
    // Menu wrapper - tüm menü öğelerini sarar
    <View style={styles.menuWrapper}>
      {/* Ana sayfa menü öğesi - aktif durumda */}
      <MenuItem icon="home-outline" title="Home" active />
      {/* Galeri menü öğesi */}
      <MenuItem icon="camera-outline" title="Gallery" />
      {/* Projeler menü öğesi */}
      <MenuItem icon="apps-outline" title="Projects" />
      {/* Hakkında menü öğesi */}
      <MenuItem icon="information-circle-outline" title="About" />
      {/* İletişim menü öğesi */}
      <MenuItem icon="mail-outline" title="Contact" />
    </View>
  );
};

// Bileşeni dışa aktarıyoruz
export default Menu;

// Stil tanımlamaları
const styles = StyleSheet.create({
  // Menu wrapper stili
  menuWrapper: {
    backgroundColor: "#eee", // Açık gri arka plan
    borderWidth: 1, // Kenarlık kalınlığı
    borderColor: "#334455", // Kenarlık rengi
    padding: 10, // İç boşluk
    borderRadius: 20, // Yuvarlak köşeler
    rowGap: 10, // Satırlar arası boşluk
  },
});
