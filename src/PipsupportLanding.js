export default function PipsupportLanding() {
  return (
    <div className="min-h-screen text-slate-900">
      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #F2FAFF 0%, #FFFFFF 45%, #F8FBFF 100%)",
          maskImage:
            "radial-gradient(80% 60% at 50% 10%, black 40%, transparent 100%)",
        }}
      />

      <header className="mx-auto max-w-6xl px-5 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/logo-pipsupport.png"
            alt="Pipsupport logo"
            className="h-10 w-10 rounded-lg ring-1 ring-slate-200 bg-white object-contain p-1"
          />
          <span className="font-extrabold text-2xl tracking-tight text-slate-800">
            Pipsupport
          </span>
        </div>
        <a
          href="#cta"
          className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold bg-sky-500/90 hover:bg-sky-600 text-white shadow focus:outline-none focus:ring-2 focus:ring-sky-300"
        >
          Join free group
        </a>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Trade smarter. Join a global community of <span className="text-sky-600">50,000+ traders</span> worldwide.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Learn, grow, and trade together with accurate Forex & Gold signals. Our setups are designed with an <strong>85% win rate</strong> and a disciplined <strong>1:3 risk/reward ratio</strong> — giving you clarity, structure, and confidence in every trade.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-500" />
              <span><strong>Real-time alerts</strong>: Receive instant updates directly on Telegram.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-500" />
              <span><strong>Consistency</strong>: Proven setups and transparent weekly results.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-500" />
              <span><strong>Education</strong>: Understand the reasoning behind each trade idea.</span>
            </li>
          </ul>

          <div id="cta" className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://t.me/your-group-here"
              className="inline-flex justify-center items-center rounded-2xl px-6 py-3 text-base font-semibold bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-600/20 focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              🚀 Join the free Telegram group
            </a>
            <a
              href="#resultaten"
              className="inline-flex justify-center items-center rounded-2xl px-6 py-3 text-base font-semibold bg-white hover:bg-slate-50 ring-1 ring-slate-200 text-slate-700"
            >
              View results
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Not financial advice. Trade at your own risk. Educational purposes only.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-tr from-sky-200 to-transparent rounded-3xl blur-2xl" aria-hidden />
          <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-800">Example Weekly Overview</h3>
              <span className="text-xs rounded-full bg-sky-50 text-sky-700 px-2 py-1 ring-1 ring-sky-100">Demo</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[
                { pair: "XAU/USD", pips: 420 },
                { pair: "EUR/USD", pips: 160 },
                { pair: "GBP/USD", pips: 95 },
              ].map((r, i) => (
                <div key={i} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                  <div className="text-xs text-slate-500">{r.pair}</div>
                  <div className="mt-1 text-2xl font-extrabold text-emerald-600">+{r.pips}</div>
                  <div className="text-xs text-slate-400">pips</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-slate-500">
              *Past performance does not guarantee future results.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
