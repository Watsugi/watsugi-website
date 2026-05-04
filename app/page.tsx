export default function Home() {
  return (
    <main className="bg-[#F8F5F0] text-[#1A1A1A]">
      
      {/* NAVBAR */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-200">
        <div className="text-xl font-semibold">和継 Watsugi</div>
        <nav className="space-x-8 text-sm">
          <a href="#">Philosophy</a>
          <a href="#">Artisans</a>
          <a href="#">Discover</a>
          <a href="#">For Artisans</a>
        </nav>
        <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
          Contact
        </button>
      </header>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-12 px-8 py-20 max-w-6xl mx-auto">
        <div>
          <p className="text-sm mb-4 text-gray-600">
            すべての仕事が、簡単に見つかるべきものではありません。
          </p>
          <h1 className="text-5xl leading-tight font-semibold mb-6">
            Some craftsmanship is meant to be encountered.
          </h1>
          <p className="text-gray-600 mb-6">
            Watsugi exists to respectfully connect Japanese artisans and their work
            with those who seek meaning beyond the ordinary.
          </p>
        </div>

        <div className="bg-[#0F172A] text-white p-10 rounded-2xl">
          <p className="text-sm mb-4 opacity-70">和継</p>
          <p className="text-lg">
            Pieces shaped by place, hand, patience, and story.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-8 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl mb-6 font-semibold">Philosophy</h2>
        <p className="text-gray-600">
          We believe true craftsmanship carries the memory of its maker, 
          the rhythm of its place, and the passage of time.
          Our role is not to sell objects, but to carry their stories forward.
        </p>
      </section>

      {/* ARTISANS PREVIEW */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl mb-10 font-semibold">Featured Artisans</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <h3 className="font-semibold">Nishijin Weaver</h3>
            <p className="text-sm text-gray-600">Kyoto</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <h3 className="font-semibold">Ceramic Artist</h3>
            <p className="text-sm text-gray-600">Arita</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="h-40 bg-gray-200 rounded mb-4"></div>
            <h3 className="font-semibold">Wood Craftsman</h3>
            <p className="text-sm text-gray-600">Takayama</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 text-center">
        <h2 className="text-3xl mb-6 font-semibold">
          For artisans who value legacy over volume
        </h2>
        <button className="bg-black text-white px-6 py-3 rounded-full">
          Work with us
        </button>
      </section>

    </main>
  );
}
