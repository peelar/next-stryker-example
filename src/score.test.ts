import { expect, describe, it } from "vitest";
import { Score } from "./score";

describe("Score", () => {
  it("should start at 0", () => {
    const score = new Score(10);

    expect(score.getScore()).toBe(0);
  });

  it("should increment", () => {
    const score = new Score(10);

    score.increment();

    expect(score.getScore()).toBe(1);
  });

  //   * With this test commented out, you have some mutants to kill.
  //   it("should throw when limit is reached", () => {
  //     const score = new Score(1);

  //     score.increment();

  //     expect(() => score.increment()).toThrow("Limit reached!");
  //   });
});
