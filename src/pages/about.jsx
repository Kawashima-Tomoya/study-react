import Head from 'next/head'
import { Header } from 'src/components/Header'
import { Main } from 'src/components/Main'

export default function About(props) {
  const {doubleCount ,isShow, handleClick, handleDisplay, text, array, handleChange, handleAdd} = props;

  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {isShow ? <h2> {doubleCount} </h2> : null}
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
      <Main page="about" />
    </>
  )
}