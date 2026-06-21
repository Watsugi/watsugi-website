export default function JapaneseHome() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171717]">
      <SiteHeader lang="日本語" switchHref="/" switchLabel="EN" />

      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-6 text-sm tracking-[0.22em] text-[#8A6748]">
  日本の手仕事を、次の世代へ
</p>
<h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-7xl">
  職人の手仕事と、その背景にある物語を丁寧につなぐ。
</h1>
<p className="mt-8 max-w-2xl text-lg leading-9 text-[#5F5A52] md:text-xl">
  和継は、日本の職人、工房、地域に受け継がれてきた技術や想いを、国内外の人々へ丁寧に紹介するための場所です。
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
              土地、人の手、時間、そして物語から生まれるもの。
            </p>
          </div>
        </div>
      </section>

      <section id="philosophy" className="border-t border-black/10 px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm tracking-[0.22em] text-[#8A6748]">PHILOSOPHY</p>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
  手仕事の背景にある、人、土地、時間を伝える。
</h2>
<div className="space-y-6 text-lg leading-9 text-[#5F5A52]">
  <p>
    和継は、まず耳を傾けることから始めます。作品を紹介する前に、作り手、土地、技法、そしてその仕事が受け継がれてきた理由を丁寧に理解したいと考えています。
  </p>
  <p>
    私たちの役割は、手仕事を単なる商品として扱うことではありません。その背景にある物語と価値を、敬意を持って次へつなぐことです。
  </p>
            
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="bg-[#18140F] px-8 py-24 text-[#F8F5F0] md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
         <p className="mb-5 text-sm tracking-[0.22em] text-[#B89B7B]">WHY WATSUGI</p>
<div className="grid gap-8 md:grid-cols-3">
  <Feature title="商品ではなく、物語として" text="完成した作品だけでなく、その背景にある人、技、土地、時間を丁寧に伝えます。" />
  <Feature title="作り手への敬意を中心に" text="職人や工房の歩みを尊重し、その価値が正しく伝わる紹介を目指します。" />
  <Feature title="日本の手仕事を海外へ" text="日本の文化的価値を、海外の人々にも届くかたちで静かに、誠実に発信します。" />
</div>
          </div>
        </div>
      </section>

      <section id="artisans" className="border-t border-black/10 px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-sm tracking-[0.22em] text-[#8A6748]">ARTISAN STORIES</p>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                信頼は、手仕事の背景にある物語から始まります。
              </h2>
            </div>
            <p className="max-w-md text-lg leading-9 text-[#5F5A52]">
              今後、工房や地域を訪ね、作り手との対話を重ねながら、素材や技法、その背景にある物語を丁寧に紹介していきます。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <StoryCard
  title="きもの・織物"
  location="京都・西陣"
  text="絹、染め、織り、刺繍。多くの職人の手によって受け継がれてきた日本の美意識。"
/>

<StoryCard
  title="陶芸・磁器"
  location="日本各地"
  text="土と火、そして土地の個性から生まれる器。暮らしと文化を映す手仕事。"
/>

<StoryCard
  title="木工・暮らしの手仕事"
  location="日本各地"
  text="素材の持ち味を活かし、日々の暮らしに静かな豊かさをもたらすものづくり。"
/>
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
            {["きもの・織物", "陶芸・磁器", "木工・暮らしの手仕事"].map((item, index) => (
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
