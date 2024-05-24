import Image from "next/image";
import { loadUser } from "@/lib/data";
import CardRepo from "../cardRepos/cardRepo";

export default async function Profile({
  username,
  repos,
}: {
  username: string;
  repos: string;
}) {
  const user = await loadUser(username);

  return (
    <div className="relative w-full flex flex-col items-center justify-center px-[75px] xl:px-[185px]">
      <Image
        src={user.avatar_url || "/no-user-image.png.webp"}
        alt={user.name || "avatar"}
        width={120}
        height={120}
        className="absolute -top-11 left-8 sm:left-[80px] xl:left-[185px] p-2 bg-20293A rounded-3xl object-cover"
      />
      <div
        className="flex sm:ml-40 lg:ml-32 xl:ml-0 flex-col gap-5 h-full justify-center lg:flex-row sm:mt-3 mt-24 text-base
      *:flex *:w-fit *:bg-111729 *:divide-x *:divide-4A5567 *:rounded-xl *:text-4A5567 *:py-4 *:items-center"
      >
        <div>
          <p className="px-5">Followers</p>
          <p className="px-5 text-CDD5E0">{user.followers}</p>
        </div>
        <div>
          <p className="px-5">Following</p>
          <p className="px-5 text-CDD5E0">{user.following}</p>
        </div>
        <div>
          <p className="px-5">Location</p>
          <p className="px-5 text-CDD5E0">{user.location}</p>
        </div>
      </div>
      <div className="w-full mt-7 text-CDD5E0">
        <h1 className="text-[2rem]">{user.name}</h1>
        <p className="text-base">{user.bio}</p>
      </div>
      <CardRepo user={user.login} repos={repos} />
    </div>
  );
}
