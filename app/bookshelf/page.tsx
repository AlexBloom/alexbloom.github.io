import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/types";

export const metadata: Metadata = {
  title: "Bookshelf",
  description: "Books Alex Bloom recommends.",
};

// Ported from bookshelf.html — cover images live in public/img/bookshelf/
const books: Book[] = [
  { title: "Between the World and Me", author: "Ta-Nehisi Coates", cover: "/img/bookshelf/between-the-world-and-me.jpg" },
  { title: "Deep Survival", author: "Laurence Gonzales", cover: "/img/bookshelf/deep-survival.jpg" },
  { title: "Digital Minimalism", author: "Cal Newport", cover: "/img/bookshelf/digital-minimalism.png" },
  { title: "Essentialism", author: "Greg McKeown", cover: "/img/bookshelf/essentialism.jpg" },
  { title: "Good to Great", author: "Jim Collins", cover: "/img/bookshelf/good-to-great.jpg" },
  { title: "How to Win Friends and Influence People", author: "Dale Carnegie", cover: "/img/bookshelf/how-to-win-friends-and-influence-people.jpg" },
  { title: "Jobs to Be Done", author: "Anthony Ulwick", cover: "/img/bookshelf/jobs-to-be-done.jpg" },
  { title: "Nomadic Furniture", author: "James Hennessey & Victor Papanek", cover: "/img/bookshelf/nomadic-furniture.jpg" },
  { title: "Nonviolent Communication", author: "Marshall Rosenberg", cover: "/img/bookshelf/nonviolent-communication.jpg" },
  { title: "Outliers", author: "Malcolm Gladwell", cover: "/img/bookshelf/outliers.jpg" },
  { title: "Permanent Record", author: "Edward Snowden", cover: "/img/bookshelf/permanent-record.jpg" },
  { title: "Ruined by Design", author: "Mike Monteiro", cover: "/img/bookshelf/ruined-by-design.jpg" },
  { title: "Steal Like an Artist", author: "Austin Kleon", cover: "/img/bookshelf/steal-like-an-artist.jpg" },
  { title: "The Life-Changing Magic of Tidying Up", author: "Marie Kondō", cover: "/img/bookshelf/the-life-changing-magic-of-tidying-up.jpg" },
  { title: "Thinking with Type", author: "Ellen Lupton", cover: "/img/bookshelf/thinking-with-type.jpg" },
  { title: "Ways of Seeing", author: "John Berger", cover: "/img/bookshelf/ways-of-seeing.jpg" },
];

export default function BookshelfPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-2xl font-medium mb-2">Bookshelf</h1>
        <p className="text-sm text-muted-foreground">
          Books worth reading. Borrow them free via the{" "}
          <Link
            href="https://libbyapp.com"
            className="underline underline-offset-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Libby app
          </Link>
          .
        </p>
      </div>

      {books.length === 0 ? (
        <p className="text-muted-foreground text-sm">Books coming soon.</p>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {books.map((book) => (
            <li key={book.title}>
              <div className="relative aspect-[2/3] bg-muted rounded overflow-hidden mb-2">
                {book.cover && (
                  <Image
                    src={book.cover}
                    alt={`${book.title} cover`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 20vw"
                  />
                )}
              </div>
              <p className="text-xs font-medium leading-snug">{book.title}</p>
              <p className="text-xs text-muted-foreground">{book.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
