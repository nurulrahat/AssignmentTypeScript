function formatString(input: string, toUpper?: boolean): string {
  if (toUpper ?? true) {
    return input.toUpperCase();
  } else return input.toLowerCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((element) => element.rating >= 4);
}

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];

// filterByRating(books);

// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
