// Expo'nun root component kayıt fonksiyonunu import ediyoruz
// Bu fonksiyon uygulamanın giriş noktasını belirler
import { registerRootComponent } from 'expo';

// Ana uygulama bileşenini import ediyoruz
import App from './App';

// registerRootComponent fonksiyonu AppRegistry.registerComponent('main', () => App) çağrısını yapar
// Ayrıca uygulamanın Expo Go'da veya native build'de yüklenmesi durumunda
// ortamın uygun şekilde kurulmasını sağlar
registerRootComponent(App);
