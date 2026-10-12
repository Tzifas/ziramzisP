import Head from "next/head";
import PageShell from "../../components/PageShell";
import { absoluteUrl, site } from "../../lib/site";
import { posts, readingTime, dateLabel } from "../../data/journal";

export default function JournalIndex() {
  return (
    <>
      <Head>
        <title>The Hive Journal - Web & Brand Notes for Kenyan Businesses | Ziramzis</title>
        <meta name="description" content="Practical notes on websites, brands and going online for Kenyan businesses - costs, plans and tools, written from Mombasa by the Ziramzis studio." />
        <link rel="canonical" href={absoluteUrl("/journal")} />
        <meta name="theme-color" content="#050A18" />
        <meta name="robots" content="index, follow" />
      </Head>

      <PageShell>
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <p className="eyebrow">THE HIVE JOURNAL</p>
          <h1 className="section-title mt-4">Notes from the hive</h1>
          <p className="text-gray-400 leading-relaxed mt-4 max-w-2xl">Practical, honest notes on websites, brands and going online - written for Kenyan businesses, useful anywhere.</p>

          <div className="mt-12 space-y-6">
            {posts.map((post) => (
              <a key={post.slug} href={"/journal/" + post.slug} className="block rounded-2xl p-6" style={{ background: "rgba(245,200,66,0.04)", border: "1px solid rgba(245,200,66,0.15)" }}>
                <p className="text-xs font-bold tracking-widest" style={{ color: "var(--honey-gold)" }}>{dateLabel(post.date).toUpperCase()} / {readingTime(post)} MIN READ</p>
                <h2 className="text-white font-bold text-xl mt-2">{post.title}</h2>
                <p className="text-gray-400 leading-relaxed mt-2">{post.description}</p>
                <span className="inline-block mt-3 text-sm font-bold" style={{ color: "var(--cyan-mid)" }}>Read the note</span>
              </a>
            ))}
          </div>

          <div className="mt-14 pt-8" style={{ borderTop: "1px solid rgba(245,200,66,0.15)" }}>
            <p className="text-gray-400 text-sm">New here? Meet <a href="/keeper" className="font-semibold" style={{ color: "var(--honey-gold)" }}>the Keeper</a>, or start with a <a href={"https://wa.me/" + site.whatsapp} className="font-semibold" style={{ color: "var(--cyan-mid)" }}>quick WhatsApp message</a>.</p>
          </div>
        </main>

        <footer className="py-8 px-4 text-center" style={{ background: "#030810", borderTop: "1px solid rgba(245,200,66,0.12)" }}>
          <span className="text-gray-600 text-sm">© {new Date().getFullYear()} Ziramzis - Busy Bee Studio, Mombasa, Kenya.</span>
        </footer>
      </PageShell>
    </>
  );
}
