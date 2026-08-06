/**
 * Run the library against the sample watchlist and print what comes back.
 *
 *   npm run demo
 *
 * Use this while you are building your own function: a test tells you whether
 * one case works, this tells you what the whole thing actually does.
 */
import { sampleWatchlist } from "./sampleWatchlist.ts";
import { unwatched } from "./watchlist.ts";

console.log(`${sampleWatchlist.length} films on the list`);
console.log(`${unwatched(sampleWatchlist).length} still to watch\n`);

for (const film of unwatched(sampleWatchlist)) {
  const runtime =
    film.runtimeMinutes === null ? "runtime unknown" : `${film.runtimeMinutes}m`;
  const rating = film.rating === null ? "not rated" : `${film.rating}/10`;
  console.log(`  ${film.title} (${film.year})  ${runtime}  ${rating}`);
}
