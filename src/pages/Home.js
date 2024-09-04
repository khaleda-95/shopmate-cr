import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  useTitle("Home");

  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "images": "/assets/images/1001.jpeg"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "images": "/assets/images/1002.jpeg"},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "images": "/assets/images/1003.jpeg"},
    {"id": 4, "name": "Logitech H111 Wired", "price": 39, "images": "/assets/images/1004.jpeg"},
    {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "images": "/assets/images/1005.jpeg"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "images": "/assets/images/1006.jpeg"}
  ]

  return (
    <main>
      <section className="products">
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}