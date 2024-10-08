import Head from 'next/head'
import styles from "src/styles/Home.module.css"
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'

export default function Home({count, isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd}) {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShow ? <h2> {count} </h2> : null}
      <button onClick= {handleClick} >ボタン</button>
      <button onClick= {handleDisplay} > {isShow ? "非表示" : '表示'} </button>

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map(item => {
          return (
            <li key={item}> {item} </li>
          )
        })}
      </ul>
      <Main page="index" />
    </>
  )
};