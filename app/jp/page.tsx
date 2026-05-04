export default function JapaneseHome() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171717]">
      <SiteHeader lang="JP" switchHref="/" switchLabel="EN" />

      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-6 text-sm tracking-[0.22em] text-[#8A6748]">
              DISCOVER · CONNECT · KEEP CRAFT ALIVE
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-7xl">
              日本の手仕事を、敬意とともに次へつなぐ。
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-[#5F5A52] md:text-xl">
              和継は、日本の職人、その物語、そして作品を、本質的な価値を求める人々へ丁寧につなぐための場所です。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a className="rounded-full bg-[#171717] px-6 py-3 text-sm text-white" href="#discover">
                手仕事を見る
              </a>
              <a className="rounded-full border border-[#171717]/20 px-6 py-3 text-sm" href="#for-artisans">
                職人・工房の方へ
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#11141A] p-8 text-[#F8F5F0] shadow-2xl md:p-12">
            <div className="mb-28 text-right tracking-[0.3em]">和継</div>
            <div className="mb-8 h-px w-24 bg-white/40" />
            <p className="max-w-sm text-2xl leading-snug">
              土地、手、時間、そして物語から生まれるもの。
            </p>
          </div>
        </div>
      </section>

      <section id="philosophy" className="border-t border-black/10 px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm tracking-[0.22em] text-[#8A6748]">PHILOSOPHY</p>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
              それは単なる商品ではなく、人、土地、時間の記憶です。
            </h2>
            <div className="space-y-6 text-lg leading-9 text-[#5F5A52]">
              <p>
                和継は、まず耳を傾けることから始めます。作品を紹介する前に、作り手、土地、技法、そしてその仕事が受け継がれてきた理由を理解したいと考えています。
              </p>
              <p>
                私たちの役割は、手仕事を単なる在庫として扱うことではありません。その背景と価値を、丁寧に次へつなぐことです。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="bg-[#18140F] px-8 py-24 text-[#F8F5F0] md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm tracking-[0.22em] text-[#B89B7B]">WHY WATSUGI</p>
          <div className="grid gap-8 md:grid-cols-3">
            <Feature title="マーケットプレイスではありません" text="作り手の見えない商品一覧ではなく、一つひとつの背景を大切に伝えます。" />
            <Feature title="職人を中心に" text="作り手が見ても納得できる、敬意ある紹介と表現を目指します。" />
            <Feature title="海外へ届く言葉で" text="日本の文化的価値を、海外の人々にも伝わる形で丁寧に表現します。" />
          </div>
        </div>
      </section>

      <section id="artisans" className="border-t border-black/10 px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-sm tracking-[0.22em] text-[#8A6748]">ARTISAN STORIES</p>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                信頼は、手の背景にある物語から始まります。
              </h2>
            </div>
            <p className="max-w-md text-lg leading-9 text-[#5F5A52]">
              今後、工房、地域、素材、技法を、訪問と対話を通じて紹介していきます。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <StoryCard title="きもの・織物" location="京都・西陣" text="絹、刺繍、織、染め。長い時間の中で磨かれてきた繊細な技術。" />
            <StoryCard title="陶芸" location="日本各地" text="土、火、用途、地域性から生まれる器と造形。" />
            <StoryCard title="木工・暮らしの手仕事" location="日本各地" text="日々の暮らしに寄り添う、静かで確かな手の仕事。" />
          </div>
        </div>
      </section>

      <section id="discover" className="bg-[#EEE8DE] px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm tracking-[0.22em] text-[#8A6748]">DISCOVER</p>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
            日本の手仕事を、分野ごとに丁寧に紹介します。
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {["きもの・織物", "陶芸", "木工"].map((item, index) => (
              <div key={item} className="rounded-3xl border border-black/10 bg-white/35 p-8">
                <p className="mb-10 text-sm tracking-[0.22em] text-[#8A6748]">0{index + 1}</p>
                <h3 className="text-2xl font-medium">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="for-artisans" className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-sm tracking-[0.22em] text-[#8A6748]">FOR ARTISANS</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
              価値を深く理解する人へ届ける、静かな橋渡し。
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-9 text-[#5F5A52]">
            <p>
              和継は、作品を誠実に、背景とともに紹介したい職人、工房、地域の事業者のための場所です。
            </p>
            <a className="inline-flex rounded-full bg-[#171717] px-6 py-3 text-sm text-white" href="mailto:hello@watsugi.co.jp">
              相談する
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

function SiteHeader({ lang, switchHref, switchLabel }: { lang: string; switchHref: string; switchLabel: string }) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-black/10 bg-[#F8F5F0]/90 px-8 py-5 backdrop-blur md:px-16 lg:px-24">
      <a href="/jp" className="text-xl font-semibold tracking-tight">和継 Watsugi</a>
      <nav className="hidden items-center gap-8 text-sm md:flex">
        <a href="#philosophy">理念</a>
        <a href="#artisans">職人の物語</a>
        <a href="#discover">手仕事を見る</a>
        <a href="#for-artisans">職人・工房の方へ</a>
      </nav>
      <div className="flex items-center gap-3">
        <a className="rounded-full border border-black/15 px-4 py-2 text-sm" href={switchHref}>{lang} / {switchLabel}</a>
        <a className="rounded-full bg-[#171717] px-5 py-2 text-sm text-white" href="mailto:hello@watsugi.co.jp">お問い合わせ</a>
      </div>
    </header>
  )
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h3 className="mb-4 text-2xl font-medium">{title}</h3>
      <p className="leading-8 text-white/70">{text}</p>
    </div>
  )
}

function StoryCard({ title, location, text }: { title: string; location: string; text: string }) {
  return (
    <article className="rounded-3xl border border-black/10 bg-white/35 p-8">
      <p className="mb-12 text-sm tracking-[0.2em] text-[#8A6748]">{location}</p>
      <h3 className="mb-4 text-2xl font-medium">{title}</h3>
      <p className="leading-8 text-[#5F5A52]">{text}</p>
    </article>
  )
}

function SiteFooter() {
  return (
    <footer className="flex flex-col gap-3 border-t border-black/10 px-8 py-8 text-sm text-[#5F5A52] md:flex-row md:justify-between md:px-16 lg:px-24">
      <span>© 2026 和継 Watsugi</span>
      <span>Discover · Connect · Keep Craft Alive</span>
    </footer>
  )
}
