// Format a date as "Month D, YYYY" (e.g., "January 5, 2024")
export function formatDate(date: Date): string {
  const d = new Date(date);
  return `${d.toLocaleDateString("en-US", { month: "long", timeZone: "UTC" })} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}
