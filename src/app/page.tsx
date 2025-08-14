// app/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Início — Meu App Next.js",
  description:
    "Exemplo de page.tsx usando App Router com Tailwind e conteúdo dinâmico.",
  openGraph: {
    title: "Início — Meu App Next.js",
    description:
      "Exemplo de page.tsx usando App Router com Tailwind e conteúdo dinâmico.",
    type: "website",
    url: "https://example.com",
  },
};

// Exemplo de função que poderia buscar dados no servidor
// Ajuste para sua fonte (DB, fetch, etc.)
async function getHighlights() {
  // Exemplo com dados estáticos (substitua por uma busca real)
  return [
    {
      id: 1,
      title: "Velocidade",
      text: "Páginas rápidas por padrão com o App Router.",
    },
    {
      id: 2,
      title: "Acessível",
      text: "Semântica e boas práticas desde o início.",
    },
    {
      id: 3,
      title: "Escalável",
      text: "Pronto para crescer com você.",
    },
  ];
}

export default async function Page() {
  const highlights = await getHighlights();

  return (
    <main className="min-h-dvh bg-white text-gray-900">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Bem-vindo ao <span className="text-gray-500">Next.js</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Este é um{" "}
              <code className="rounded bg-gray-100 px-1">page.tsx</code>{" "}
              simples, usando o App Router, pronto para você adaptar ao seu
              projeto.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/docs"
                className="rounded-2xl border px-4 py-2 text-sm font-medium shadow-sm transition hover:shadow-md"
              >
                Ver documentação
              </Link>
              <Link
                href="/contato"
                className="rounded-2xl bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                Fale com a gente
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-tr from-gray-100 to-white" />
            <Image
              src="/hero.png"
              alt="Ilustração do app"
              width={900}
              height={700}
              priority
              className="w-full rounded-[2rem] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Por que usar este template?
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10 text-center text-sm text-gray-500">
        <p>
          Feito com <span aria-hidden>❤</span> usando Next.js. Altere este
          conteúdo em
          <code className="mx-1 rounded bg-gray-100 px-1">app/page.tsx</code>.
        </p>
      </footer>
    </main>
  );
}
