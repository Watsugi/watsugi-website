import { ArrowRight, HandHeart, Leaf, MapPin, ScrollText, UsersRound } from "lucide-react";

const categories = [
  { title: "Kimono & Textiles", jp: "着物・布", text: "Textiles with history, texture, technique, and regional identity." },
  { title: "Ceramics", jp: "陶磁器", text: "Clay, fire, glaze, and the quiet individuality of each vessel." },
  { title: "Wooden Crafts", jp: "木工", text: "Functional and sculptural works shaped by hand, tool, and time." },
];

function ButtonLink({ children, href, variant = "primary" }: { children: React.ReactNode; href: string; variant?: "primary" | "outline" }) {
  const cls = variant === "primary" ? "bg-ink text-white hover:bg-[#2f4359]" : "border border-ink text-ink hover:bg-ink hover:text-white";
  return <a href={href} className={`inline-flex items-center justify-center rounded-2xl px-7 py-4 text-base transition ${cls}`}>{children}</a>;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#"><div className="text-2xl font-semibold tracking-wide">和継 Watsugi</div><div className="text-xs tracking-[0.3em] text-[#6f5d45]">DISCOVER · CONNECT · KEEP CRAFT ALIVE</div></a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#philosophy" className="hover:text-earth">Philosophy</a><a href="#artisans" className="hover:text-earth">Artisans</a><a href="#discover" className="hover:text-earth">Discover</a><a href="#for-artisans" className="hover:text-earth">For Artisans</a>
          </nav>
          <a href="mailto:hello@watsugi.co.jp" className="hidden rounded-2xl bg-ink px-5 py-3 text-sm text-white hover:bg-[#2f4359] md:flex">Contact</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#e8d8bd,transparent_35%),radial-gradient(circle_at_bottom_right,#d8c9b2,transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-[1.05fr_0.95fr] md:py-32">
          <div>
            <p className="mb-5 text-sm tracking-[0.35em] text-earth">すべての手仕事が、簡単に見つかるべきものではありません。</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">Some craftsmanship is meant to be encountered.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#514535] md:text-xl">Watsugi exists to respectfully connect Japanese artisans and their work with those who seek meaning beyond the ordinary.</p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#6f5d45]">和継は、日本の職人とその仕事を、本質的な価値を求める人々へ丁寧につなぎます。</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row"><ButtonLink href="#artisans">Meet the Artisans <ArrowRight className="ml-2 h-4 w-4" /></ButtonLink><ButtonLink href="#for-artisans" variant="outline">Begin a Conversation</ButtonLink></div>
          </div>
          <div className="rounded-[2rem] border border-line bg-sand p-5 shadow-sm">
            <div className="aspect-[4/5] rounded-[1.5rem] bg-ink p-8 text-white">
              <div className="flex h-full flex-col justify-between rounded-[1rem] border border-white/25 p-8">
                <div className="text-right text-sm tracking-[0.3em] text-white/70">和継</div>
                <div><div className="mb-4 h-px w-24 bg-white/50" /><p className="text-2xl leading-relaxed">Pieces shaped by place, hand, patience, and story.</p></div>
                <p className="text-sm leading-7 text-white/70">地域、手、時間、そして物語から生まれるもの。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-sm tracking-[0.35em] text-earth">WHY WATSUGI EXISTS</p><h2 className="mt-4 text-4xl font-semibold leading-tight">Not another shop. A respectful bridge.</h2></div>
          <div className="space-y-6 text-lg leading-9 text-[#514535]">
            <p>Many meaningful works are not visible online, and often cannot be understood through a screen alone.</p>
            <p>They live quietly in small workshops, regional traditions, and the rhythm of hands repeating a process refined over generations.</p>
            <p>We do not aim to make these works merely easier to buy. We aim to make them possible to understand.</p>
            <p className="text-base text-[#6f5d45]">和継は、それらを「売りやすくする」ためではなく、「理解されるものにする」ために存在します。</p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-sand py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {[[HandHeart,"Respect first","We present artisans with dignity, context, and care — never as anonymous suppliers."],[ScrollText,"Story matters","Each piece is introduced through its origin, process, material, and human story."],[Leaf,"Not mass market","We focus on rare, small-batch, and hard-to-find works — not mainstream souvenir goods."]].map(([Icon,title,text]: any) => (
            <div key={title} className="rounded-3xl border border-line bg-paper p-8"><Icon className="mb-6 h-8 w-8 text-earth" /><h3 className="text-2xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-[#6f5d45]">{text}</p></div>
          ))}
        </div>
      </section>

      <section id="discover" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-sm tracking-[0.35em] text-earth">DISCOVER</p><h2 className="mt-4 text-4xl font-semibold">Currently being introduced</h2></div><p className="max-w-xl leading-7 text-[#6f5d45]">Each piece is introduced slowly, with its context — not as inventory, but as part of a larger story.</p></div>
        <div className="grid gap-6 md:grid-cols-3">{categories.map((item) => (
          <div key={item.title} className="group rounded-[2rem] border border-line bg-sand p-5 transition hover:-translate-y-1 hover:shadow-md"><div className="aspect-[4/3] rounded-[1.5rem] bg-[linear-gradient(135deg,#d8c9b2,#8b5e34)] opacity-80" /><div className="p-4"><p className="text-sm tracking-[0.25em] text-earth">{item.jp}</p><h3 className="mt-3 text-2xl font-semibold">{item.title}</h3><p className="mt-4 leading-7 text-[#6f5d45]">{item.text}</p></div></div>
        ))}</div>
      </section>

      <section id="artisans" className="bg-ink py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1fr_1fr] md:items-center"><div className="rounded-[2rem] bg-white/10 p-8"><div className="aspect-[4/3] rounded-[1.5rem] border border-white/20 bg-white/10" /></div><div><p className="text-sm tracking-[0.35em] text-line">ARTISAN STORIES</p><h2 className="mt-4 text-4xl font-semibold leading-tight">The person behind the work is never secondary.</h2><p className="mt-8 text-lg leading-9 text-white/80">Watsugi documents the process, environment, and philosophy of each artisan — so that every work is understood in relation to the life that created it.</p><p className="mt-5 leading-8 text-white/65">職人の物語では、工房、技法、道具、地域、そしてものづくりへの想いを丁寧に紹介します。</p></div></div>
      </section>

      <section id="for-artisans" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2rem] border border-line bg-sand p-8 md:p-14"><div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]"><div><UsersRound className="mb-6 h-9 w-9 text-earth" /><p className="text-sm tracking-[0.35em] text-earth">FOR ARTISANS</p><h2 className="mt-4 text-4xl font-semibold leading-tight">職人・工房の方へ</h2></div><div className="space-y-6 text-lg leading-9 text-[#514535]"><p>Watsugi is built to form long-term, respectful relationships with artisans and workshops whose work deserves to be understood beyond Japan.</p><p>We do not push volume, speed, or discount-driven sales. We focus on careful presentation, communication, and trust.</p><p className="text-base text-[#6f5d45]">和継は、長く丁寧にお付き合いできる職人・工房の方を探しています。大量生産や価格競争ではなく、ものづくりの背景や想いを大切にしながら、海外へ正しく価値を伝えていくことを目指しています。</p><ButtonLink href="mailto:hello@watsugi.co.jp">Begin a Conversation <ArrowRight className="ml-2 h-4 w-4" /></ButtonLink></div></div></div>
      </section>

      <footer className="border-t border-line px-6 py-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row"><div><div className="text-2xl font-semibold">和継 Watsugi</div><p className="mt-3 text-[#6f5d45]">Discover. Connect. Keep craft alive.</p></div><div className="flex items-center gap-3 text-[#6f5d45]"><MapPin className="h-4 w-4" /><span>Japan / 日本</span></div></div></footer>
    </main>
  );
}
