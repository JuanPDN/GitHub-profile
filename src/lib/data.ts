import { User } from "./interfaces";

export async function loadUser(user?: string): Promise<User> {
    user = user?.replaceAll(" ", "")
    user?.trim()
    const data = await
        fetch(`https://api.github.com/users/${user || "github"}`)
            .then((data) => data.json())
    return data;
}

export async function loadRepos(user?:string) {
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    user = user?.replaceAll(" ", "")
    user?.trim()
    const data = await
        fetch(`https://api.github.com/users/${user || "github"}/repos`)
        .then((data)=> data.json())
    return data
}