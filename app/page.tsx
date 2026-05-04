export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171717]">
      <SiteHeader lang="EN" switchHref="/jp" switchLabel="JP" />

      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-6 text-sm tracking-[0.22em] text-[#8A6748]">
              DISCOVER · CONNECT · KEEP CRAFT ALIVE
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl lg:text-8xl">
              Japanese craftsmanship, carried forward with respect.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#5F5A52] md:text-xl">
              Watsugi connects Japanese artisans, their stories, and their work with people who seek meaning beyond the ordinary.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a className="rounded-full bg-[#171717] px-6 py-3 text-sm text-white" href="#discover">
                Discover Craft
              </a>
              <a className="rounded-full border border-[#171717]/20 px-6 py-3 text-sm" href="#for-artisans">
                For Artisans
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#11141A] p-8 text-[#F8F5F0] shadow-2xl md:p-12">
            <div className="mb-28 text-right tracking-[0.3em]">和継</div>
            <div className="mb-8 h-px w-24 bg-white/40" />
            <p className="max-w-sm text-2xl leading-snug">
              Pieces shaped by place, hand, patience, and story.
            </p>
          </div>
        </div>
      </section>

      <section id="philosophy" className="border-t border-black/10 px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm tracking-[0.22em] text-[#8A6748]">PHILOSOPHY</p>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
              Not simply products. Living traces of people, places, and time.
            </h2>
            <div className="space-y-6 text-lg leading-8 text-[#5F5A52]">
              <p>
                Watsugi begins with listening. Before presenting an object, we seek to understand the maker, the place, the technique, and the reason the work continues.
              </p>
              <p>
                Our role is not to reduce craft into inventory. Our role is to carry its context forward with care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="bg-[#18140F] px-8 py-24 text-[#F8F5F0] md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm tracking-[0.22em] text-[#B89B7B]">WHY WATSUGI</p>
          <div className="grid gap-8 md:grid-cols-3">
            <Feature title="Not a marketplace" text="We do not treat craft as anonymous stock. Each object needs context, restraint, and respect." />
            <Feature title="Artisan-first" text="The presentation should make makers feel understood, not extracted from." />
            <Feature title="Overseas-ready" text="We translate cultural value into clear, premium communication for global audiences." />
          </div>
        </div>
      </section>

      <section id="artisans" className="border-t border-black/10 px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-sm tracking-[0.22em] text-[#8A6748]">ARTISAN STORIES</p>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                Trust begins with the story behind the hand.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-[#5F5A52]">
              Future stories will introduce workshops, regions, materials, and techniques through visits and interviews.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <StoryCard title="Textiles & Kimono" location="Kyoto / Nishijin" text="Silk, embroidery, weaving, and textile work connected to generations of refined skill." />
            <StoryCard title="Ceramics" location="Japan" text="Vessels shaped by clay, fire, function, and regional expression." />
            <StoryCard title="Wood & Living Craft" location="Japan" text="Objects for daily life made with discipline, patience, and quiet beauty." />
          </div>
        </div>
      </section>

      <section id="discover" className="bg-[#EEE8DE] px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm tracking-[0.22em] text-[#8A6748]">DISCOVER</p>
          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
            Curated fields of Japanese craftsmanship.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {["Kimono & Textiles", "Ceramics", "Woodcraft"].map((item, index) => (
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
              A quiet bridge to people who value the work deeply.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#5F5A52]">
            <p>
              Watsugi is built for artisans, workshops, and local businesses that want their work introduced with sincerity, context, and long-term respect.
            </p>
            <a className="inline-flex rounded-full bg-[#171717] px-6 py-3 text-sm text-white" href="mailto:hello@watsugi.co.jp">
              Start a Conversation
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
      <a href="/" className="text-xl font-semibold tracking-tight">和継 Watsugi</a>
      <nav className="hidden items-center gap-8 text-sm md:flex">
        <a href="#philosophy">Philosophy</a>
        <a href="#artisans">Artisans</a>
        <a href="#discover">Discover</a>
        <a href="#for-artisans">For Artisans</a>
      </nav>
      <div className="flex items-center gap-3">
        <a className="rounded-full border border-black/15 px-4 py-2 text-sm" href={switchHref}>{lang} / {switchLabel}</a>
        <a className="rounded-full bg-[#171717] px-5 py-2 text-sm text-white" href="mailto:hello@watsugi.co.jp">Contact</a>
      </div>
    </header>
  )
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h3 className="mb-4 text-2xl font-medium">{title}</h3>
      <p className="leading-7 text-white/70">{text}</p>
    </div>
  )
}

function StoryCard({ title, location, text }: { title: string; location: string; text: string }) {
  return (
    <article className="rounded-3xl border border-black/10 bg-white/35 p-8">
      <p className="mb-12 text-sm tracking-[0.2em] text-[#8A6748]">{location}</p>
      <h3 className="mb-4 text-2xl font-medium">{title}</h3>
      <p className="leading-7 text-[#5F5A52]">{text}</p>
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
