import React, { useState } from 'react';
import '@/App.css';
import { Star, Heart, ShieldCheck, Truck, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

function App() {
  const [quantity, setQuantity] = useState(1);

  const productImages = {
    hero: 'https://customer-assets.emergentagent.com/job_ecommerce-hub-1125/artifacts/7b18id6w_image.png',
    lifestyle: 'https://customer-assets.emergentagent.com/job_ecommerce-hub-1125/artifacts/czn145vn_image.png',
    detail: 'https://customer-assets.emergentagent.com/job_ecommerce-hub-1125/artifacts/bioj7d94_image.png',
    shapes: 'https://customer-assets.emergentagent.com/job_ecommerce-hub-1125/artifacts/kjo174bp_image.png',
    folded: 'https://customer-assets.emergentagent.com/job_ecommerce-hub-1125/artifacts/pbx65laj_image.png'
  };

  const reviews = [
    {
      name: 'Sarah M.',
      rating: 5,
      date: 'January 15, 2025',
      comment: 'My cat absolutely LOVES this! She used to scratch my furniture constantly, but now she only goes for this scratcher. Best purchase ever!',
      verified: true
    },
    {
      name: 'James T.',
      rating: 5,
      date: 'January 10, 2025',
      comment: 'Saved my couch! The quality is amazing and it looks great in my living room. My two cats fight over it sometimes 😂',
      verified: true
    },
    {
      name: 'Emily R.',
      rating: 5,
      date: 'January 5, 2025',
      comment: 'I was skeptical at first, but this really works. My senior cat who never used scratchers before is now obsessed with this one.',
      verified: true
    },
    {
      name: 'Michael K.',
      rating: 4,
      date: 'December 28, 2024',
      comment: 'Great product! Very sturdy and well-made. My cat took to it immediately. Only wish it came in more colors.',
      verified: true
    },
    {
      name: 'Lisa P.',
      rating: 5,
      date: 'December 20, 2024',
      comment: 'This is the third scratcher I\'ve bought and it\'s by far the best. The curved design is genius - my cat can stretch fully and really dig in.',
      verified: true
    }
  ];

  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Endless Fun',
      description: 'Foldable accordion design transforms into multiple shapes - tunnel, bed, or circular track'
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Furniture Protection',
      description: 'Irresistible corrugated texture keeps cats scratching here, not your furniture'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Interactive Ball Toy',
      description: 'Built-in bell ball spins and rolls to keep your cat entertained for hours'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Versatile Shapes',
      description: 'Fold, stretch, and configure into 6+ different shapes for endless variety'
    }
  ];

  const faqs = [
    {
      question: 'Will my cat actually use this?',
      answer: 'Yes! The Magic Curl design appeals to cats\' natural instincts. Over 95% of cat owners report their cats using it within the first week.'
    },
    {
      question: 'How long does it last?',
      answer: 'With normal use, the Magic Curl Cat Scratcher typically lasts 12-18 months. Heavy scratchers may need replacement sooner.'
    },
    {
      question: 'Is it safe for kittens?',
      answer: 'Absolutely! It\'s safe for cats of all ages, from playful kittens to senior cats. The non-toxic materials ensure it\'s completely safe.'
    },
    {
      question: 'What if my cat doesn\'t like it?',
      answer: 'We offer a 30-day money-back guarantee. If your cat doesn\'t love it, simply return it for a full refund.'
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                ClawCraze
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-stone-700 hover:text-orange-600 transition">
                Features
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-stone-700 hover:text-orange-600 transition">
                Reviews
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-stone-700 hover:text-orange-600 transition">
                FAQ
              </button>
            </div>
            <button
              onClick={() => scrollToSection('buy-now')}
              className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition"
              data-testid="nav-buy-now-btn"
            >
              Buy Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8" data-testid="hero-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                ⭐ Loved by 50,000+ Cat Parents
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6 leading-tight">
                Save Your Furniture.
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                  {' '}Make Your Cat Happy.
                </span>
              </h1>
              <p className="text-xl text-stone-600 mb-8">
                The Magic Curl Cat Scratcher - The innovative foldable accordion scratcher with a spinning ball toy. Transform it into 6+ different shapes for endless entertainment!
              </p>
              <div className="flex items-center space-x-2 mb-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-stone-700 font-semibold">4.9/5</span>
                <span className="text-stone-500">(2,847 reviews)</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('buy-now')}
                  className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition"
                  data-testid="hero-buy-now-btn"
                >
                  Get Yours Now - $14.99
                </button>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition"
                  data-testid="see-reviews-btn"
                >
                  See Reviews
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2 text-stone-600">
                  <Truck className="w-5 h-5 text-orange-500" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2 text-stone-600">
                  <ShieldCheck className="w-5 h-5 text-orange-500" />
                  <span>30-Day Guarantee</span>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl blur-2xl opacity-20"></div>
                <img
                  src={productImages.hero}
                  alt="Magic Curl Cat Scratcher"
                  className="relative rounded-3xl shadow-2xl w-full"
                  data-testid="hero-product-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white" data-testid="features-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">
              Why Cat Parents Love It
            </h2>
            <p className="text-xl text-stone-600">
              More than just a scratcher - it's a complete solution
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl hover:bg-orange-50 transition group"
                data-testid={`feature-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-2xl mb-4 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white" data-testid="product-showcase">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={productImages.lifestyle}
                alt="Cat using scratcher"
                className="rounded-3xl shadow-xl w-full"
                data-testid="lifestyle-image"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                Transforms Into 6+ Different Shapes!
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900">Accordion Foldable Design</h3>
                    <p className="text-stone-600">Expands and folds into circular, tunnel, flat, or wavy configurations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900">Corrugated Cardboard Texture</h3>
                    <p className="text-stone-600">Irresistible scratching surface that satisfies natural instincts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900">Interactive Bell Ball</h3>
                    <p className="text-stone-600">Spinning ball in the center adds an extra layer of play and engagement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900">Space-Saving Storage</h3>
                    <p className="text-stone-600">Folds completely flat for easy storage when not in use</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Versatile Shapes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" data-testid="shapes-section">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">
            Versatile Shapes, Endless Fun
          </h2>
          <p className="text-xl text-stone-600 mb-8">
            Transform your Magic Curl into 6+ different configurations to keep your cat entertained!
          </p>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl blur-2xl opacity-20"></div>
            <img
              src={productImages.shapes}
              alt="Different configurations of the Magic Curl Cat Scratcher"
              className="relative rounded-3xl shadow-2xl w-full"
              data-testid="shapes-showcase"
            />
          </div>
          <p className="text-stone-600 mt-6 text-lg">
            Circular track • Tunnel • Flat bed • Wavy scratcher • Compact storage & more!
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8 bg-white" data-testid="reviews-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">
              Thousands of Happy Cats (& Owners!)
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-stone-900">4.9/5</span>
            </div>
            <p className="text-stone-600">Based on 2,847 verified reviews</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border border-orange-200"
                data-testid={`review-${index}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-bold text-stone-900">{review.name}</div>
                    <div className="text-sm text-stone-500">{review.date}</div>
                  </div>
                  {review.verified && (
                    <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                      ✓ Verified
                    </div>
                  )}
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-stone-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-amber-50" data-testid="faq-section">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-orange-200 overflow-hidden"
                data-testid={`faq-${index}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-orange-50 transition"
                  data-testid={`faq-question-${index}`}
                >
                  <span className="font-semibold text-stone-900">{faq.question}</span>
                  <span className="text-orange-500 text-2xl">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-stone-600" data-testid={`faq-answer-${index}`}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="buy-now" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-amber-600" data-testid="buy-now-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Transform Your Cat's Scratching Habits Today!
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join 50,000+ happy cat parents who saved their furniture
          </p>
          <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md mx-auto">
            <div className="mb-6">
              <img
                src={productImages.detail}
                alt="Product detail"
                className="w-full rounded-2xl mb-4"
                data-testid="cta-product-image"
              />
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Magic Curl Cat Scratcher</h3>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-stone-700 font-semibold">4.9/5</span>
              </div>
              <div className="flex items-center justify-center space-x-3 mb-6">
                <span className="text-4xl font-bold text-orange-600">$14.99</span>
                <span className="text-xl text-stone-400 line-through">$29.99</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">50% OFF</span>
              </div>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <label className="text-stone-700 font-semibold">Quantity:</label>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full font-bold hover:bg-orange-200 transition"
                    data-testid="quantity-decrease"
                  >
                    −
                  </button>
                  <span className="text-xl font-bold text-stone-900 w-12 text-center" data-testid="quantity-display">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full font-bold hover:bg-orange-200 transition"
                    data-testid="quantity-increase"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <a
              href="https://www.aliexpress.us/item/3256810331285360.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-full font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition mb-4"
              data-testid="final-buy-now-btn"
            >
              🛒 Buy Now - ${(14.99 * quantity).toFixed(2)}
            </a>
            <div className="space-y-2 text-sm text-stone-600">
              <div className="flex items-center justify-center space-x-2">
                <Truck className="w-4 h-4 text-orange-500" />
                <span>FREE shipping on all orders</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MessageCircle className="w-4 h-4 text-orange-500" />
                <span>24/7 Customer Support</span>
              </div>
            </div>
          </div>
          <p className="text-orange-100 mt-6 text-sm">
            ⚡ Limited Time Offer - Sale Ends Soon!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 mb-4">
            ClawCraze
          </div>
          <p className="text-stone-400 mb-6">
            Making cats happy and furniture safe, one scratcher at a time.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-stone-400">
            <a href="#" className="hover:text-orange-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-orange-400 transition">Contact Us</a>
          </div>
          <p className="text-stone-500 text-sm mt-6">
            © 2025 ClawCraze. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;