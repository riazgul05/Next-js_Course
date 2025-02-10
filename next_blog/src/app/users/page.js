async function userList() {
    let data = await fetch("https://dummyjson.com/users")
    data = await data.json()
    return data.users
}
export default async function () {
    let users = await userList();
    console.log(users);
    return (
        <div>
            <h1>Users Name List</h1>

            {
                users.map((item) => (
                    <div>
                        <h2>User Name : {item.firstName}</h2>
                    </div>
                ))
            }

        </div>
    )
}