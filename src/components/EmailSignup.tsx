import { useState, type FormEvent } from 'react';
import { Mail, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface EmailSignupProps {
  selectedPlan: string | null;
}

export default function EmailSignup({ selectedPlan }: EmailSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    setErrorMessage('');

    const { error } = await supabase.from('subscribers').insert({ email: email.trim() });

    if (error) {
      if (error.code === '23505') {
        setErrorMessage("You're already on the list — we'll be in touch soon!");
        setStatus('success');
        setEmail('');
      } else {
        setErrorMessage('Something went wrong. Please try again.');
        setStatus('error');
      }
      return;
    }

    setStatus('success');
    setEmail('');
  };

  return (
    <section id="signup" className="bg-[#2c1810] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3b2419] to-[#2c1810] p-8 text-center md:p-14">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#dc2626]/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#dc2626]/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#dc2626]">
              <Mail size={26} className="text-white" />
            </div>

            <h2 className="mt-6 font-display text-3xl font-extrabold text-[#faf7f2] md:text-4xl">
              Ready to upgrade your morning?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[#faf7f2]/60">
              Join the Bean Box community for early access to new roasts,
              brewing guides, and exclusive subscriber offers.
              {selectedPlan && (
                <span className="mt-2 block font-semibold text-[#dc2626]">
                  You selected the {selectedPlan} plan — sign up to get started!
                </span>
              )}
            </p>

            {status === 'success' ? (
              <div className="mx-auto mt-8 max-w-md animate-fade-in rounded-2xl border border-green-500/30 bg-green-500/10 px-6 py-5">
                <div className="flex flex-col items-center gap-3">
                  <CheckCircle2 size={40} className="text-green-400" />
                  <p className="text-lg font-semibold text-[#faf7f2]">
                    You're on the list!
                  </p>
                  <p className="text-sm text-[#faf7f2]/60">
                    {errorMessage || "We'll send your first coffee guide shortly."}
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="you@example.com"
                  required
                  disabled={status === 'loading'}
                  className="flex-1 rounded-full border border-[#faf7f2]/15 bg-[#faf7f2]/5 px-6 py-4 text-base text-[#faf7f2] placeholder:text-[#faf7f2]/30 outline-none transition-all duration-200 focus:border-[#dc2626] focus:bg-[#faf7f2]/10 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center justify-center gap-2 rounded-full bg-[#dc2626] px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#b91c1c] active:scale-95 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    'Sign Up Free'
                  )}
                </button>
              </form>
            )}

            {status === 'error' && (
              <div className="mx-auto mt-4 flex max-w-md items-center justify-center gap-2 text-sm text-red-400">
                <AlertCircle size={18} />
                <span>{errorMessage}</span>
              </div>
            )}

            {status !== 'success' && (
              <p className="mt-4 text-xs text-[#faf7f2]/30">
                No spam, just coffee. Unsubscribe anytime.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
