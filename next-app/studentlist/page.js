import Link from "next/link";

export default function StudentList() {
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href="/studentlist/Anil">Anil</Link>
                </li>
                <li>
                    <Link href="/studentlist/Riaz">Riaz</Link>
                </li>
                <li>
                    <Link href="/studentlist/Peter">Peter</Link>
                </li>
                <li>
                    <Link href="/studentlist/Ali">Ali</Link>
                </li>

            </ul>
        </div>
    )
}