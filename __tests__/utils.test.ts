import { sum } from "@/lib/sum"

test("sum adds numbers", () => {
  expect(sum(2, 3)).toBe(5)
})
