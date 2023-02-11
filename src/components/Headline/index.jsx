import Image from 'next/image'
import styles from 'src/components/Headline/Headline.module.css'

export function Headline(props) {
  return (
    <div className={styles.description}>
      <p>
        アイテムの数は&nbsp;
        {props.children} 個です。
      </p>
      <button onClick={props.handleReduce}>減らす</button>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  )
}
