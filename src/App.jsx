import { useState } from 'react';
import Cta from './components/cta/Cta';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import { shortenURL } from './services/urlShortner';

function App() {
  const urlRegex =
    /((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/gi;
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const readyURLs = [];
  const handleInputChange = (ev) => {
    setInput(ev.target.value);
  };

  const onFormSubmit = (ev) => {
    ev.preventDefault();
    if (input === '') {
      setError('Please add a link');
    } else if (!urlRegex.test(input)) {
      setError('please enter valid url');
    } else {
      console.log(input);
      setError('');
      setInput('');
      shortenURL(input);
    }
  };

  const localLength = localStorage.length;
  if (localLength > 0) {
    for (let i = 0; i < localLength; i++) {
      const link = localStorage.getItem(i);
      readyURLs.push({
        shortUrl: 'https://rel.ink/' + JSON.parse(link).short,
        original: JSON.parse(link).originalURL,
      });
    }
  }
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features
          readyURLs={readyURLs}
          inputValue={input}
          error={error}
          onFormSubmit={onFormSubmit}
          handleInputChange={handleInputChange}
        />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default App;
