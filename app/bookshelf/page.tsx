import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/types";

export const metadata: Metadata = {
  title: "Bookshelf",
  description: "Books Alex Bloom recommends.",
};

// Cover images live in public/img/bookshelf/
// Sorted alphabetically by title (leading articles ignored).
// Bookshop.org thumbnails: site is behind Cloudflare; add covers manually if desired.
function sortKey(title: string): string {
  const t = title.trim().toLowerCase();
  if (t.startsWith("the ")) return t.slice(4);
  if (t.startsWith("a ")) return t.slice(2);
  if (t.startsWith("an ")) return t.slice(3);
  return t;
}

const books: Book[] = [
  {
    title: "1984",
    author: "George Orwell",
    cover: "/img/bookshelf/1984.jpg",
    bookshopUrl: "https://bookshop.org/p/books/1984-george-orwell/bc4868f7a40152ea",
  },
  {
    title: "The Architecture of Happiness",
    author: "Alain De Botton",
    cover: "/img/bookshelf/the-architecture-of-happiness.jpg",
    bookshopUrl: "https://bookshop.org/p/books/the-architecture-of-happiness-alain-de-botton/7608d0e22673642c?ean=9780307277244&next=t",
  },
  {
    title: "Between the World and Me",
    author: "Ta-Nehisi Coates",
    cover: "/img/bookshelf/between-the-world-and-me.jpg",
    bookshopUrl: "https://bookshop.org/p/books/between-the-world-and-me-ta-nehisi-coates/7372138",
  },
  {
    title: "CAPS LOCK",
    author: "Ruben Pater",
    cover: "/img/bookshelf/caps-lock.jpg",
    bookshopUrl: "https://bookshop.org/p/books/caps-lock-how-capitalism-took-hold-of-graphic-design-and-how-to-escape-from-it-ruben-pater/17088918",
  },
  {
    title: "Company of One: Why Staying Small Is the Next Big Thing for Business",
    author: "Paul Jarvis",
    cover: "/img/bookshelf/company-of-one.jpg",
    bookshopUrl: "https://bookshop.org/p/books/company-of-one-why-staying-small-is-the-next-big-thing-for-business-paul-jarvis/c16bb7b795cff89f?ean=9780358213253&next=t",
  },
  {
    title: "The Creative Act: A Way of Being",
    author: "Rick Rubin",
    cover: "/img/bookshelf/the-creative-act.jpg",
    bookshopUrl: "https://bookshop.org/p/books/the-creative-act-a-way-of-being-rick-rubin/18543579",
  },
  {
    title: "Digital Minimalism",
    author: "Cal Newport",
    cover: "/img/bookshelf/digital-minimalism.png",
    bookshopUrl: "https://bookshop.org/a/6354/9780525536512",
  },
  {
    title: "The Essential Calvin and Hobbes",
    author: "Bill Watterson",
    cover: "/img/bookshelf/the-essential-calvin-and-hobbes.jpg",
    bookshopUrl: "https://bookshop.org/p/books/essential-calvin-and-hobbes-bill-watterson/70e0e68b1ef213cd",
  },
  {
    title: "Essentialism: The Disciplined Pursuit of Less",
    author: "Greg McKeown",
    cover: "/img/bookshelf/essentialism.jpg",
    bookshopUrl: "https://bookshop.org/p/books/essentialism-the-disciplined-pursuit-of-less-greg-mckeown/0c10ca5210208044",
  },
  {
    title: "Euclid's Door",
    author: "Jim Tolpin",
    cover: "/img/bookshelf/euclids-door.jpg",
    bookshopUrl: "https://lostartpress.com/collections/books/products/euclids-door",
  },
  {
    title: "Fantasy",
    author: "Bruno Munari",
    cover: "/img/bookshelf/fantasy-munari.jpg",
    bookshopUrl: "https://bookshop.org/p/books/fantasy-invention-creativity-and-imagination-in-visual-communications-bruno-munari/616bf826245b53c4?ean=9781941753705&next=t",
  },
  {
    title: "Grid Systems in Graphic Design: A Visual Communication Manual for Graphic Designers, Typographers and Three Dimensional Designers",
    author: "Josef Müller-Brockmann",
    cover: "/img/bookshelf/grid-systems.jpg",
    bookshopUrl: "https://bookshop.org/p/books/grid-systems-in-graphic-design-a-visual-communication-manual-for-graphic-designers-typographers-and-three-dimensional-designers-josef-m-ller-brockma/1f27890c0395ff7d?ean=9783721201451&next=t",
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    cover: "/img/bookshelf/how-to-win-friends-and-influence-people.jpg",
    bookshopUrl: "https://bookshop.org/p/books/how-to-win-friends-and-influence-people-dale-carnegie/3d1b285ce459859f",
  },
  {
    title: "Interaction of Color: 50th Anniversary Edition",
    author: "Josef Albers",
    cover: "/img/bookshelf/interaction-of-color.jpg",
    bookshopUrl: "https://bookshop.org/p/books/interaction-of-color-josef-albers/f106d12bb0aa7248?ean=9780300179354&next=t",
  },
  {
    title: "Intercom on Jobs to be Done",
    author: "Intercom",
    cover: "/img/bookshelf/jobs-to-be-done.jpg",
    bookshopUrl: "https://www.intercom.com/books/jobs-to-be-done",
    notes: "Free digital resource from Intercom",
  },
  {
    title: "Jim Tolpin's Woodworking Wit & Wisdom: Thirty Years of Lessons from the Trade",
    author: "Jim Tolpin",
    cover: "/img/bookshelf/woodworking-wit-wisdom.jpeg",
    bookshopUrl: "https://archive.org/details/jimtolpinswoodwo0000tolp",
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
    title: "Nomadic Furniture 2",
    author: "James Hennessey and Victor Papanek",
    cover: "/img/bookshelf/nomadic-furniture-2.jpg",
    notes: "Included in the combined reprint (Nomadic Furniture Volumes 1 & 2) on Bookshop.org.",
  },
  {
    title: "The Nomadic Handbook",
    author: "James Hennessey",
    cover: "/img/bookshelf/the-nomadic-handbook.jpg",
    notes: "Out of print (1979). Find via used book sellers.",
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
    title: "Sunset Furniture you can Build",
    author: "Sunset Books",
    cover: "/img/bookshelf/furniture-you-can-build.png",
    bookshopUrl: "https://archive.org/details/furnitureyoucanb00suns",
    notes: "Out of print. Only available through used book sellers.",
  },
  {
    title: "Sunset Ideas for Storage in Your Home",
    author: "Editorial Staff of Sunset Magazine",
    cover: "",
    notes: "Out of print (1960). Only available through used book sellers.",
  },
  {
    title: "The Tao of Pooh",
    author: "Benjamin Hoff",
    cover: "/img/bookshelf/the-tao-of-pooh.jpg",
    bookshopUrl: "https://bookshop.org/p/books/the-tao-of-pooh-benjamin-hoff/4efbf0c9ec3d3404",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    cover: "/img/bookshelf/thinking-with-type.jpg",
    bookshopUrl: "https://bookshop.org/p/books/thinking-with-type-2nd-revised-and-expanded-edition-a-critical-guide-for-designers-writers-editors-students-ellen-lupton/b69f1fbc5e7ab63c",
  },
  {
    title: "Trademarks & Symbols Volume 1: Alphabetical Designs",
    author: "Yasaburo Kuwayama",
    cover: "/img/bookshelf/trademarks-symbols-v1.png",
    bookshopUrl: "https://ia601402.us.archive.org/30/items/trademarks-symbols-vol-1/trademarks-%26-symbols-vol-1_text.pdf",
    notes: "Out of print (1973). Only available through used book sellers and specialist design book dealers.",
  },
  {
    title: "Trademarks & Symbols Volume 2: Symbolical Designs",
    author: "Yasaburo Kuwayama",
    cover: "/img/bookshelf/trademarks-symbols-v2.png",
    bookshopUrl: "https://archive.org/details/trademarks-symbols-vol-2/trademarks-%26-symbols-vol-2",
    notes: "Out of print (1973). Only available through used book sellers and specialist design book dealers.",
  },
  {
    title: "Universal Principles of Design",
    author: "William Lidwell, Kritina Holden, and Jill Butler",
    cover: "/img/bookshelf/universal-principles-of-design.jpg",
    bookshopUrl: "https://bookshop.org/p/books/universal-principles-of-design-updated-and-expanded-third-edition-200-ways-to-increase-appeal-enhance-usability-influence-perception-and-make-bett/8058e305c7f3aa19",
  },
  {
    title: "Ways of Seeing",
    author: "John Berger",
    cover: "/img/bookshelf/ways-of-seeing.jpg",
    bookshopUrl: "https://bookshop.org/p/books/ways-of-seeing-based-on-the-bbc-television-series-john-berger/5f4f58d21af9de88",
  },
  {
    title: "What Design Can't Do",
    author: "Silvio Lorusso",
    cover: "/img/bookshelf/what-design-cant-do.jpg",
    bookshopUrl: "https://bookshop.org/p/books/what-design-can-t-do-essays-on-design-and-disillusion-silvio-lorusso/16e2bc44e250e0c7?ean=9789083350134&next=t",
  },
].sort((a, b) => sortKey(a.title).localeCompare(sortKey(b.title)));

