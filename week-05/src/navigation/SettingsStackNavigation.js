// React Navigation stack navigator'ını import ediyoruz
// createStackNavigator: Sayfa geçişleri için stack navigation
import { createStackNavigator } from "@react-navigation/stack";
// Ayarlar sayfalarını import ediyoruz
import PrivacyScreen from "../screens/settings/PrivacyScreen";
import ContentSettingsScreen from "../screens/settings/ContentSettingsScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";

// Stack navigator'ını oluşturuyoruz
const Stack = createStackNavigator();

// Settings stack navigation bileşeni - ayarlar sayfaları için
function SettingsStackNavigation() {
  return (
    // Stack navigator - sayfa geçişleri için
    <Stack.Navigator>
      {/* Ana ayarlar sayfası */}
      <Stack.Screen name="Setting" component={SettingsScreen} />
      {/* Gizlilik ayarları sayfası */}
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
      {/* İçerik ayarları sayfası */}
      <Stack.Screen name="Content" component={ContentSettingsScreen} />
    </Stack.Navigator>
  );
}

// Bileşeni dışa aktarıyoruz
export default SettingsStackNavigation;
