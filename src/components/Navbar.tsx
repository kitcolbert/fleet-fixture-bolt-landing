import { Coffee } from 'lucide-react';

interface NavbarProps {
  onGetStarted: () => void;
}

export default function Navbar({ onGetStarted }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#faf7f2]/10 bg-[#2c1810]/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <Coffee size={26} className="text-[#dc2626]" />
          <span className="font-display text-xl font-bold text-[#faf7f2]">
            Bean Box
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#how-it-works"
            className="text-sm font-medium text-[#faf7f2]/60 transition-colors hover:text-[#faf7f2]"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-[#faf7f2]/60 transition-colors hover:text-[#faf7f2]"
          >
            Pricing
          </a>
          <a
            href="#signup"
            className="text-sm font-medium text-[#faf7f2]/60 transition-colors hover:text-[#faf7f2]"
          >
            Sign Up
          </a>
        </div>

        <button
          onClick={onGetStarted}
          className="rounded-full bg-[#dc2626] px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#b91c1c] active:scale-95"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}
