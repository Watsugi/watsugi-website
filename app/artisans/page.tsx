export default function ArtisansPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171717]">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-black/10 bg-[#F8F5F0]/90 px-8 py-5 backdrop-blur md:px-16 lg:px-24">
        <a href="/" className="text-xl font-semibold tracking-tight">和継 Watsugi</a>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="/#philosophy">Philosophy</a>
          <a href="/artisans">Artisans</a>
          <a href="/#discover">Discover</a>
          <a href="/#for-artisans">For Artisans</a>
        </nav>
        <div className="flex items-center gap-3">
          <a className="rounded-full border border-black/15 px-4 py-2 text-sm" href="/jp/artisans">EN / JP</a>
          <a className="rounded-full bg-[#171717] px-5 py-2 text-sm text-white" href="mailto:hello@watsugi.co.jp">Contact</a>
        </div>
      </header>

      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-sm tracking-[0.22em] text-[#8A6748]">ARTISAN STORIES</p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.055em] md:text-7xl">
            The makers, workshops, and places behind Japanese craft.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#5F5A52] md:text-xl">
            Watsugi introduces artisans through context: where they work, what they make,
            why it matters, and how their skill continues into the future.
          </p>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#18140F] px-8 py-20 text-[#F8F5F0] md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <Principle title="Visit" text="We start by visiting workshops and listening to the maker’s own words." />
          <Principle title="Understand" text="We learn the material, process, place, history, and intention behind the work." />
          <Principle title="Carry Forward" text="We present craft with restraint, clarity, and respect for international audiences." />
        </div>
      </section>

      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-sm tracking-[0.22em] text-[#8A6748]">FEATURED FIELDS</p>
              <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                Starting with the crafts closest to Watsugi’s path.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-[#5F5A52]">
              These profile cards are placeholders. As you meet artisans, each card can become a detailed story page.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ArtisanCard
              field="Textiles & Kimono"
              place="Kyoto / Nishijin"
              title="Silk, embroidery, weaving, and the discipline of refined detail."
              text="For workshops connected to kimono, textile heritage, embroidery, weaving, and fabric-based craft."
            />
            <ArtisanCard
              field="Ceramics"
              place="Japan"
              title="Clay, fire, form, and regional expression."
              text="For potters and ceramic studios whose work carries both function and quiet presence."
            />
            <ArtisanCard
              field="Wood & Living Craft"
              place="Japan"
              title="Objects for daily life, shaped by patience."
              text="For woodworkers, furniture makers, lacquer-related craft, and objects made for long use."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#EEE8DE] px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-sm tracking-[0.22em] text-[#8A6748]">PROFILE FORMAT</p>
            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
              Every artisan story should follow a careful structure.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              "Maker / workshop name",
              "Region and craft field",
              "Short human story",
              "Materials and process",
              "Signature works",
              "How to collaborate or purchase"
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
            Ready to document your first real artisan visit.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
            Once you choose the first artisan or workshop, this page can become the index linking to individual profiles.
          </p>
        </div>
      </section>

      <footer className="flex flex-col gap-3 border-t border-black/10 px-8 py-8 text-sm text-[#5F5A52] md:flex-row md:justify-between md:px-16 lg:px-24">
        <span>© 2026 和継 Watsugi</span>
        <a href="/">Back to homepage</a>
      </footer>
    </main>
  )
}

function Principle({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h2 className="mb-4 text-3xl font-medium">{title}</h2>
      <p className="leading-7 text-white/70">{text}</p>
    </div>
  )
}

function ArtisanCard({ field, place, title, text }: { field: string; place: string; title: string; text: string }) {
  return (
    <article className="rounded-3xl border border-black/10 bg-white/35 p-8">
      <p className="mb-4 text-sm tracking-[0.22em] text-[#8A6748]">{place}</p>
      <p className="mb-16 text-sm text-[#5F5A52]">{field}</p>
      <h3 className="mb-5 text-2xl font-medium leading-tight">{title}</h3>
      <p className="leading-7 text-[#5F5A52]">{text}</p>
    </article>
  )
}
