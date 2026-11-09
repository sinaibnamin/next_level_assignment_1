# Type Alias vs Interface in TypeScript

## Introduction

In TypeScript, we can declare a data shape in two ways: `type` and `interface`. For object shapes they look the same, but they are not the same. Sometimes beginners get confused between them, so I describe the differences to clear up those concepts.

## The Similarity

For plain objects, they look the same.

```ts
type UserType = { name: string; age: number };

interface UserInterface {
  name: string;
  age: number;
}
```

## Core Differences

**1. Describe mechanism:** An interface mainly describes the shape of an object. But a type can describe anything, like unions, tuples and primitives.

```ts
type Status = "active" | "inactive";
type Name = string;
```

**2. Extending mechanism:** An interface uses `extends`, but a type uses `&`.

```ts
interface Admin extends UserInterface {
  role: string;
}

type AdminType = UserType & { role: string };
```

**3. Shape merging:** If we declare the same shape twice with `interface`, they will merge. But if we declare it twice with `type`, TypeScript will give an error.

```ts
interface Car { brand: string }
interface Car { year: number }
// Car has brand and year

type Bike = { brand: string };
type Bike = { year: number };
// Error: Duplicate identifier 'Bike'
```

## Use Case Difference

Use `interface` for objects and classes, especially in public APIs that others may extend. Use `type` when you need unions, tuples or primitive combinations that an interface cannot express.

## Conclusion

Both tools describe data, but they are not the same. Interfaces are open and extendable, while type aliases are flexible and can name any type. A simple rule is: use `interface` for objects, and use `type` when you need more powerful specifications.
