// React Native temel bileşenlerini import ediyoruz
// View: Container bileşeni, Text: Metin bileşeni
import { View, Text } from "react-native";
// React kütüphanesini ve Context API'yi import ediyoruz
// createContext: Context oluşturmak için, useState: State yönetimi için
import React, { createContext, useState } from "react";

// Cart context'ini oluşturuyoruz - sepet verilerini paylaşmak için
export const CartContext = createContext(null);

// Cart provider bileşeni - sepet state'ini tüm uygulamaya sağlar
// Props: children (alt bileşenler)
const CartProvider = ({ children }) => {
  // Sepet öğelerini state olarak tutuyoruz - boş array ile başlatıyoruz
  const [cartItems, setCartItems] = useState([]);

  // Sepete ürün ekleme fonksiyonu
  // Parametre: id (ürün ID'si)
  const addToCart = (id) => {
    // Yeni sepet öğesi oluşturuyoruz
    const newItem = {
      productId: id, // Ürün ID'si
      count: 1, // Ürün sayısı (varsayılan 1)
    };
    // Sepet öğelerini güncelliyoruz - yeni öğeyi ekliyoruz
    setCartItems((prev) => [...prev, newItem]);
  };

  return (
    // Cart context provider - sepet verilerini alt bileşenlere sağlar
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {/* Alt bileşenler - tüm uygulama */}
      {children}
    </CartContext.Provider>
  );
};

// Bileşeni dışa aktarıyoruz
export default CartProvider;
