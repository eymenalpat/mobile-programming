// FakestoreService - API servisleri için ana export objesi
// Tüm API fonksiyonlarını dışa aktarıyoruz
export const FakestoreService = {
  getProducts, // Tüm ürünleri getiren fonksiyon
  getProductById, // ID'ye göre ürün getiren fonksiyon
};

// Tüm ürünleri getiren asenkron fonksiyon
// FakeStore API'den ürün listesini çeker
async function getProducts() {
  // API'den ürünleri çekiyoruz
  const products = await fetch("https://fakestoreapi.com/products")
    .then((response) => response.json()) // JSON formatına çeviriyoruz
    .then((data) => {
      return data; // Veriyi döndürüyoruz
    });
  return products; // Ürün listesini döndürüyoruz
}

// ID'ye göre tek ürün getiren asenkron fonksiyon
// FakeStore API'den belirli bir ürünü çeker
// Parametre: id (ürün ID'si)
async function getProductById(id) {
  // API'den belirli ürünü çekiyoruz
  const product = await fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json()) // JSON formatına çeviriyoruz
    .then((data) => {
      return data; // Veriyi döndürüyoruz
    })
    .catch((error) => console.log(error)); // Hata durumunda konsola yazdırıyoruz

  return product; // Ürün verisini döndürüyoruz
}
