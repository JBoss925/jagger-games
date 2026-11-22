import type { NavLinkItem } from "@jagger-ui/types/content";

export const gameLinks: NavLinkItem[] = [
  { id: "jordle", label: "Jordle", href: "/jordle", matchPrefix: "/jordle" },
  { id: "jolor", label: "Jolor", href: "/jolor", matchPrefix: "/jolor" },
  { id: "jinx", label: "Jinx", href: "/jinx", matchPrefix: "/jinx" },
  { id: "judoku", label: "Judoku", href: "/judoku", matchPrefix: "/judoku" },
  { id: "jigsaw", label: "Jigsaw", href: "/jigsaw", matchPrefix: "/jigsaw" },
  { id: "domes", label: "Domes", href: "/domes", matchPrefix: "/domes" }
];

export const gamesPlaceholderContent = {
  "/": {
    cards: [
      {
        title: "Jordle",
        icon: "jordle",
        href: "/jordle",
        text: "A six-letter daily word game. Guess the word, come back tomorrow, or dig through the archive."
      },
      {
        title: "Jolor",
        icon: "jolor",
        href: "/jolor",
        text: "A daily color game. You get the name, not the swatch, and have to find the color yourself."
      },
      {
        title: "Jinx",
        icon: "jinx",
        href: "/jinx",
        text: "A daily minefield puzzle. Mark mines, open the safe spaces, and try to clear the whole board."
      },
      {
        title: "Judoku",
        icon: "judoku",
        href: "/judoku",
        text: "A smaller daily sudoku. Fill a 6x6 grid without repeats in any row, column, or box."
      },
      {
        title: "Jigsaw",
        icon: "jigsaw",
        href: "/jigsaw",
        text: "A daily image puzzle. Swap tiles back into place and rebuild the picture one move at a time."
      },
      {
        title: "Domes",
        icon: "domes",
        href: "/domes",
        text: "A head-to-head strategy game inspired by Santorini. Climb, build, trap space, and try to reach the third level first."
      }
    ]
  }
} as const;
