import { loadUser } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";



export default async function UserSearch({ query }: { query: string }) {
  const { avatar_url, name, bio, login } = await loadUser(query);

  
  

  return (
    <Link className="flex absolute top-24 w-3/4 lg:w-[47%] xl:w-[41%] gap-3 p-2 bg-111729 text-CDD5E0 rounded-xl cursor-pointer"
    href={`/?username=${login}`}
    >
      <Image
        src={avatar_url || "/no-user-image.png.webp"}
        alt={name || "avatar"}
        height={80}
        width={80}
        className="rounded-2xl"
      />
      <div className="flex flex-col gap-2 justify-center">
        <h2 className="font-semibold">{name}</h2>
        <p className="text-xs">{bio}</p>
      </div>
    </Link>
  );
}
