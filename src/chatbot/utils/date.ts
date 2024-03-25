class Language {
  private static current: Intl.LocalesArgument;

  static get language() {
    if (Language.current) {
      return Language.current;
    }
    return (Language.current = navigator.language);
  }
}

export class CustomDate {
  static getCurrentDateTime(
    options: Pick<Intl.DateTimeFormatOptions, "hour" | "minute" | "second">
  ): string {
    return new Date()
      .toLocaleDateString(Language.language, options)
      .split(",")[1];
  }
}
