import { User } from "./interfaces";

export default async function loadUser(user?: string): Promise<User> {
    user = user?.replaceAll(" ","")
    const data = await
        fetch(`https://api.github.com/users/${user || "github"}`)
            .then((data) => data.json())
    return data;

}