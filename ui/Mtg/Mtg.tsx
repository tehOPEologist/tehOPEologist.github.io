import { parse } from "papaparse";
import { deckApiUrl, decks } from "../../constants/mtg.mjs";

export default async function Mtg() {
  // @ts-expect-error
  const csvs = [];
  // @ts-expect-error
  const deckNames = [];
  // @ts-expect-error
  const deckSetsArr = [];
  let computedTotal = 0;

  await Promise.all(
    decks.map(async ({ name, id }) => {
      deckNames.push(name);

      const response = await fetch(deckApiUrl`${id}`);
      const result = await response.text();

      parse(result, {
        complete({ data }) {
          csvs.push(data);
        },
      });
    })
  );
  // @ts-expect-error
  csvs.forEach((csv) => {
    console.log(csv);
    deckSetsArr.push(csv[1][6]);
    // @ts-expect-error
    csv.forEach((row, i) => {
      if (i !== 0) {
        computedTotal += row.length > 0 && row[12] ? parseFloat(row[12]) : 0;
      }
    });
  });

  const organizedDecks = {};

  // @ts-expect-error
  deckNames.forEach((deckName, i) => {
    // @ts-expect-error
    if (organizedDecks[deckName]) {
      // @ts-expect-error
      organizedDecks[deckName].push(deckSetsArr[i]);
    } else {
      // @ts-expect-error
      organizedDecks[deckName] = [deckSetsArr[i]];
    }
  });

  return (
    <>
      {/* @ts-expect-error */}
      <h1>Total: ${parseFloat(computedTotal).toFixed(2)}</h1>
      <hr />
      {Object.keys(organizedDecks).map((key) => (
        <section key={key}>
          <h2>{key}</h2>
          <ul>
            {/* @ts-expect-error */}
            {[...new Set(organizedDecks[key])].map((set) => {
              // @ts-expect-error
              return <li key={set}>{set}</li>;
            })}
          </ul>
        </section>
      ))}
    </>
  );
}
