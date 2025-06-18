// React Navigation stack navigator'ını import ediyoruz
// createStackNavigator: Sayfa geçişleri için stack navigation
import { createStackNavigator } from "@react-navigation/stack";
// Ana sayfa ekranını import ediyoruz
import HomeScreen from "../screens/HomeScreen";
// Ürün detay sayfası ekranını import ediyoruz
import ProductScreen from "../screens/ProductScreen";

// Stack navigator'ını oluşturuyoruz
const Stack = createStackNavigator();

// Home stack navigation bileşeni - ana sayfa ve ürün detay sayfaları için
function HomeStack() {
  return (
    // Stack navigator - sayfa geçişleri için
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Ana sayfa ekranı */}
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* Ürün detay sayfası */}
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}

// Bileşeni dışa aktarıyoruz
export default HomeStack;
