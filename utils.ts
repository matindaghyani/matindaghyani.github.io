/**
 * Email obfuscation utility to protect against spam bots
 * This encodes the email address to make it harder for scrapers to find
 */

/**
 * Decodes an obfuscated email address
 * Simple ROT13-like encoding for basic protection
 */
export function decodeEmail(encoded: string): string {
  // Simple character shift encoding (ROT13 variant)
  return encoded
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0);
      // Decode letters (a-z, A-Z)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + 13) % 26) + 65);
      }
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + 13) % 26) + 97);
      }
      // Keep numbers and special characters as-is
      return char;
    })
    .join('');
}

/**
 * Encodes an email address for storage
 */
export function encodeEmail(email: string): string {
  // ROT13 is symmetric, so encoding and decoding are the same
  return decodeEmail(email);
}
