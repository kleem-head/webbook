export interface AuthorData {
  authorId: number;
  name: string;
}

export interface BookData {
  bookId: number;
  name: string;
  pageCount: number;
  authorId: number;
  author: AuthorData;
}

export let authors: AuthorData[] = [
  { authorId: 1, name: "Пушкин" },
  { authorId: 2, name: "Гоголь" }
];

export let books: BookData[] = [
  {
    bookId: 1,
    name: "Руслан и Людмила",
    pageCount: 24,
    authorId: 1,
    author: { authorId: 1, name: "Пушкин" }
  },
  {
    bookId: 2,
    name: "Выстрел",
    pageCount: 24,
    authorId: 1,
    author: { authorId: 1, name: "Пушкин" }
  },
  {
    bookId: 3,
    name: "Метель",
    pageCount: 24,
    authorId: 1,
    author: { authorId: 1, name: "Пушкин" }
  },
  {
    bookId: 4,
    name: "Гробовщик",
    pageCount: 24,
    authorId: 1,
    author: { authorId: 1, name: "Пушкин" }
  },
  {
    bookId: 5,
    name: "Барышня-крестьянка",
    pageCount: 24,
    authorId: 1,
    author: { authorId: 1, name: "Пушкин" }
  },
  {
    bookId: 6,
    name: "Мёртвые души",
    pageCount: 24,
    authorId: 2,
    author: { authorId: 2, name: "Гоголь" }
  },
  {
    bookId: 7,
    name: "Вечера на хуторе близ Диканьки",
    pageCount: 24,
    authorId: 2,
    author: { authorId: 2, name: "Гоголь" }
  },
  {
    bookId: 8,
    name: "Вий",
    pageCount: 24,
    authorId: 2,
    author: { authorId: 2, name: "Гоголь" }
  }
];
