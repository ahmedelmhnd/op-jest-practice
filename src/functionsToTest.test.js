import { capitalize, reverse, calc } from "./functionsToTest";

test("capitalizes first letter", () => expect(capitalize("cat")).toBe("Cat"));

test("reverse a string", () => expect(reverse("catography")).toBe("yhpargotac"));

test("calc add", () => expect(calc.add(1, 3)).toBe(4));

test("calc sub", () => expect(calc.sub(1, 3)).toBe(-2));

test("calc multiply", () => expect(calc.multiply(1, 3)).toBe(3));

test("calc divide", () => expect(calc.divide(1, 3)).toBe(1/3));
