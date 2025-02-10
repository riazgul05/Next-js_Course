import Link from "next/link";

export default function Home() {
  console.log(process.env.NODE_ENV);
  return (
    <div>
      {
        process.env.NODE_ENV == "development" ?
          <h1>You Are in Development Mode</h1>
          :
          <h1>You Are Production Mode</h1>
      }
      <h1>Enviroment Variables In Next JS</h1>
    </div>
  );
}
