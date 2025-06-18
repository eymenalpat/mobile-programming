// React Navigation'ın ana container'ını import ediyoruz
// NavigationContainer: Tüm navigation yapısını sarar ve state'i yönetir
import { NavigationContainer } from "@react-navigation/native";
// Ana tab navigation bileşenini import ediyoruz
import MainTabNavigation from "./src/navigation/MainTabNavigation";
// Cart provider'ını import ediyoruz - sepet state yönetimi için
import CartProvider from "./src/providers/CartProvider";

// Ana uygulama bileşeni - Context API ile state yönetimi
export default function App() {
  return (
    // Cart provider - sepet verilerini tüm uygulamaya sağlar
    <CartProvider>
      {/* Navigation container - tüm navigation yapısını sarar */}
      <NavigationContainer>
        {/* Ana tab navigation - alt menü ile sayfa geçişleri */}
        <MainTabNavigation />
      </NavigationContainer>
    </CartProvider>
  );
}
