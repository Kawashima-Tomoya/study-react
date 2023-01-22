import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    setCount((count) => count + 1 );
    setCount((count) => count + 1 );
    // setFoo(function(count) {
    //   return (count + 1);
    // });
  };

  useEffect (()=> {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  },[]);

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
    </>
  )
}