// Function to generate a random short code
let index = 0;
function generateShortCode() {
  const characters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let shortCode = '';
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    shortCode += characters.charAt(randomIndex);
  }
  return shortCode;
}

// Function to shorten a URL and store it in local storage
export function shortenURL(originalURL) {
  let shortCode = generateShortCode();
  localStorage.setItem(
    `${index}`,
    JSON.stringify({
      short: shortCode,
      originalURL: originalURL,
    })
  );
  index++;
}

// Function to expand a short URL from local storage
function expandURL(shortCode) {
  const expandedURL = localStorage.getItem(shortCode);
  return expandedURL || null; // Return null if short code not found in local storage
}
