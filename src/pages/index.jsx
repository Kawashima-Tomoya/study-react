import Head from 'next/head'
import styles from "src/styles/Home.module.css"
import { useCallback, useEffect, useState } from 'react'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'

export default function Home() {
  const [count, setCount] = useState(1);
  // const [text,, setText] = useState("");

  const handleClick = useCallback(() => {
    if(count < 10) {
      setCount((count) => count + 1 );
      // setFoo(function(count) {
      //   return (count + 1);
      // });
    }
  },[count]);

  // const handleChange = (e) => {
  //   if (text.length >= 5) {
  //     return;
  //   }
  //   setText(e.target.value);
  // };

  useEffect (()=> {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  },[count]);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      {/* <input type="text" value={text} 
        onChange={handleChange} /> */}
      <Main page="index" />
    </>
  )
}