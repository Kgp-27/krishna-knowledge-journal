export function getReadingTime(text: string): string {

  const words = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const minutes = Math.max(
    1,
    Math.ceil(words / 200)
  );

  return `${minutes} min read`;

}