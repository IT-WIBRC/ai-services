class Capitalize {
  private splitText: string[] = [];
  private constructor(protected text: string, protected separator = " ") {}

  static initialize(text: string, separator = " "): Capitalize {
    return new Capitalize(text, separator);
  }

  private get isWord(): boolean {
    this.splitText = this.text.split(this.separator);
    return this.splitText.length === 1;
  }

  private capitalizeWord(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  get value(): string {
    if (this.isWord) {
      return this.capitalizeWord(this.text);
    }
    return this.splitText
      .map((word) => this.capitalizeWord(word))
      .join(this.separator);
  }
}

export class StringUtils {
  static capitalize(text: string, separator = " "): string {
    return Capitalize.initialize(text, separator).value;
  }
}
