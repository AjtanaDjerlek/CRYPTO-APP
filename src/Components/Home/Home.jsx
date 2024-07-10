// ExampleComponent.js

import React, { useContext } from 'react';
import { MyDataContext } from '../../Context/Provider';

const Home = () => {
  const { data, loading, error } = useContext(MyDataContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }


  return (
    <div>
        <h2>Data</h2>
        <ul>
        {/* Map over each coin and display its name */}
        {data.data.coins.map((coin, index) => (
          <li key={index}>{coin.name}</li>
        ))}
      </ul>
      {/* Lista za pristup data....
      <pre>{JSON.stringify(data, null, 2)}</pre>  */}

    </div>
  );

};

export default Home;
