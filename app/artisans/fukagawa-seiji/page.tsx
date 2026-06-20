import Image from "next/image";
export default function FukagawaSeijiPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171717]">
      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">

          <p className="mb-6 text-sm tracking-[0.22em] text-[#8A6748]">
            FUKAGAWA SEIJI
          </p>

          <h1 className="mb-10 text-5xl font-semibold leading-tight md:text-7xl">
            Arita porcelain,
            <br />
            refined through
            <br />
            generations.
            <div className="mt-12 mb-12 overflow-hidden rounded-3xl">
  <Image
    src="/images/fukagawa-seiji/hero.jpg"
    alt="Fukagawa Seiji porcelain craftsmanship"
    width={1600}
    height={900}
    className="h-auto w-full object-cover"
    priority
  />
</div>
          </h1>

          <div className="space-y-8 text-lg leading-8 text-[#5F5A52]">
  <p>
    In Arita, where Japan's porcelain tradition began more than four centuries ago,
    Fukagawa Seiji continues a legacy that has shaped the reputation of Japanese
    ceramics around the world.
  </p>

  <p>
    Founded in 1894 in Arita, Saga Prefecture, Fukagawa Seiji has become one of Japan's most respected porcelain makers, known for combining technical excellence, refined design, and a deep respect for tradition. Their work reflects generations of accumulated knowledge, from the
    preparation of clay to the final stages of decoration and firing.
  </p>

  <p>
    What draws Watsugi to Fukagawa Seiji is not only the beauty of the finished
    pieces, but also the dedication required to create them. Every vessel begins
    with skilled hands, careful observation, and a commitment to standards that
    cannot be achieved through mass production alone.
  </p>

  <p>
    The world of Arita porcelain is often associated with elegance and precision.
    Fukagawa Seiji represents these qualities while continuing to demonstrate how
    traditional craftsmanship can remain relevant in contemporary life.
  </p>

  <p>
    As Watsugi continues to explore the artisans and makers who preserve Japan's
    cultural heritage, Fukagawa Seiji stands as an important example of how
    craftsmanship, history, and beauty can be carried forward from one generation
    to the next.
  </p>
</div>

<blockquote className="mt-16 border-l-4 border-[#8A6748] pl-6 italic text-xl">
  "True craftsmanship is not only found in the finished piece, but in the generations of knowledge behind it."
</blockquote>
          <div className="mt-12">
  <a
    href="/#artisans"
    className="inline-block rounded-full border border-black/20 px-6 py-3 text-sm hover:bg-black hover:text-white transition"
  >
    ← Back to Artisan Stories
  </a>
</div>

        </div>
      </section>
    </main>
  );
}
