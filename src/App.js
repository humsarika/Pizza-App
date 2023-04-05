import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data.map(({ img_url, name, description, rating, price, isVeg }) => {
        return (
          <div key={name}>
            <img src={img_url} alt={name} />
            <h2>{name}</h2>
            <p>{description}</p>
            <div>{rating} stars</div>
            <div>{price}</div>
            <div>{isVeg === true ? "🥦" : "🍗"}</div>
          </div>
        );
      })}
    </>
  );
}

export default App;
