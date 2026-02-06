import { Button } from "@/components/ui/button";
import { Leaf, Sparkles, Heart } from "lucide-react";
import { Link } from "wouter";

/**
 * Design Philosophy: Artisanal Minimalism with Warm Accents
 * - Story-focused layout with generous whitespace
 * - Warm earth tones and elegant typography
 * - Emphasis on brand values and craftsmanship
 */

export default function About() {
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
            <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-sm font-medium text-primary">
              About
            </Link>
            <Button className="bg-primary hover:bg-primary/90">Contact</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-3xl">
          <h1 className="text-6xl font-display font-bold mb-6">Our Story</h1>
          <p className="text-2xl text-muted-foreground font-light leading-relaxed">
            Asachi Apparel was born from a passion for handcrafted beauty and a commitment to sustainable fashion. Every stitch tells a story of creativity, care, and connection.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="container max-w-3xl space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-bold">The Beginning</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              What started as a personal passion for crochet has blossomed into a mission to create beautiful, sustainable fashion. I believe that every handmade piece carries the energy and intention of the maker, and I pour that belief into every project.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-display font-bold">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              We reject the fast fashion model. Instead, we embrace slow, intentional creation. Each piece is made to last, to be cherished, and to grow more beautiful with time. We work closely with our customers to ensure every item reflects their unique style and values.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-display font-bold">Sustainability First</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Our commitment to the planet runs deep. We source eco-friendly, organic yarns from suppliers who share our values. We minimize waste, use sustainable packaging, and continuously seek ways to reduce our environmental impact. When you choose Asachi Apparel, you're choosing a better future.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Core Values */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-3 gap-12">
            {/* Value 1 */}
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold">Craftsmanship</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                We believe in the power of handmade. Every stitch is deliberate, every detail matters. Quality over quantity, always.
              </p>
            </div>

            {/* Value 2 */}
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-bold">Sustainability</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                We're committed to protecting our planet through eco-friendly materials and mindful practices.
              </p>
            </div>

            {/* Value 3 */}
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold">Connection</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                We create relationships with our customers. Your vision becomes our passion project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Process Section */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-display font-bold mb-12">Our Process</h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-display font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-2">Inspiration & Design</h3>
                <p className="text-muted-foreground font-light">
                  We start by understanding your vision. Whether you have a specific idea or want to explore possibilities, we collaborate to create the perfect design.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-display font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-2">Material Selection</h3>
                <p className="text-muted-foreground font-light">
                  We carefully choose eco-friendly, high-quality yarns that match your design. Every material is selected for sustainability and beauty.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-display font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-2">Handcrafting</h3>
                <p className="text-muted-foreground font-light">
                  With love and intention, we handcraft your piece. This is where the magic happens—each stitch is made with care and precision.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white font-display font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-2">Quality Check & Delivery</h3>
                <p className="text-muted-foreground font-light">
                  We inspect every detail to ensure perfection. Your piece is then carefully packaged and shipped to you with care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-3xl text-center space-y-8">
          <h2 className="text-4xl font-display font-bold">Ready to Create Together?</h2>
          <p className="text-lg text-muted-foreground font-light">
            Whether you're looking for a ready-made piece or want to commission something special, we'd love to work with you.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Your Custom Order
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              Browse Collection
            </Button>
          </div>
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
