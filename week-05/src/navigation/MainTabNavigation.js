// React Navigation bottom tab navigator'ını import ediyoruz
// createBottomTabNavigator: Alt menü ile sayfa geçişleri için
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Ana sayfa ekranını import ediyoruz
import HomeScreen from "../screens/HomeScreen";
// Profil sayfası ekranını import ediyoruz
import ProfileScreen from "../screens/ProfileScreen";

// Ionicons ikon paketini import ediyoruz - tab ikonları için
import Ionicons from "@expo/vector-icons/Ionicons";
// Settings stack navigation'ını import ediyoruz - ayarlar sayfaları için
import SettingsStackNavigation from "./SettingsStackNavigation";

// Tab navigator'ını oluşturuyoruz
const Tab = createBottomTabNavigator();

// Ana tab navigation bileşeni - alt menü ile sayfa geçişleri
function MainTabNavigation() {
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
          // Profil tab'ı için kişi ikonu
          if (route.name === "Profile") {
            iconName = "person";
          }
          // Ayarlar tab'ı için ayarlar ikonu
          if (route.name === "Settings") {
            iconName = "settings";
          }
          // İkonu döndür
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: "tomato", // Aktif tab rengi
        tabBarInactiveTintColor: "gray", // Pasif tab rengi
        headerShown: false, // Üst başlık çubuğunu gizle
      })}
    >
      {/* Ana sayfa tab'ı */}
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* Profil sayfası tab'ı */}
      <Tab.Screen name="Profile" component={ProfileScreen} />
      {/* Ayarlar tab'ı - stack navigation içerir */}
      <Tab.Screen name="Settings" component={SettingsStackNavigation} />
    </Tab.Navigator>
  );
}

// Bileşeni dışa aktarıyoruz
export default MainTabNavigation;
