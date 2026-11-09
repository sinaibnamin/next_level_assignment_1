# Type Narrowing in TypeScript

## Introduction

Sometimes a variable can be more than one type. Until we check it, TypeScript only lets us use the operations that are valid for every type in the union. We can solve this problem with type narrowing, which adds type checks so TypeScript knows the exact type inside each block. This way we can avoid using `any`.

## Narrowing with `typeof`

Here `value` may be a string or a number, so we add a type check. This works best for primitives like string, number and boolean.

```ts
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
```

Inside the `if` block, TypeScript knows `value` is a string, so `toUpperCase()` is allowed. After the block, only number is left.

## Narrowing with `instanceof`

`instanceof` checks whether an object was created from a particular class.

```ts
function formatDate(input: Date | string): string {
  if (input instanceof Date) {
    return input.toDateString();
  }
  return input;
}
```

Inside the `if` block, `input` is a `Date`, so we can call `toDateString()`. Outside it, `input` can only be a string.

## Narrowing with the `in` Operator

The `in` operator checks whether a property exists on an object, which is useful for plain objects.

```ts
type Student = { name: string; studentId: number };
type Teacher = { name: string; subject: string };

function getInfo(person: Student | Teacher): string {
  if ("subject" in person) {
    return `${person.name} teaches ${person.subject}`;
  }
  return `${person.name}'s ID is ${person.studentId}`;
}
```

If `subject` exists, TypeScript treats `person` as a `Teacher`. Otherwise, it must be a `Student`.

## Conclusion

Type narrowing is very helpful to avoid `any`. Use `typeof` for primitives, `instanceof` for classes, and `in` for checking object properties.