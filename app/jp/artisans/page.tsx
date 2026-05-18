export default function JapaneseArtisansPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171717]">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-black/10 bg-[#F8F5F0]/90 px-8 py-5 backdrop-blur md:px-16 lg:px-24">
        <a href="/jp" className="text-xl font-semibold tracking-tight">和継 Watsugi</a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="/jp#philosophy">理念</a>
          <a href="/jp/artisans">職人の物語</a>
          <a href="/jp#discover">手仕事を見る</a>
          <a href="/jp#for-artisans">職人・工房の方へ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a className="rounded-full border border-black/15 px-4 py-2 text-sm" href="/artisans">JP / EN</a>
          <a className="rounded-full bg-[#171717] px-5 py-2 text-sm text-white" href="mailto:hello@watsugi.co.jp">お問い合わせ</a>
        </div>
      </header>

      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm tracking-[0.22em] text-[#8A6748]">ARTISAN STORIES</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-[-0.05em] md:text-7xl">
            日本の手仕事を支える、作り手、工房、土地の物語。
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-[#5F5A52] md:text-xl">
            和継は、作り手の背景、仕事場、技法、土地とのつながりを丁寧に伝えることで、手仕事の価値を次へつなぎます。
          </p>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#18140F] px-8 py-20 text-[#F8F5F0] md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <Principle title="訪ねる" text="まず工房を訪ね、作り手自身の言葉に耳を傾けます。" />
          <Principle title="理解する" text="素材、工程、土地、歴史、そして仕事に込められた思いを理解します。" />
          <Principle title="つなぐ" text="海外の人々にも届くように、静かで誠実な言葉と表現で紹介します。" />
        </div>
      </section>

      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-sm tracking-[0.22em] text-[#8A6748]">FEATURED FIELDS</p>
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                和継がまず大切に紹介していく手仕事。
              </h2>
            </div>
            <p className="max-w-md text-lg leading-9 text-[#5F5A52]">
              現在は仮の紹介カードです。実際に職人や工房を訪ねた後、それぞれを詳細な物語ページに発展させます。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ArtisanCard
              field="きもの・織物"
              place="京都・西陣"
              title="絹、刺繍、織、細部に宿る洗練された技。"
              text="きもの、織物、刺繍、染め、布に関わる職人や工房の紹介に適した分野です。"
            />
            <ArtisanCard
              field="陶芸"
              place="日本各地"
              title="土、火、かたち、地域性から生まれる表現。"
              text="用と美を併せ持つ器や造形を生み出す陶芸家、窯元、工房の紹介に適しています。"
            />
            <ArtisanCard
              field="木工・暮らしの手仕事"
              place="日本各地"
              title="長く使うために、時間をかけて形にする仕事。"
              text="木工、家具、漆に関わる仕事、暮らしに寄り添う道具の紹介に適しています。"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#EEE8DE] px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-sm tracking-[0.22em] text-[#8A6748]">PROFILE FORMAT</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
              職人紹介には、丁寧な型が必要です。
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              "作り手・工房名",
              "地域と分野",
              "人としての物語",
              "素材と工程",
              "代表的な作品",
              "購入・相談・協業方法"
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-5 rounded-2xl border border-black/10 bg-white/35 p-5">
                <span className="text-sm tracking-[0.2em] text-[#8A6748]">0{index + 1}</span>
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#11141A] p-10 text-[#F8F5F0] md:p-16">
          <p className="mb-5 text-sm tracking-[0.22em] text-[#B89B7B]">NEXT STORY</p>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
            最初の職人訪問を、物語として記録する準備ができました。
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-white/70">
            最初に紹介する職人や工房が決まれば、このページを個別プロフィールへの入口として育てていきます。
          </p>
        </div>
      </section>

      <footer className="flex flex-col gap-3 border-t border-black/10 px-8 py-8 text-sm text-[#5F5A52] md:flex-row md:justify-between md:px-16 lg:px-24">
        <span>© 2026 和継 Watsugi</span>
        <a href="/jp">トップページへ戻る</a>
      </footer>
    </main>
  )
}

function Principle({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h2 className="mb-4 text-3xl font-medium">{title}</h2>
      <p className="leading-8 text-white/70">{text}</p>
    </div>
  )
}

function ArtisanCard({ field, place, title, text }: { field: string; place: string; title: string; text: string }) {
  return (
    <article className="rounded-3xl border border-black/10 bg-white/35 p-8">
      <p className="mb-4 text-sm tracking-[0.22em] text-[#8A6748]">{place}</p>
      <p className="mb-16 text-sm text-[#5F5A52]">{field}</p>
      <h3 className="mb-5 text-2xl font-medium leading-tight">{title}</h3>
      <p className="leading-8 text-[#5F5A52]">{text}</p>
    </article>
  )
}
