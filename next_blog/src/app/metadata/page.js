export default function Page() {
    return (
        <div>
            <h1>
                Metadata Page
            </h1>
        </div>
    )
}

export function generateMetadata() {
    return {
        title: "metadata Page",
        discription: 'metadata  discription'
    }
}