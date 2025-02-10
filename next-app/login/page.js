"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Login = () => {
    const router = useRouter();
    const navigat = (page) => {
        router.push("/login/" + page)
    }
    return (
        <>
            <h1 className="heading">Login Page</h1>
            <br />
            <Link href="/">Go to Home Page</Link>
            <br /><br />
            <button onClick={() => navigat("loginstudent")}>Go to Student Page</button>
            <br /><br />
            <button onClick={() => navigat("loginteacher")} >Go to Teacher Page</button>
        </>
    )
}
export default Login