import { Package, Truck, Heart } from 'lucide-react';

const steps = [
  {
    icon: Package,
    title: 'Pick Your Plan',
    description:
      'Choose how much coffee you need and how often you want it. From a single bag to a full bean stash.',
  },
  {
    icon: Heart,
    title: 'We Curate & Roast',
    description:
      'Our experts select beans from top roasters, roasted to order after you subscribe — never sitting on a shelf.',
  },
  {
    icon: Truck,
    title: 'Delivered Fresh',
    description:
      'Your coffee ships within 24 hours of roasting. Skip, pause, or cancel anytime — no commitment required.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#faf7f2] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#dc2626]">
            How It Works
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-[#2c1810] md:text-5xl">
            Great coffee, three simple steps
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="group relative rounded-2xl border border-[#2c1810]/10 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#2c1810]/5"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#dc2626]/10 transition-colors duration-300 group-hover:bg-[#dc2626]">
                  <Icon
                    size={28}
                    className="text-[#dc2626] transition-colors duration-300 group-hover:text-white"
                  />
                </div>
                <div className="mt-6 font-display text-6xl font-extrabold text-[#dc2626]/10">
                  {index + 1}
                </div>
                <h3 className="-mt-4 font-display text-2xl font-bold text-[#2c1810]">
                  {step.title}
                </h3>
                <p className="mt-4 leading-relaxed text-[#2c1810]/60">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
