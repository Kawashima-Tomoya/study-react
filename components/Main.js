import styles from './Main.module.css'
import { Links } from '../components/Links'
import { Icons } from '../components/Icons'
import { Headline } from '../components/Headline'

export function Main(props) {
  return (
      <main className={styles.main}>
        <Headline page={props.page}>
          <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        <Icons />
        <Links />
      </main>
  )
}
