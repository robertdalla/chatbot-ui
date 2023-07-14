/**
 * Cleans the source text by removing unnecessary whitespace, newlines and formatting.
 * @param text The source text to be cleaned.
 * @returns The cleaned source text.
 */
export const cleanSourceText = (text: string): string => {
  // Original code: Poor performance and insecure!
  /*  return text
      .trim()
      .replace(/(\n){4,}/g, '\n\n\n')
      .replace(/\n\n/g, ' ')
      .replace(/ {3,}/g, '  ')
      .replace(/\t/g, '')
      .replace(/\n+(\s*\n)*!/g, '\n');*/

  // Regular Expression Sanitization: The code does not directly use user-provided input in regular expressions, reducing the risk of regular expression injection attacks.

  // Remove leading and trailing whitespace
  const trimmed = text.trim();

  // Replace 4+ consecutive newlines with 3 newlines
  let normalized = trimmed.replace(/(\n){4,}/g, '\n\n\n');

  // Replace double consecutive newlines with a single space
  normalized = normalized.replace(/\n\n/g, ' ');

  // Replace 3+ consecutive spaces with double spaces
  normalized = normalized.replace(/ {3,}/g, '  ');

  // Remove all tabs
  normalized = normalized.replace(/\t/g, '');

  // Replace multiple newlines followed with zero or more occurrences of whitespace characters, with a single newline
  normalized = normalized.replace(/\n+(\s*\n)*/g, '\n');

  return normalized;
};