import { Coffee, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a0f0a] py-12 text-[#faf7f2]/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Coffee size={24} className="text-[#dc2626]" />
            <span className="font-display text-xl font-bold text-[#faf7f2]">
              Bean Box
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#how-it-works" className="transition-colors hover:text-[#faf7f2]">
              How It Works
            </a>
            <a href="#pricing" className="transition-colors hover:text-[#faf7f2]">
              Pricing
            </a>
            <a href="#signup" className="transition-colors hover:text-[#faf7f2]">
              Sign Up
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-[#faf7f2]" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="transition-colors hover:text-[#faf7f2]" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="transition-colors hover:text-[#faf7f2]" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-[#faf7f2]/10 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bean Box Coffee Subscription. All rights reserved.</p>
          <p className="mt-2 text-xs">A fictional coffee subscription — crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
