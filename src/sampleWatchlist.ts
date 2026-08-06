import type { WatchlistItem } from "./types.ts";

/**
 * A watchlist to develop against.
 *
 * Deliberately untidy, because real data is: some films have no rating yet,
 * one has an unknown runtime, and a few are already watched. If your function
 * only works on the tidy rows, it does not work.
 */
export const sampleWatchlist: WatchlistItem[] = [
  { id: 1, title: "Arrival", year: 2016, runtimeMinutes: 116, rating: 9, watched: true },
  { id: 2, title: "Whiplash", year: 2014, runtimeMinutes: 106, rating: 8, watched: true },
  {
    id: 3,
    title: "Parasite",
    year: 2019,
    runtimeMinutes: 132,
    rating: 10,
    watched: true,
  },
  {
    id: 4,
    title: "The Lighthouse",
    year: 2019,
    runtimeMinutes: 109,
    rating: null,
    watched: false,
  },
  {
    id: 5,
    title: "Past Lives",
    year: 2023,
    runtimeMinutes: 105,
    rating: 8,
    watched: false,
  },
  {
    id: 6,
    title: "Aftersun",
    year: 2022,
    runtimeMinutes: 102,
    rating: null,
    watched: false,
  },
  { id: 7, title: "Burning", year: 2018, runtimeMinutes: 148, rating: 7, watched: false },
  {
    id: 8,
    title: "Sound of Metal",
    year: 2019,
    runtimeMinutes: null,
    rating: 8,
    watched: false,
  },
  {
    id: 9,
    title: "Minari",
    year: 2020,
    runtimeMinutes: 115,
    rating: null,
    watched: false,
  },
  { id: 10, title: "Drive", year: 2011, runtimeMinutes: 100, rating: 6, watched: true },
  {
    id: 11,
    title: "Hereditary",
    year: 2018,
    runtimeMinutes: 127,
    rating: 7,
    watched: false,
  },
  { id: 12, title: "Amélie", year: 2001, runtimeMinutes: 122, rating: 9, watched: false },
];
