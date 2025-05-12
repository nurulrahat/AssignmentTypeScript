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

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

// concatenateArrays(["a", "b"], ["c"]);       // Output: ["a", "b", "c"]
// concatenateArrays([1, 2], [3, 4], [5]);     // Output: [1, 2, 3, 4, 5]

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year); // Call the base class constructor
    this.model = model;
  }

  public getModel(): string {
    return `Model: ${this.model}`;
  }
}

// Example usage:
const myCar = new Car("Toyota", 2020, "Corolla");

//5

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}
//

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  // if(products==null) return null;
  if (products.length === 0) return null;

  let highestPrice = products[0];

  for (let index = 0; index < products.length; index++) {
    if (products[index].price > highestPrice.price) {
      highestPrice = products[index];
    }
  }
  return highestPrice;
}
//
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
}

//
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000); // 1 second delay
  });
}