export default function BookshelfPage() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold leading-snug tracking-tight mb-2">Bookshelf</h1>
        <p className="text-muted-foreground">
          For anyone making&mdash;or aspiring to make&mdash;products, systems, or spaces. <br/>
          Links to buy on bookshop or borrow them free via {" "}
          <Link
            href="https://libbyapp.com"
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Libby
          </Link>
          .
        </p>
      </div>

      {books.length === 0 ? (
        <p className="text-muted-foreground text-sm">Books coming soon.</p>
      ) : (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-x-8 lg:gap-x-10">
          {books.map((book) => (
            <li key={book.title}>
              {/* Cover — linked to bookshop URL when available */}
              <div className="relative aspect-[2/3] rounded overflow-hidden mb-2">
                {book.cover && (
                  book.bookshopUrl ? (
                    <Link
                      href={book.bookshopUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                      tabIndex={-1}
                    >
                      <Image
                        src={book.cover}
                        alt={`${book.title} cover`}
                        fill
                        className="object-contain transition-opacity hover:opacity-80"
                        sizes="(max-width: 640px) 50vw, 20vw"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={book.cover}
                      alt={`${book.title} cover`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 50vw, 20vw"
                    />
                  )
                )}
              </div>

              <p className="text-xs font-medium leading-snug">{book.title}</p>
              <p className="text-xs text-muted-foreground">{book.author}</p>

              {book.bookshopUrl && (
                <Link
                  href={book.bookshopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-xs text-muted-foreground hover:text-foreground transition-colors mt-1 inline-flex items-center gap-0.5"
                >
                  Read <span className="relative inline-flex overflow-hidden w-[1em] h-[1em] align-middle"><span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-x-full group-hover:-translate-y-full">↗</span><span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0">↗</span></span>
                </Link>
              )}
              {book.notes && (
                <p className="text-xs text-muted-foreground mt-1">{book.notes}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
