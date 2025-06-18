// React Navigation bottom tab navigator'ını import ediyoruz
// createBottomTabNavigator: Alt menü ile sayfa geçişleri için
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Ionicons ikon paketini import ediyoruz - tab ikonları için
import Ionicons from "@expo/vector-icons/Ionicons";
// Profil sayfası ekranını import ediyoruz
import ProfileScreen from "../screens/ProfileScreen";
// Settings stack navigation'ını import ediyoruz
import SettingsStack from "./SettingsStack";
// Home stack navigation'ını import ediyoruz
import HomeStack from "./HomeStack";
// React'ten useContext hook'unu import ediyoruz - context kullanımı için
import { useContext } from "react";
// Cart context'ini import ediyoruz - sepet verilerine erişim için
import { CartContext } from "../providers/CartProvider";

// Tab navigator'ını oluşturuyoruz
const Tab = createBottomTabNavigator();

// Ana tab navigation bileşeni - alt menü ile sayfa geçişleri
function MainTabNavigation() {
  // Cart context'inden sepet öğelerini alıyoruz
  const { cartItems } = useContext(CartContext);
  // Sepet badge sayısını hesaplıyoruz
  const cartBadge = cartItems.length;
  
  return (
    // Tab navigator - alt menü ile sayfa geçişleri
    <Tab.Navigator
      // Ekran seçenekleri - tüm tab'lar için ortak ayarlar
      screenOptions={({ route }) => ({
        // Tab ikonları - her tab için farklı ikon
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          // Ana sayfa tab'ı için ev ikonu
          if (route.name === "Home") {
            iconName = "home";
          }
          // Kategoriler tab'ı için grid ikonu
          if (route.name === "Categories") {
            iconName = "grid";
          }
          // Sepet tab'ı için sepet ikonu
          if (route.name === "Cart") {
            iconName = "cart";
          }
          // İkonu döndür
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: "#11f", // Aktif tab rengi
        tabBarInactiveTintColor: "#333", // Pasif tab rengi
        headerShown: false, // Üst başlık çubuğunu gizle
      })}
    >
      {/* Ana sayfa tab'ı - stack navigation içerir */}
      <Tab.Screen name="Home" component={HomeStack} />
      {/* Kategoriler tab'ı */}
      <Tab.Screen name="Categories" component={ProfileScreen} />
      {/* Sepet tab'ı - badge ile sepet sayısını gösterir */}
      <Tab.Screen
        name="Cart"
        component={SettingsStack}
        options={{ tabBarBadge: cartBadge }} // Sepet sayısını badge olarak göster
      />
    </Tab.Navigator>
  );
}

// Bileşeni dışa aktarıyoruz
export default MainTabNavigation;
