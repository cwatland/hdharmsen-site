// src/app/page.tsx
import Link from "next/link";
import { getClient } from "@/sanity/client";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News | HDHarmsen',
  description: 'Latest news and updates from HDHarmsen',
};

type NewsListItem = { title: string; slug: string; date: string };
type ShowListItem = {
    title: string;
    date: string;       // ISO after we coalesce/convert below
    venue?: string | null;
    city?: string | null;
    ticketsUrl?: string | null;
};

export const dynamic = "force-dynamic"; // TEMP while verifying—remove after webhook is set

export default async function Home() {
    const client = getClient();

    const [news, shows] = await Promise.all([
        client.fetch<NewsListItem[]>(
            `*[_type=="news"] | order(date desc)[0..4]{
        title, "slug": slug.current, date
      }`
        ),
        client.fetch<ShowListItem[]>(
            // Keep shows with date >= today (inclusive), and sort soonest first
            `*[_type=="show" && coalesce(dateTime(date), dateTime(showDate)) >= dateTime(now())]
       | order(coalesce(dateTime(date), dateTime(showDate)) asc)[0..4]{
         title,
         "date": coalesce(dateTime(date), dateTime(showDate)),
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
                            <Link className="underline" href={`/news/${n.slug}`}>{n.title}</Link>
                            <span className="ml-2 text-sm text-gray-500">
                {new Date(n.date).toLocaleDateString()}
              </span>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold">Upcoming Shows</h2>
                {shows.length === 0 ? (
                    <p className="mt-4 text-sm text-gray-500">No upcoming shows found.</p>
                ) : (
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
                )}
            </section>
        </main>
    );
}
