import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [data, setData] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoad] = useState(true);
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
        const data = await quote.json();
        setLoad(false);
        setName(data[0].author);
        setData(data[0].quote);
      } catch (error) {
        setError(error.message);
        setLoad(false);
      }
    };
    fetchQuote();
  }, [setData, setError]);

  if (loading) {
    return (
      <div className="quoteContainer load">
        <p className="loading">Loading...</p>
      </div>
    );
  }
  return (
    <div className="quoteContainer">
      <p className="quote">{data}</p>
      <p className="Aname">{name}</p>
      { error && <p>{error}</p> }
    </div>
  );
};

export default Quotes;
