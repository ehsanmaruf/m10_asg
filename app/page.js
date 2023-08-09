import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js 13!</h1>
      <p>This is the main/root page!</p>
      <span>Click <Link href="/about">here</Link> to visit about page</span>
    </div>
  )
}
