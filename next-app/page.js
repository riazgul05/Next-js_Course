"use client"
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigat = (name) => {
    router.push(name)
  }
  return (
    <main >
      <h1>Basic Routing | Make New Page </h1>
      <br />
      <Link href="/login">Go To Login Page</Link>
      <br /><br />
      <Link href="/about">Go To About Page</Link>
      <br /><br />
      <button onClick={() => navigat("/login")}>Go to Login Page</button>
      <br /><br />
      <button onClick={() => navigat("/about")}>Go to About Page</button>
    </main>
  );
}