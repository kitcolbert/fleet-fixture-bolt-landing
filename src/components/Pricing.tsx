import { Check, Zap, Crown, Leaf } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  icon: typeof Zap;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: 'Solo Sip',
    price: '$16',
    period: '/month',
    description: 'Perfect for the solo coffee lover who enjoys a daily cup.',
    icon: Leaf,
    features: [
      '1 bag (12 oz) per delivery',
      'Choose your roast preference',
      'Freshly roasted to order',
      'Skip or pause anytime',
      'Free shipping',
    ],
    highlighted: false,
  },
  {
    name: 'Daily Grind',
    price: '$28',
    period: '/month',
    description: 'Our most popular plan for the everyday coffee enthusiast.',
    icon: Zap,
    features: [
      '2 bags (24 oz total) per delivery',
      'Curated selections from top roasters',
      'Choose whole bean or ground',
      'Tasting notes & brewing tips included',
      'Skip or pause anytime',
      'Free shipping',
    ],
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Bean Boss',
    price: '$48',
    period: '/month',
    description: 'For the true coffee connoisseur who wants it all.',
    icon: Crown,
    features: [
      '4 bags (48 oz total) per delivery',
      'Exclusive & limited-edition roasts',
      'Choose whole bean or ground',
      'Tasting notes & brewing tips included',
      'Early access to new roasters',
      'Skip or pause anytime',
      'Free express shipping',
    ],
    highlighted: false,
  },
];

export default function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section id="pricing" className="bg-gradient-to-b from-[#faf7f2] to-[#f5f0e8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#dc2626]">
            Pricing Plans
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-[#2c1810] md:text-5xl">
            Find your perfect brew
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-[#2c1810]/60">
            Every plan includes free shipping, freshly roasted beans, and the
            flexibility to cancel anytime.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.highlighted
                    ? 'border-[#dc2626] bg-[#2c1810] text-[#faf7f2] shadow-xl shadow-[#dc2626]/20 lg:scale-105'
                    : 'border-[#2c1810]/10 bg-white text-[#2c1810] hover:shadow-[#2c1810]/10'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#dc2626] px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    plan.highlighted
                      ? 'bg-[#dc2626] text-white'
                      : 'bg-[#dc2626]/10 text-[#dc2626]'
                  }`}
                >
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold">
                  {plan.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlighted ? 'text-[#faf7f2]/60' : 'text-[#2c1810]/50'
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-extrabold">
                    {plan.price}
                  </span>
                  <span
                    className={`text-lg ${
                      plan.highlighted ? 'text-[#faf7f2]/50' : 'text-[#2c1810]/40'
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                          plan.highlighted
                            ? 'bg-[#dc2626] text-white'
                            : 'bg-[#dc2626]/10 text-[#dc2626]'
                        }`}
                      >
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span
                        className={`text-sm ${
                          plan.highlighted ? 'text-[#faf7f2]/80' : 'text-[#2c1810]/70'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`mt-8 w-full rounded-full px-6 py-4 text-base font-semibold transition-all duration-300 active:scale-95 ${
                    plan.highlighted
                      ? 'bg-[#dc2626] text-white hover:bg-[#b91c1c] shadow-lg shadow-[#dc2626]/30'
                      : 'bg-[#2c1810] text-[#faf7f2] hover:bg-[#3b2419]'
                  }`}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
