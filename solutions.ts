function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  }
  return value * multiplier;
}

function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }
  if (typeof input === "number") {
    return input * 10;
  }
  return input ? "Active" : "Inactive";
}

function formatCoordinate(
  coordinate: readonly [number, number, string]
): string {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const combined: T[] = [];
  for (const array of arrays) {
    combined.push(...array);
  }
  return combined;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(
  courses: readonly Course[],
  minStudents: number
): Course[] {
  const popularCourses: Course[] = [];

  for (const course of courses) {
    if (course.isPublished && course.students >= minStudents) {
      popularCourses.push(course);
    }
  }

  return popularCourses;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item: T): T[K] => item[key]);
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>(
    (
      resolve: (value: string) => void,
      reject: (reason: Error) => void
    ): void => {
      if (age < 18) {
        reject(new Error("Access Denied: Must be 18 or older"));
        return;
      }
      setTimeout((): void => {
        resolve("Access Granted");
      }, 1000);
    }
  );
}
