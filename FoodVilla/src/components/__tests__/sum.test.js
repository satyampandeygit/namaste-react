import { sum } from "../sum";

test("Sum should be 5", () => {
    expect(sum(2,3)).toBe(5);
})

test("Sum should be 7", () => {
    expect(sum(4,3)).toBe(7);
})