import Image from "next/image";
export default function ShueiPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171717]">
      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl">

          <p className="mb-6 text-sm tracking-[0.22em] text-[#8A6748]">
            SHUEI · KYOTO
          </p>

          <h1 className="mb-10 text-5xl font-semibold leading-tight md:text-7xl">
            Embroidery that carries
            tradition across generations.
          </h1>
          <div className="mt-12 mb-12 overflow-hidden rounded-3xl">
  <Image
    src="/images/shuei/hero.jpg"
    alt="Shuei embroidery craftsmanship"
    width={1600}
    height={900}
    className="h-auto w-full object-cover"
    priority
  />
</div>
          
          <div className="space-y-8 text-lg leading-8 text-[#5F5A52]">

           <p>
  Our relationship with Shuei began through the commissioning of a kimono. Through that experience, we came to appreciate not only the beauty of the finished work, but also the dedication of the people behind it. Later, an invitation to visit a newly opened GLION kimono gallery in Kyoto provided an opportunity to learn more about the craftsmanship, traditions, and artisans that continue to shape Shuei today. There, we had the pleasure of meeting Wakana Tabata, whose insights helped deepen our understanding of the craftsmanship and traditions that continue to shape Shuei today.
</p>

<p>
  Shuei creates kimono and textile works that bring together Kyoto design sensibilities, Nishijin weaving traditions, fine silk materials, and exceptional embroidery craftsmanship. Each piece reflects the accumulated knowledge of designers, weavers, dyers, embroiderers, and artisans who dedicate themselves to preserving these skills. Many of these techniques require years, and often decades, to master.
</p>

<p>
  During our visit, we were particularly impressed by the remarkable level of detail displayed in the embroidered works. The delicate textures, subtle use of color, and extraordinary precision demonstrated the countless hours of skill and experience required to transform silk into wearable art.
</p>

<p>
  Behind every finished kimono stands a network of highly specialized craftspeople. While their names are often unknown to the final customer, their expertise forms the foundation of every piece. Watsugi believes that these artisans deserve recognition alongside the works they create.
</p>
         
<p>
  For Watsugi, Shuei represents the kind of living craftsmanship we hope to introduce with care: work that is beautiful not only because of its appearance, but because of the people, process, and heritage behind it.
</p>

          </div>

          <blockquote className="mt-16 border-l-4 border-[#8A6748] pl-6 italic text-[#171717]">
            "The beauty of Japanese craftsmanship lies not only in what is made, but in the people who continue making it."
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
