export class Score {
  private score: number = 0;

  constructor(private limit: number) {}

  getScore(): number {
    return this.score;
  }

  increment(): void {
    const nextScore = this.score + 1;

    if (nextScore > this.limit) {
      throw new Error("Limit reached!");
    }

    this.score = nextScore;
  }
}
