import Head from "next/head";
import PageShell from "../../components/PageShell";
import { absoluteUrl, site } from "../../lib/site";
import { posts, getPost, readingTime, dateLabel } from "../../data/journal";

function renderBlock(block, i) {
  if (block.t === "h2") {
    return <h2 key={i} className="text-white font-bold text-lg mt-8">{block.text}</h2>;
  }
  if (block.t === "ul") {
    return (
      <ul key={i} className="list-disc pl-5 space-y-2 text-gray-400 leading-relaxed">
        {block.items.map((item, j) => <li key={j}>{item}</li>)}
      </ul>
    );
  }
  return <p key={i} className="text-gray-400 leading-relaxed mt-3">{block.text}</p>;
}

export default function JournalPost({ post, others }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: "Ramadhan (Ziramzis)" },
    publisher: { "@type": "Organization", name: "Ziramzis" },
    mainEntityOfPage: absoluteUrl("/journal/" + post.slug + "/")
  };
  return (
    <>
      <Head>
        <title>{post.title} | The Hive Journal - Ziramzis</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={absoluteUrl("/journal/" + post.slug + "/")} />
        <meta name="theme-color" content="#050A18" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <PageShell>
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <p className="eyebrow">THE HIVE JOURNAL</p>
          <h1 className="section-title mt-4">{post.title}</h1>
          <p className="text-gray-500 text-sm mt-3">{dateLabel(post.date)} / {readingTime(post)} min read</p>

          <div className="mt-10 space-y-4">
            {post.body.map((block, i) => renderBlock(block, i))}
          </div>

          <div className="mt-14 rounded-2xl p-6" style={{ background: "rgba(0,200,215,0.05)", border: "1px solid rgba(0,200,215,0.2)" }}>
            <h2 className="text-white font-bold text-lg">Have a project like this in mind?</h2>
            <p className="text-gray-400 leading-relaxed mt-2">Start with a short message. The first conversation is free, and you will leave it knowing the right next step - whether or not we build together.</p>
            <a href={"https://wa.me/" + site.whatsapp + "?text=" + encodeURIComponent("Hi Ziramzis, I read your journal and I would like to discuss a project.")} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-5 py-2.5 rounded-full font-bold text-sm" style={{ background: "var(--honey-gold)", color: "#050A18" }}>Start a Hive Brief</a>
          </div>

          {others.length > 0 && (
            <div className="mt-12">
              <h2 className="text-white font-bold text-lg">More notes</h2>
              <ul className="mt-3 space-y-2">
                {others.map((o) => (
                  <li key={o.slug}>
                    <a href={"/journal/" + o.slug + "/"} className="font-semibold" style={{ color: "var(--cyan-mid)" }}>{o.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(245,200,66,0.12)", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <a href="/journal/" style={{ color: "var(--honey-gold)", fontSize: "0.82rem", fontWeight: 700 }}>All notes</a>
            <a href="/keeper" style={{ color: "var(--cyan-mid)", fontSize: "0.82rem", fontWeight: 700 }}>Meet the Keeper</a>
            <a href="/" style={{ color: "var(--gray-text)", fontSize: "0.82rem" }}>Back to the hive</a>
          </div>
        </main>

        <footer className="py-8 px-4 text-center" style={{ background: "#030810", borderTop: "1px solid rgba(245,200,66,0.12)" }}>
          <span className="text-gray-600 text-sm">© {new Date().getFullYear()} Ziramzis - Busy Bee Studio, Mombasa, Kenya.</span>
        </footer>
      </PageShell>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export function getStaticProps({ params }) {
  const post = getPost(params.slug);
  if (!post) return { notFound: true };
  const others = posts.filter((p) => p.slug !== params.slug).map((p) => ({ slug: p.slug, title: p.title }));
  return { props: { post, others } };
}
