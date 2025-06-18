// React Native temel bileşenlerini import ediyoruz
// Text: Metin bileşeni, StyleSheet: Stil tanımları, TouchableOpacity: Dokunulabilir alan, Alert: Uyarı mesajları
import { Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
// React kütüphanesini import ediyoruz
import React from "react";
// Ionicons ikon paketini import ediyoruz - menü ikonları için
import Ionicons from "@expo/vector-icons/Ionicons";

// MenuItem bileşeni - tek bir menü öğesini temsil eder
// Props: icon (ikon adı), title (başlık), active (aktif durum)
const MenuItem = ({ icon, title, active }) => {
  return (
    // Dokunulabilir alan - menü öğesine tıklanabilir
    <TouchableOpacity
      style={[
        styles.button,
        // Aktif duruma göre arka plan rengini değiştir
        { backgroundColor: active ? "#334455" : "33445511" },
      ]}
    >
      {/* İkon - aktif duruma göre renk değiştirir */}
      <Ionicons name={icon} size={24} color={active ? "#efeffe" : "#334455"} />
      {/* Metin - aktif duruma göre renk değiştirir */}
      <Text
        style={[styles.buttonText, { color: active ? "#efeffe" : "#334455" }]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

// Stil tanımlamaları
const styles = StyleSheet.create({
  // Buton stili
  button: {
    backgroundColor: "#33445511", // Şeffaf arka plan
    borderColor: "#33445555", // Kenarlık rengi
    borderWidth: 1, // Kenarlık kalınlığı
    paddingVertical: 12, // Dikey iç boşluk
    paddingHorizontal: 18, // Yatay iç boşluk
    borderRadius: 10, // Yuvarlak köşeler
    flexDirection: "row", // Yatay düzen
    columnGap: 6, // Elemanlar arası boşluk
    alignItems: "center", // Dikey olarak ortalar
  },

  // Buton metni stili
  buttonText: {
    fontSize: 22, // Metin boyutu
    color: "#334455", // Metin rengi
  },
});

// Bileşeni dışa aktarıyoruz
export default MenuItem;
