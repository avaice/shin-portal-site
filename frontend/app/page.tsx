import Link from "next/link"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Topページ</h1>
      <nav>
        <p>Routes</p>
        <ul>
          <li>
            <Link href="login">Login</Link>
          </li>
          <li>
            <Link href="class">授業管理</Link>
          </li>
          <li>
            <Link href="courseRegister">履修登録</Link>
          </li>
          <li>
            <Link href="timetable">時間割</Link>
          </li>
          <li>
            <Link href="board">掲示板</Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
