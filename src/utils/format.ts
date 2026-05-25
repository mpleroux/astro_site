// Format a date as "YYYY Month D" (e.g., "2024 January 5")
export function formatDate(date: Date): string {
  const d = new Date(date);
  return `${d.getFullYear()} ${d.toLocaleDateString("en-US", { month: "long" })} ${d.getDate()}`;
}
