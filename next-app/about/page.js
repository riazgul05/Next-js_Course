"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";
const About = () => {
    const router = useRouter();
    return (
        <div>
            <h1>About Page</h1>
            <br />
            <button onClick={() => router.push("/")}>Go to Home Page</button>
            <br /><br />
            <Link href="/about//aboutcollege">Go To About Page College</Link>
            <br /><br />
            <Link href="/about//aboutstudent">Go To About Page Student</Link>

        </div>
    )
}
export default About;