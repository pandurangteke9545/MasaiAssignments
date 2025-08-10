// import React, { useEffect, useState } from 'react'

// function Quotes() {

//     const [quotes , setQuates]  = useState([])
//  const apikey = 'qY0YOQiPSh2IY5CLrZV2gg==kLaxOHiS7auJ1qb2'

// useEffect(() => {
//     const fetchQuotes = async () => {
//       try {
//         const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
//           headers: {
//             "X-Api-Key": apikey,
//           },
//         });

//         const data = await res.json();
//         setQuates(data)
//         console.log(data); // do something with the data
//       } catch (error) {
//         console.error("Error fetching quotes:", error);
//       }
//     };

//     fetchQuotes();
//   }, [quotes]);

//   return (
//     <div>
//       <div>
//         <h1> {quotes[0].quote} </h1>
//         <p> Author : - {quotes[0].author}</p>
       
//       </div>
//     </div>
//   )
// }

// export default Quotes


import React, { useState, useEffect } from "react";

export default function Quotes() {
   
  const [quote, setQuote] = useState({ content: "", author: "" });
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
         const apikey = 'qY0YOQiPSh2IY5CLrZV2gg==kLaxOHiS7auJ1qb2'
       const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
          headers: {
            "X-Api-Key": apikey,
          },
        });
        const data = await res.json()
        console.log(data)
      setQuote({ content: data[0].quote, author: data[0].author });
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on mount + every 30 seconds
  useEffect(() => {
    fetchQuote(); 
    const interval = setInterval(fetchQuote, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f0f0",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Daily Quote Viewer</h1>

      {/* Loading Spinner */}
      {loading ? (
        <div
          style={{
            border: "4px solid #ccc",
            borderTop: "4px solid #333",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            animation: "spin 1s linear infinite",
          }}
        />
      ) : (
        <div
          style={{
            background: "#fff",
            padding: "20px",
            maxWidth: "500px",
            textAlign: "center",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            transition: "opacity 0.5s ease",
          }}
        >
          <p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
            "{quote.content}"
          </p>
          <p style={{ fontWeight: "bold", marginTop: "10px" }}>
            — {quote.author}
          </p>
        </div>
      )}

      {/* Button to fetch manually */}
      <button
        onClick={fetchQuote}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#333",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Get New Quote
      </button>

      {/* CSS for spinner */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
