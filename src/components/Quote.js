import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [data, setData] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const quote = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers',
          {
            method: 'GET',
            headers: {
              'X-Api-Key': 'd12DxoYT5lp6hsXZtNLNoA==jugmWIPVRJFM8Iwd',
            },
          });
        const quoteObj = await quote.json();
        setName(quoteObj[0].author);
        setData(quoteObj[0].quote);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchQuote();
  }, [setData, setError]);

  return (
    <div className="quoteContainer">
      { data ? <p className="quote">{data}</p> : <p>Loading...</p> }
      <p className="Aname">{name}</p>
      { error && <p>{error}</p> }
    </div>
  );
};

export default Quotes;
