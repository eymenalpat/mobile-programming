// React Native temel bileşenlerini import ediyoruz
// StyleSheet: Stil tanımları, Text: Metin bileşeni, View: Container, TouchableOpacity: Dokunulabilir alan
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// React kütüphanesini ve useState hook'unu import ediyoruz
import React, { useState } from "react";
// FontAwesome ikon paketini import ediyoruz - artı/eksi ikonları için
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Counter bileşeni - sayaç işlevselliği
// Props: minValue (minimum değer), maxValue (maksimum değer), initialValue (başlangıç değeri)
const Counter = ({ minValue, maxValue, initialValue }) => {
  // Sayaç değerini state olarak tutuyoruz
  const [value, setValue] = useState(initialValue);

  // Azaltma fonksiyonu - ok fonksiyonu (arrow function) kullanımı
  const handleDecrease = () => {
    // Minimum değere ulaşmadıysa azalt
    if (value !== minValue) {
      setValue(value - 1);
    }
  };

  // Artırma fonksiyonu
  const handleIncrease = () => {
    // Maksimum değere ulaşmadıysa artır
    if (value !== maxValue) {
      setValue(value + 1);
    }
  };

  return (
    <View>
      {/* Sayaç container'ı */}
      <View style={styles.counter}>
        {/* Azaltma butonu */}
        <TouchableOpacity
          style={[styles.button, value === minValue && styles.disabledButton]}
          disabled={value === minValue} // Minimum değerdeyse devre dışı bırak
          onPress={handleDecrease} // Tıklandığında azaltma fonksiyonunu çağır
        >
          {/* Eksi ikonu */}
          <FontAwesome name="minus" size={24} color="#eeeeff" />
        </TouchableOpacity>

        {/* Sayaç değeri gösterimi */}
        <Text style={styles.display}>{value}</Text>

        {/* Artırma butonu */}
        <TouchableOpacity
          style={[styles.button, value === maxValue && styles.disabledButton]}
          disabled={value === maxValue} // Maksimum değerdeyse devre dışı bırak
          onPress={handleIncrease} // Tıklandığında artırma fonksiyonunu çağır
        >
          {/* Artı ikonu */}
          <FontAwesome name="plus" size={24} color="#eeeeff" />
        </TouchableOpacity>
      </View>
      {/* Koşullu render - limit mesajı */}
      {(value === minValue || value === maxValue) && (
        <Text style={styles.error}>Reached to limit</Text>
      )}
    </View>
  );
};

// Bileşeni dışa aktarıyoruz
export default Counter;

// Stil tanımlamaları
const styles = StyleSheet.create({
  // Buton stili
  button: {
    width: 50, // Genişlik
    aspectRatio: 1, // Kare şekil (1:1 oran)
    backgroundColor: "#333", // Koyu gri arka plan
    borderRadius: "50%", // Yuvarlak şekil
    justifyContent: "center", // Dikey olarak ortalar
    alignItems: "center", // Yatay olarak ortalar
  },
  // Sayaç container stili
  counter: {
    flexDirection: "row", // Yatay düzen
    justifyContent: "center", // Yatay olarak ortalar
    alignItems: "center", // Dikey olarak ortalar
    paddingVertical: 10, // Dikey iç boşluk
  },
  // Değer gösterimi stili
  display: {
    minWidth: 100, // Minimum genişlik
    fontSize: 36, // Büyük metin boyutu
    textAlign: "center", // Metni ortalar
    fontWeight: "bold", // Kalın yazı
    color: "#333", // Koyu gri renk
  },
  // Devre dışı buton stili
  disabledButton: {
    opacity: 0.8, // Şeffaflık - devre dışı görünüm
  },
  // Hata mesajı stili
  error: {
    color: "#e55", // Kırmızı renk
    fontSize: 16, // Metin boyutu
  },
});
