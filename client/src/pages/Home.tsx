import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Heart, Leaf, Sparkles } from "lucide-react";
import { Link } from "wouter";

/**
 * Design Philosophy: Artisanal Minimalism with Warm Accents
 * - Generous whitespace and asymmetrical layouts
 * - Warm earth tones (cream, taupe, terracotta, sage green)
 * - Elegant serif + sans-serif typography
 * - Calm, unhurried interactions
 */

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-display font-bold text-primary">
            Asachi Apparel
          </Link>
          <div className="flex items-center gap-8">
            <Link href="#products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#custom" className="text-sm font-medium hover:text-primary transition-colors">
              Custom Orders
            </Link>
            <Button className="bg-primary hover:bg-primary/90">Contact</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="container">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 pr-8">
              <div className="space-y-4">
                <h1 className="text-6xl font-display font-bold leading-tight">
                  Handcrafted with
                  <span className="text-primary"> Love</span>
                </h1>
                <p className="text-xl text-muted-foreground font-light leading-relaxed">
                  Welcome to Asachi Apparel, where artisanal crochet meets sustainable fashion. Each piece is thoughtfully created with eco-friendly materials and personalized to reflect your unique style.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore Collection
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5"
                >
                  Custom Design
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex gap-8 pt-8">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <p className="text-sm text-muted-foreground">Eco-Friendly</p>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">Custom</div>
                  <p className="text-sm text-muted-foreground">Personalized</p>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">Handmade</div>
                  <p className="text-sm text-muted-foreground">With Care</p>
                </div>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/TolJE53HIYyTz0UsudOnhG/sandbox/1TSpSlvWUAlPXlSh28vL7F-img-1_1770295215000_na1fn_aGVyby1jcm9jaGV0LWxpZmVzdHlsZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVG9sSkU1M0hJWXlUejBVc3VkT25oRy9zYW5kYm94LzFUU3BTbHZXVUFsUFhsU2gyOHZMN0YtaW1nLTFfMTc3MDI5NTIxNTAwMF9uYTFmbl9hR1Z5YnkxamNtOWphR1YwTFd4cFptVnpkSGxzWlEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=MT1samwYwP42AmkBg0QjXFUIEjTfG9oOk6rRcdiveUBbqL-3ZWYB0gsw38AtDHH~y2G-RdbQordDBk-f9tfnD3MoYzM2wl4diy~JhHvjcYepxTORynolvGoAMdQOSO7U9IHA-vHpGPeFVh0ionjvx0ymchfqb1KUFtAqJtGSOeviXOffqu0ekVkUgh2ZdwANU4lW8qI8EePGNxG1DhXXeNA9QkRhsvgljA2fb9H6Hk0JkMRU2S3IhrerI3TGqswtOlul4P4XYsulTk4hjnvhwHWMmagmAzzwvB3w6tUSKegmTnygmtdiO7pQuGp5ap6~x0CjzgX~KaXmpABtBY593A__"
                alt="Handcrafted crochet collection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Featured Products Section */}
      <section id="products" className="py-32">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h2 className="text-5xl font-display font-bold mb-4">
              Featured Collection
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              From cozy clothing to charming home decor, explore our versatile range of handcrafted pieces.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-3 gap-12">
            {/* Product 1 */}
            <div className="group">
              <div className="relative h-80 rounded-lg overflow-hidden mb-6 shadow-md hover:shadow-lg transition-shadow">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/TolJE53HIYyTz0UsudOnhG/sandbox/1TSpSlvWUAlPXlSh28vL7F-img-2_1770295210000_na1fn_cHJvZHVjdC1zaG93Y2FzZS1mbGF0LWxheQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVG9sSkU1M0hJWXlUejBVc3VkT25oRy9zYW5kYm94LzFUU3BTbHZXVUFsUFhsU2gyOHZMN0YtaW1nLTJfMTc3MDI5NTIxMDAwMF9uYTFmbl9jSEp2WkhWamRDMXphRzkzWTJGelpTMW1iR0YwTFd4aGVRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=e5V8bdvyNlynom9tyVFhRHSM03Wl-7XV1HzxBDabU-bk4bW6TcwP0rH5bW1ot8AMwN3SXuFujnqzwf9DE0CLV58ejA8rk-d9NlHraqV6go3ey7n6vlpxbta~5Qe9IvHl-km2StJnLlp5dtAUte8yNvJhgzdf569DdSpMVuCUJfcEelftQRhlklneLD82-dfFDICCRnurs4AzbyL0Qn5IDfEH52qY0X4poJZBmlv1CJolTYgW-tt-Boo2h7efGzpCSyt16HzMzV1BG0dyHbbRIli1NRCV3EI8mHmlZZObFuCFTUnpc8oOcHbyrMiXwKQZRVrbQv1c3PqtUPeIfjrbIw__"
                  alt="Accessories collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Accessories</h3>
              <p className="text-muted-foreground mb-4 font-light">
                Scarves, bags, and coasters crafted with attention to detail.
              </p>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary/5">
                View Collection
              </Button>
            </div>

            {/* Product 2 */}
            <div className="group">
              <div className="relative h-80 rounded-lg overflow-hidden mb-6 shadow-md hover:shadow-lg transition-shadow">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/TolJE53HIYyTz0UsudOnhG/sandbox/1TSpSlvWUAlPXlSh28vL7F-img-3_1770295214000_na1fn_ZWNvLWZyaWVuZGx5LW1hdGVyaWFscw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVG9sSkU1M0hJWXlUejBVc3VkT25oRy9zYW5kYm94LzFUU3BTbHZXVUFsUFhsU2gyOHZMN0YtaW1nLTNfMTc3MDI5NTIxNDAwMF9uYTFmbl9aV052TFdaeWFXVnVaR3g1TFcxaGRHVnlhV0ZzY3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GV-VmK8MBae5jZPf9ylKSVZeathaY7TLS6qhBw4Lki8DsiGrFbCHJZUXkocjgf5bS3DQUtBcurl4G1qVDFlLDUbdzFzsJcr1gPXgMFZpOQnAi7TbC3UQBxO9lL1KGXbDJhLgl2c3IdR-31XWfXOs2iWFc3NgcuRw5t8nngh22k0qI7sJj9G2DaXUVVFztIG6f6CoxH1IFtCoqkQvCz2aoCDirYIIGBbTVxE5OtdWUKrG228Mqin367kmF8Mxxb0SUswugNEov~pwgdqZIZNtTd-vDl445066FZabBOnR4qxwop~LHIcKRPMtyj5J58sEinX2WE~fI-ElTFmWoS5Jtg__"
                  alt="Eco-friendly materials"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Home Decor</h3>
              <p className="text-muted-foreground mb-4 font-light">
                Blankets, cushions, and decorative pieces for your space.
              </p>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary/5">
                View Collection
              </Button>
            </div>

            {/* Product 3 */}
            <div className="group">
              <div className="relative h-80 rounded-lg overflow-hidden mb-6 shadow-md hover:shadow-lg transition-shadow">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/TolJE53HIYyTz0UsudOnhG/sandbox/1TSpSlvWUAlPXlSh28vL7F-img-4_1770295222000_na1fn_Y3VzdG9tLWRlc2lnbi1wcm9jZXNz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVG9sSkU1M0hJWXlUejBVc3VkT25oRy9zYW5kYm94LzFUU3BTbHZXVUFsUFhsU2gyOHZMN0YtaW1nLTRfMTc3MDI5NTIyMjAwMF9uYTFmbl9ZM1Z6ZEc5dExXUmxjMmxuYmkxd2NtOWpaWE56LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tm9wT86FUfQi~isiatOEMSW-LcqTOqbryOZlXYIhensjtuKB~iFn5zaE4jjoavaBunz9aR--cLjS1d9W70CSX6j9mL3ev9Jfr4vlYi6uWwCTUqNJny0EUNIphnLywK6A6w25g1zPjFBZBHgTOZRO-NWJEi6Yr5Gjs69Wj~MLCzTi9sfY4-mIKje7QqUiOy1dyX9ONbVhb7JvzaGIwWRmBAlWht1S2CCXHCc01j3mbrYFFWGlpwO4jQyLKzTUHH39n6qAOcTy6IXn2xT1KU2V0DaOxTPUUmQeXBUKlGG7G2JTUmJon9pyETzphz7tyyrHdxyyhrW4elBNDYq4YYAZkA__"
                  alt="Custom design process"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2">Amigurumi</h3>
              <p className="text-muted-foreground mb-4 font-light">
                Adorable stuffed creatures and toys, perfect for gifts.
              </p>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary/5">
                View Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Why Choose Us Section */}
      <section className="py-32 bg-muted/20">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <h2 className="text-5xl font-display font-bold mb-4">
              Why Choose Asachi
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              We believe in creating beautiful things responsibly.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold">Custom Designs</h3>
              <p className="text-muted-foreground font-light">
                Every piece is personalized to your preferences. Work with us to bring your unique vision to life.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-bold">Eco-Friendly</h3>
              <p className="text-muted-foreground font-light">
                We use sustainable, organic materials and mindful practices to protect our planet.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold">Handmade Care</h3>
              <p className="text-muted-foreground font-light">
                Each stitch is crafted with love and attention to detail, ensuring quality you can feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="container">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <h2 className="text-5xl font-display font-bold">About Asachi</h2>
              <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                <p>
                  Welcome to Asachi Apparel, where yarn dreams come to life with a playful twist! I'm passionate about crafting a delightful array of crochet treasures—from cozy clothing and charming home decor to unique accessories and adorable amigurumi.
                </p>
                <p>
                  What truly sets Asachi Apparel apart is the magic of personalization. I love collaborating with you to bring your unique visions to reality, creating custom designs that perfectly match your style and preferences. Each stitch is infused with your personality, making every piece truly one-of-a-kind.
                </p>
                <p>
                  I'm deeply committed to an eco-friendly approach, carefully selecting sustainable materials and mindful practices to ensure your beautiful crochet items are as kind to the planet as they are to your heart.
                </p>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 mt-4">
                Start Your Custom Order
              </Button>
            </div>

            {/* Right: Decorative Element */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🧶</div>
                  <h3 className="text-2xl font-display font-bold">Handcrafted</h3>
                  <p className="text-muted-foreground">With love and intention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Custom Orders CTA */}
      <section id="custom" className="py-32 bg-primary/5">
        <div className="container max-w-3xl text-center space-y-8">
          <h2 className="text-5xl font-display font-bold">Ready for Something Special?</h2>
          <p className="text-xl text-muted-foreground font-light">
            Have a specific vision in mind? Let's create something uniquely yours. Share your ideas, and we'll bring them to life with custom crochet designs tailored to your preferences.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Request Custom Design
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              View Process
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/10 py-16">
        <div className="container">
          <div className="grid grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold">Asachi Apparel</h3>
              <p className="text-sm text-muted-foreground font-light">
                Handcrafted crochet with love and sustainability.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-sm">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                <li><a href="#" className="hover:text-primary transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Accessories</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Home Decor</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Amigurumi</a></li>
              </ul>
            </div>

            {/* Info */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-sm">Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Custom Orders</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-sm">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pinterest</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
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
