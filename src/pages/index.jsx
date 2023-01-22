import Head from 'next/head'
import { useCallback, useEffect } from 'react';
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'

export default function Home() {

  useEffect (()=> {
    console.log("mount");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("unmount");
      document.body.style.backgroundColor = "";
    };
  },[]);

  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  },[]);
  
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Main page="index" />
    </>
  )
}