async function getUser(id) {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data.result;
}


export default async function Page({ params }) {

    const user = await getUser(params.userid)

    return (
        <div>
            <h1>User Details</h1>
            <h4>Nmae : {user.name}</h4>
            <h4>Age : {user.age}</h4>
            <h4>Email : {user.email}</h4>
            <h4>Id: {user.id}</h4>

        </div>
    )
}