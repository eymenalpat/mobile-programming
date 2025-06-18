// React Navigation'ın ana container'ını import ediyoruz
// NavigationContainer: Tüm navigation yapısını sarar ve state'i yönetir
import { NavigationContainer } from "@react-navigation/native";
// Ana tab navigation bileşenini import ediyoruz
import MainTabNavigation from "./src/navigation/MainTabNavigation";

// Ana uygulama bileşeni - Navigation yapısı
export default function App() {
  return (
    // Navigation container - tüm navigation yapısını sarar
    <NavigationContainer>
      {/* Ana tab navigation - alt menü ile sayfa geçişleri */}
      <MainTabNavigation />
    </NavigationContainer>
  );
}
