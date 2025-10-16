import Link from "next/link";
import { getClient, NewsListItem, ShowListItem } from "@/sanity/client";

export default async function Home() {
    const client = getClient();

    const [news, shows] = await Promise.all([
        client.fetch<NewsListItem[]>(
            `*[_type=="news"] | order(date desc)[0..4]{
        title,
        "slug": slug.current,
        date
      }`
        ),
        client.fetch<ShowListItem[]>(
            `*[_type=="show" && date >= now()] | order(date asc)[0..2]{
        title,
        date,
        venue,
        city,
        ticketsUrl
      }`
        ),
    ]);

    return (
        <main className="max-w-4xl mx-auto p-6 space-y-10">
            <section>
                <h1 className="text-3xl font-bold">Latest News</h1>
                <ul className="mt-4 space-y-2">
                    {news.map((n) => (
                        <li key={n.slug}>
                            <Link className="underline" href={`/news/${n.slug}`}>
                                {n.title}
                            </Link>
                            <span className="ml-2 text-sm text-gray-500">
                {new Date(n.date).toLocaleDateString()}
              </span>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Upcoming Shows</h2>
                <ul className="mt-4 space-y-2">
                    {shows.map((s, idx) => (
                        <li key={`${s.title}-${idx}`}>
                            <strong>{new Date(s.date).toLocaleDateString()}</strong> — {s.title}
                            {s.venue ? ` @ ${s.venue}` : ""} {s.city ? `(${s.city})` : ""}{" "}
                            {s.ticketsUrl && (
                                <a className="underline" href={s.ticketsUrl} target="_blank" rel="noreferrer">
                                    Tickets
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
