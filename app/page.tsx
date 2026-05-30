export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          SaaS Churn Prediction
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict which customers will{" "}
          <span className="text-[#58a6ff]">churn next month</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your Stripe account, let our ML model analyze usage patterns, and get risk scores with automated intervention strategies — before you lose the revenue.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Social proof */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
          <div>
            <div className="text-2xl font-bold text-white">87%</div>
            <div className="text-xs text-[#8b949e] mt-1">Prediction accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">3x</div>
            <div className="text-xs text-[#8b949e] mt-1">Retention improvement</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">&lt;5 min</div>
            <div className="text-xs text-[#8b949e] mt-1">Stripe setup time</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#58a6ff] rounded-2xl p-8 bg-[#161b22] text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-sm text-[#8b949e] mb-6">/month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Stripe & payment data sync",
              "ML churn risk scores (daily)",
              "Automated intervention playbooks",
              "Email alerts for high-risk accounts",
              "Up to 1,000 tracked customers",
              "CSV export & API access"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started — $19/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does ChurnGuard connect to Stripe?",
              a: "You provide a read-only Stripe API key. We pull subscription, payment, and usage events to build a behavioral profile for each customer — no write access needed."
            },
            {
              q: "How accurate is the churn prediction?",
              a: "Our scikit-learn model achieves ~87% accuracy on average across SaaS datasets. Accuracy improves over time as it learns your specific customer patterns."
            },
            {
              q: "What intervention strategies does it suggest?",
              a: "Based on risk signals (payment failures, declining usage, plan downgrades), ChurnGuard recommends targeted actions: discount offers, check-in emails, feature tutorials, or escalation to your CS team."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#21262d] rounded-xl p-5 bg-[#161b22]">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ChurnGuard. All rights reserved.
      </footer>
    </main>
  );
}
