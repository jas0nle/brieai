import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import React, { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
      ).then(
        data => {
          setData(data)
          console.log(data)
        }
      )
    }, [])

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
