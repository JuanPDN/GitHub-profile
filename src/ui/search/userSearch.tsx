import loadUser from "@/lib/data";
import Image from "next/image";

export default async function UserSearch({query}:{query:string}) {
  const user = await loadUser(query);

  return (
    <div className="flex relative top-24 w-3/4 lg:w-2/4 xl:w-[38%] gap-3 p-2 bg-111729 text-CDD5E0 rounded-xl">
      <Image src={user.avatar_url || "/no-user-image.png.webp"} alt={user.name || "avatar"} height={120} width={120} className="rounded-2xl"/>
      <div className="flex flex-col gap-2 justify-center">
        <h2 className="font-semibold">{user.name}</h2>
        <p className="text-xs">{user.bio}</p>
      </div>
    </div>
  );
}
