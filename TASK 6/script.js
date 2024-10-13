const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Don't wait. The time will never be just right.", author: "Napoleon Hill" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "In the end, we only regret the chances we didn’t take.", author: "Lewis Carroll" }
  ];
  
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const quoteBtn = document.getElementById('quote-btn');
  const saveBtn = document.getElementById('save-btn');
  const copyBtn = document.getElementById('copy-btn');
  
  let favorites = [];
  
  // Generate Random Quote
  quoteBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `" ${randomQuote.text}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
  });
  
  // Save to Local Storage
  saveBtn.addEventListener('click', () => {
    const quote = {
      text: quoteText.textContent,
      author: quoteAuthor.textContent
    };
    favorites.push(quote);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Quote saved to favorites!');
  });
  
  // Copy Quote to Clipboard
  copyBtn.addEventListener('click', () => {
    const quote = `"${quoteText.textContent}" ${quoteAuthor.textContent}`;
    navigator.clipboard.writeText(quote);
    alert('Quote copied to clipboard!');
  });
  