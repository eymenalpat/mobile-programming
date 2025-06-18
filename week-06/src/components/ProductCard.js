// React Native temel bileşenlerini import ediyoruz
// Image: Resim bileşeni, StyleSheet: Stil tanımları, Text: Metin, TouchableOpacity: Dokunulabilir alan, View: Container
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// React kütüphanesini import ediyoruz
import React from "react";
// React Navigation'dan useNavigation hook'unu import ediyoruz - sayfa geçişleri için
import { useNavigation } from "@react-navigation/native";

// ProductCard bileşeni - ürün kartı gösterimi
// Props: productData (ürün verisi)
const ProductCard = ({ productData }) => {
  // Navigation hook'unu kullanıyoruz - sayfa geçişleri için
  const navigation = useNavigation();
  
  return (
    // Dokunulabilir alan - ürün detay sayfasına geçiş için
    <TouchableOpacity
      // Tıklandığında ürün detay sayfasına geçiş yapıyoruz
      onPress={() =>
        navigation.navigate("Product", { productId: productData.id })
      }
      style={styles.wrapper}
    >
      {/* Ürün resmi */}
      <Image style={styles.image} source={{ uri: productData.image }} />
      {/* Ürün başlığı */}
      <Text style={styles.title}>{productData.title}</Text>
      {/* Ürün fiyatı */}
      <Text style={styles.price}>{productData.price}</Text>
    </TouchableOpacity>
  );
};

// Bileşeni dışa aktarıyoruz
export default ProductCard;

// Stil tanımlamaları
const styles = StyleSheet.create({
  // Ürün resmi stili
  image: {
    width: 150, // Genişlik
    height: 150, // Yükseklik
    resizeMode: "contain", // Resmi sığdırma modu
  },
  // Fiyat stili
  price: {
    backgroundColor: "#11f", // Mavi arka plan
    paddingVertical: 5, // Dikey iç boşluk
    paddingHorizontal: 10, // Yatay iç boşluk
    color: "#fff", // Beyaz metin
    alignSelf: "flex-start", // Sola hizala
  },
  // Kart wrapper stili
  wrapper: {
    width: "100%", // Tam genişlik
    backgroundColor: "#fff", // Beyaz arka plan
    alignSelf: "flex-start", // Sola hizala
    padding: 20, // İç boşluk
    borderWidth: 1, // Kenarlık kalınlığı
    borderColor: "#333", // Kenarlık rengi
  },
  // Başlık stili
  title: {
    fontSize: 18, // Metin boyutu
  },
});
