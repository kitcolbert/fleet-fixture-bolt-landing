import { Coffee, Star, ArrowRight } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2c1810] via-[#3b2419] to-[#1a0f0a] text-[#faf7f2]">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Freshly roasted coffee beans"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810] via-transparent to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-36">
        <div className="animate-fade-up flex items-center gap-2 rounded-full border border-[#faf7f2]/20 bg-[#faf7f2]/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
          <Star size={16} className="fill-[#dc2626] text-[#dc2626]" />
          <span>Roasted to order. Delivered fresh.</span>
        </div>

        <h1 className="animate-fade-up animate-fade-delay-1 mt-8 max-w-4xl font-display text-5xl font-extrabold leading-[1.1] tracking-tight md:text-7xl">
          Fresh-roasted coffee,
          <br />
          <span className="italic text-[#dc2626]">delivered to your door</span>
        </h1>

        <p className="animate-fade-up animate-fade-delay-2 mt-6 max-w-xl text-lg text-[#faf7f2]/70 md:text-xl">
          Bean Box brings small-batch, artisan-roasted coffee from award-winning
          roasters straight to you. No stale supermarket beans. Just incredible
          coffee, every month.
        </p>

        <div className="animate-fade-up animate-fade-delay-3 mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            onClick={onGetStarted}
            className="group flex items-center gap-2 rounded-full bg-[#dc2626] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#dc2626]/30 transition-all duration-300 hover:bg-[#b91c1c] hover:shadow-xl hover:shadow-[#dc2626]/40 active:scale-95"
          >
            Choose Your Plan
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 rounded-full border border-[#faf7f2]/25 px-8 py-4 text-base font-semibold text-[#faf7f2] transition-all duration-300 hover:border-[#faf7f2]/50 hover:bg-[#faf7f2]/5"
          >
            How It Works
          </a>
        </div>

        <div className="animate-fade-in animate-fade-delay-5 mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-[#faf7f2]/50">
          <div className="flex items-center gap-2">
            <Coffee size={18} className="text-[#dc2626]" />
            <span>50+ artisan roasters</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={18} className="text-[#dc2626]" />
            <span>4.9/5 from 12,000+ reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <Coffee size={18} className="text-[#dc2626]" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
