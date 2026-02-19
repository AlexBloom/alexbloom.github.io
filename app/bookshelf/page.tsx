import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/types";

export const metadata: Metadata = {
  title: "Bookshelf",
  description: "Books Alex Bloom recommends.",
};

// Cover images live in public/img/bookshelf/
// bookshop_url stored here for future use (e.g. linking covers to Bookshop.org)
const books: Book[] = [
  {
    title: "Between the World and Me",
    author: "Ta-Nehisi Coates",
    cover: "/img/bookshelf/between-the-world-and-me.jpg",
    bookshopUrl: "https://bookshop.org/p/books/between-the-world-and-me-ta-nehisi-coates/7372138",
  },
  {
    title: "Deep Survival: Who Lives, Who Dies, and Why",
    author: "Laurence Gonzales",
    cover: "/img/bookshelf/deep-survival.jpg",
    bookshopUrl: "https://bookshop.org/p/books/deep-survival-who-lives-who-dies-and-why-laurence-gonzales/92450c72dea0c7ac",
  },
  {
    title: "Digital Minimalism",
    author: "Cal Newport",
    cover: "/img/bookshelf/digital-minimalism.png",
    bookshopUrl: "https://bookshop.org/a/6354/9780525536512",
  },
  {
    title: "Essentialism: The Disciplined Pursuit of Less",
    author: "Greg McKeown",
    cover: "/img/bookshelf/essentialism.jpg",
    bookshopUrl: "https://bookshop.org/p/books/essentialism-the-disciplined-pursuit-of-less-greg-mckeown/0c10ca5210208044",
  },
  {
    title: "Good to Great",
    author: "Jim Collins",
    cover: "/img/bookshelf/good-to-great.jpg",
    bookshopUrl: "https://bookshop.org/p/books/good-to-great-why-some-companies-make-the-leap-and-others-don-t-jim-collins/8068358",
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    cover: "/img/bookshelf/how-to-win-friends-and-influence-people.jpg",
    bookshopUrl: "https://bookshop.org/p/books/how-to-win-friends-and-influence-people-dale-carnegie/3d1b285ce459859f",
  },
  {
    title: "Intercom on Jobs to be Done",
    author: "Intercom",
    cover: "/img/bookshelf/jobs-to-be-done.jpg",
    bookshopUrl: "https://www.intercom.com/books/jobs-to-be-done",
    notes: "Free digital resource from Intercom",
  },
  {
    title: "The Life Changing Magic of Tidying Up",
    author: "Marie Kondo",
    cover: "/img/bookshelf/the-life-changing-magic-of-tidying-up.jpg",
    bookshopUrl: "https://bookshop.org/p/books/the-life-changing-magic-of-tidying-up-the-japanese-art-of-decluttering-and-organizing-marie-kondo/b9098c8a583a56c9",
  },
  {
    title: "Nomadic Furniture (Volumes 1 & 2)",
    author: "James Hennessey and Victor Papanek",
    cover: "/img/bookshelf/nomadic-furniture.jpg",
    bookshopUrl: "https://uk.bookshop.org/p/books/nomadic-furniture-d-i-y-projects-that-are-lightweight-and-light-on-the-environment-james-hennessey/1835533",
    notes: "Includes both Volumes 1 and 2",
  },
  {
    title: "Nonviolent Communication",
    author: "Marshall Rosenberg",
    cover: "/img/bookshelf/nonviolent-communication.jpg",
    bookshopUrl: "https://bookshop.org/p/books/nonviolent-communication-a-language-of-life-life-changing-tools-for-healthy-relationships-marshall-b-rosenberg-phd/d0947a413fc73778",
  },
  {
    title: "Outliers: The Story of Success",
    author: "Malcolm Gladwell",
    cover: "/img/bookshelf/outliers.jpg",
    bookshopUrl: "https://bookshop.org/p/books/outliers-the-story-of-success-malcolm-gladwell/3ac6b2a32dd24c5f",
  },
  {
    title: "Permanent Record",
    author: "Edward Snowden",
    cover: "/img/bookshelf/permanent-record.jpg",
    bookshopUrl: "https://bookshop.org/p/books/permanent-record-edward-snowden/10906024",
  },
  {
    title: "Ruined by Design",
    author: "Mike Monteiro",
    cover: "/img/bookshelf/ruined-by-design.jpg",
    bookshopUrl: "https://bookshop.org/p/books/ruined-by-design-how-designers-destroyed-the-world-and-what-we-can-do-to-fix-it-mike-monteiro/17159393",
  },
  {
    title: "Steal Like an Artist",
    author: "Austin Kleon",
    cover: "/img/bookshelf/steal-like-an-artist.jpg",
    bookshopUrl: "https://bookshop.org/p/books/steal-like-an-artist-10-things-nobody-told-you-about-being-creative-austin-kleon/c4f42fc8a7e0c44d",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    cover: "/img/bookshelf/thinking-with-type.jpg",
    bookshopUrl: "https://bookshop.org/p/books/thinking-with-type-2nd-revised-and-expanded-edition-a-critical-guide-for-designers-writers-editors-students-ellen-lupton/b69f1fbc5e7ab63c",
  },
  {
    title: "Ways of Seeing",
    author: "John Berger",
    cover: "/img/bookshelf/ways-of-seeing.jpg",
    bookshopUrl: "https://bookshop.org/p/books/ways-of-seeing-based-on-the-bbc-television-series-john-berger/5f4f58d21af9de88",
  },
  {
    title: "The Tao of Pooh",
    author: "Benjamin Hoff",
    cover: "/img/bookshelf/the-tao-of-pooh.jpg",
    bookshopUrl: "https://bookshop.org/p/books/the-tao-of-pooh-benjamin-hoff/4efbf0c9ec3d3404",
  },
  {
    title: "The Essential Calvin and Hobbes",
    author: "Bill Watterson",
    cover: "/img/bookshelf/the-essential-calvin-and-hobbes.jpg",
    bookshopUrl: "https://bookshop.org/p/books/essential-calvin-and-hobbes-bill-watterson/70e0e68b1ef213cd",
  },
  {
    title: "CAPS LOCK",
    author: "Ruben Pater",
    cover: "/img/bookshelf/caps-lock.jpg",
    bookshopUrl: "https://bookshop.org/p/books/caps-lock-how-capitalism-took-hold-of-graphic-design-and-how-to-escape-from-it-ruben-pater/17088918",
  },
  {
    title: "Fantasy",
    author: "Bruno Munari",
    cover: "/img/bookshelf/fantasy-munari.jpg",
  },
  {
    title: "What Design Can't Do",
    author: "Silvio Lorusso",
    cover: "",
    bookshopUrl: "https://bookshop.org/p/books/what-design-can-t-do-silvio-lorusso/20887429",
  },
  {
    title: "1984",
    author: "George Orwell",
    cover: "/img/bookshelf/1984.jpg",
    bookshopUrl: "https://bookshop.org/p/books/1984-george-orwell/bc4868f7a40152ea",
  },
  {
    title: "How to Be an Antiracist",
    author: "Ibram X. Kendi",
    cover: "/img/bookshelf/how-to-be-an-antiracist.jpg",
    bookshopUrl: "https://bookshop.org/p/books/how-to-be-an-antiracist-ibram-x-kendi/12072476",
  },
  {
    title: "Universal Principles of Design",
    author: "William Lidwell, Kritina Holden, and Jill Butler",
    cover: "/img/bookshelf/universal-principles-of-design.jpg",
    bookshopUrl: "https://bookshop.org/p/books/universal-principles-of-design-updated-and-expanded-third-edition-200-ways-to-increase-appeal-enhance-usability-influence-perception-and-make-bett/8058e305c7f3aa19",
  },
  {
    title: "The Creative Act: A Way of Being",
    author: "Rick Rubin",
    cover: "/img/bookshelf/the-creative-act.jpg",
    bookshopUrl: "https://bookshop.org/p/books/the-creative-act-a-way-of-being-rick-rubin/18543579",
  },
  {
    title: "The Nomadic Handbook",
    author: "James Hennessey",
    cover: "/img/bookshelf/the-nomadic-handbook.jpg",
    notes: "Out of print (1979). Find via used book sellers.",
  },
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
