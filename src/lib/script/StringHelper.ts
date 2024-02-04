export class StringHelper {
  static Ellipsis(input: string, maxLength = 80): string {
    return `${input.slice(0, maxLength)}...`;
  }
  static UrlCombine(...input: string[]): string {
    return `/${input.join("/")}`.replaceAll(/\/{2,}/g, "/").replace(/\/$/g, "");
  }
}
