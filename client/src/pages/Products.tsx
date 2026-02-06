import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

/**
 * Design Philosophy: Artisanal Minimalism with Warm Accents
 * - Product-focused layout with generous spacing
 * - Warm earth tones and elegant typography
 * - Smooth interactions and hover effects
 */

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Cream Crochet Sweater",
    category: "Clothing",
    price: "$89",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/TolJE53HIYyTz0UsudOnhG/sandbox/1TSpSlvWUAlPXlSh28vL7F-img-1_1770295215000_na1fn_aGVyby1jcm9jaGV0LWxpZmVzdHlsZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
    description: "Cozy handmade sweater in soft cream yarn"
  },
  {
    id: "2",
    name: "Sage Green Scarf",
    category: "Accessories",
    price: "$45",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/TolJE53HIYyTz0UsudOnhG/sandbox/1TSpSlvWUAlPXlSh28vL7F-img-2_1770295210000_na1fn_cHJvZHVjdC1zaG93Y2FzZS1mbGF0LWxheQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
    description: "Lightweight scarf in calming sage green"
  },
  {
    id: "3",
    name: "Terracotta Amigurumi Bear",
    category: "Amigurumi",
    price: "$35",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/TolJE53HIYyTz0UsudOnhG/sandbox/1TSpSlvWUAlPXlSh28vL7F-img-3_1770295214000_na1fn_ZWNvLWZyaWVuZGx5LW1hdGVyaWFscw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
    description: "Adorable stuffed bear, perfect for gifts"
  },
  {
    id: "4",
    name: "Cream Tote Bag",
    category: "Accessories",
    price: "$65",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/TolJE53HIYyTz0UsudOnhG/sandbox/1TSpSlvWUAlPXlSh28vL7F-img-4_1770295222000_na1fn_Y3VzdG9tLWRlc2lnbi1wcm9jZXNz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
    description: "Spacious tote bag for everyday use"
  },
  {
    id: "5",
    name: "Taupe Throw Blanket",
    category: "Home Decor",
    price: "$120",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/TolJE53HIYyTz0UsudOnhG/sandbox/1TSpSlvWUAlPXlSh28vL7F-img-1_1770295215000_na1fn_aGVyby1jcm9jaGV0LWxpZmVzdHlsZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
    description: "Cozy blanket in warm taupe"
  },
  {
    id: "6",
    name: "Sage Green Coaster Set",
    category: "Home Decor",
    price: "$28",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/TolJE53HIYyTz0UsudOnhG/sandbox/1TSpSlvWUAlPXlSh28vL7F-img-2_1770295210000_na1fn_cHJvZHVjdC1zaG93Y2FzZS1mbGF0LWxheQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80",
    description: "Set of 4 handcrafted coasters"
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  const categories = ["Clothing", "Accessories", "Home Decor", "Amigurumi"];
  
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  const toggleWishlist = (id: string) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(id)) {
      newWishlist.delete(id);
    } else {
      newWishlist.add(id);
    }
    setWishlist(newWishlist);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-display font-bold text-primary">
            Asachi Apparel
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium text-primary">
              Products
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Button className="bg-primary hover:bg-primary/90">Contact</Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <h1 className="text-5xl font-display font-bold mb-4">Our Collection</h1>
          <p className="text-lg text-muted-foreground font-light max-w-2xl">
            Explore our carefully curated selection of handcrafted crochet items. Each piece is made with love and sustainable materials.
          </p>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-display font-bold mb-4">Categories</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block text-sm font-medium transition-colors ${
                      selectedCategory === null
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="text-lg font-display font-bold mb-4">About Our Process</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Each item is handcrafted using eco-friendly yarn and sustainable practices. Custom orders welcome!
                </p>
              </div>
            </div>

            {/* Products Grid */}
            <div className="col-span-3">
              <div className="grid grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group">
                    <div className="relative h-80 rounded-lg overflow-hidden mb-4 shadow-md hover:shadow-lg transition-shadow">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-md hover:shadow-lg"
                      >
                        <Heart
                          className={`w-5 h-5 transition-colors ${
                            wishlist.has(product.id)
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {product.category}
                      </p>
                      <h3 className="text-lg font-display font-bold">{product.name}</h3>
                      <p className="text-sm text-muted-foreground font-light">{product.description}</p>
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-xl font-bold text-primary">{product.price}</span>
                        <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary/5">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5 border-t border-border">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-display font-bold">Don't see what you're looking for?</h2>
          <p className="text-lg text-muted-foreground font-light">
            We offer custom designs tailored to your preferences. Let's create something special together.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Request Custom Design
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/10 py-16">
        <div className="container">
          <div className="grid grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold">Asachi Apparel</h3>
              <p className="text-sm text-muted-foreground font-light">
                Handcrafted crochet with love and sustainability.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-display font-bold text-sm">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                <li><a href="#" className="hover:text-primary transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Accessories</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Home Decor</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-display font-bold text-sm">Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-display font-bold text-sm">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex justify-between items-center text-sm text-muted-foreground font-light">
            <p>&copy; 2026 Asachi Apparel. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
