// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StockData = () => {
//   const [stockData, setStockData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const API_KEY = ' FAH1QR5T1LNSTHO2'; // Replace with your Alpha Vantage API key
//   const SYMBOL = 'RELIANCE.BSE'; // Example symbol for Indian stock (BSE-listed Reliance)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${SYMBOL}&apikey=${API_KEY}`
//         );
//         const dailyData = response.data['Time Series (Daily)'];
//         setStockData(dailyData);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch stock data');
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h1>Stock Data for {SYMBOL}</h1>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Open</th>
//             <th>High</th>
//             <th>Low</th>
//             <th>Close</th>
//             <th>Volume</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.keys(stockData).map((date) => (
//             <tr key={date}>
//               <td>{date}</td>
//               <td>{stockData[date]['1. open']}</td>
//               <td>{stockData[date]['2. high']}</td>
//               <td>{stockData[date]['3. low']}</td>
//               <td>{stockData[date]['4. close']}</td>
//               <td>{stockData[date]['5. volume']}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StockData;




import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockInfo = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Your API key (hardcoded here)
  const API_KEY = 'c8febc978fmsh0d552c5d9237addp1a79a2jsn12f75db91341';
  const STOCK_SYMBOL = 'AAPL'; // You can replace this with any stock symbol

  useEffect(() => {
    const fetchStockData = async () => {
      const url = `https://financialmodelingprep.com/api/v3/quote/${STOCK_SYMBOL}?apikey=${API_KEY}`;

      try {
        const response = await axios.get(url);
        setStockData(response.data[0]); // Assuming response contains an array
        setLoading(false);
      } catch (err) {
        setError('Error fetching stock data');
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Stock Information</h2>
      {stockData ? (
        <div>
          <p><strong>Symbol:</strong> {stockData.symbol}</p>
          <p><strong>Price:</strong> {stockData.price}</p>
          <p><strong>Change:</strong> {stockData.change}</p>
          <p><strong>Percentage Change:</strong> {stockData.changesPercentage}</p>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default StockInfo;
