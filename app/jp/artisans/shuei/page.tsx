import Image from "next/image";

export default function JapaneseShueiPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#171717]">
      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-sm tracking-[0.22em] text-[#8A6748]">
            SHUEI · KYOTO
          </p>

          <h1 className="mb-10 text-5xl font-semibold leading-tight md:text-7xl">
            世代を越えて受け継がれる、
            <br />
            京の刺繍ときもの。
          </h1>

          <div className="mt-12 mb-12 overflow-hidden rounded-3xl">
            <Image
              src="/images/shuei/hero.jpg"
              alt="繍栄のきものと刺繍"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="space-y-8 text-lg leading-9 text-[#5F5A52]">
            <p>
              繍栄とのご縁は、一枚のきものを誂えたことから始まりました。その経験を通して、完成した作品の美しさだけでなく、その背景にある人の手、時間、技術の深さに触れることができました。
            </p>

            <p>
              その後、京都に新しく開かれたGLIONのきものギャラリーを訪れる機会をいただき、田畑若菜さんとお会いすることで、繍栄のものづくりに込められた考え方や美意識をより深く知ることができました。
            </p>

            <p>
              繍栄は、京都のきもの文化、西陣織の伝統、上質な絹素材、そして高度な刺繍の技を重ね合わせながら、きものや染織作品を生み出しています。一つひとつの作品には、図案、染め、織り、刺繍に関わる多くの職人の知識と経験が息づいています。
            </p>

            <p>
              私たちが特に心を動かされたのは、刺繍に表れる細やかな表情です。繊細な質感、控えめな色づかい、そして正確な手仕事には、絹を身にまとう芸術へと高めるための長い時間と熟練が込められています。
            </p>

            <p>
              完成したきものの背後には、専門性の高い多くの職人の存在があります。その方々の名前が表に出ることは少なくても、その技は作品の根幹を支えています。和継は、こうした人の手と物語にも光を当てていきたいと考えています。
            </p>

            <p>
              繍栄は、和継が大切にしたい「生きた手仕事」を象徴する存在です。美しさは見た目だけにあるのではなく、その背景にある人、工程、継承されてきた文化の中にあります。
            </p>
          </div>

          <blockquote className="mt-16 border-l-4 border-[#8A6748] pl-6 text-xl italic">
            "日本の手仕事の美しさは、完成した作品だけでなく、それを作り続ける人々の中にもあります。"
          </blockquote>

          <div className="mt-12">
            <a
              href="/jp#artisans"
              className="inline-block rounded-full border border-black/20 px-6 py-3 text-sm transition hover:bg-black hover:text-white"
            >
              ← 職人の物語へ戻る
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
