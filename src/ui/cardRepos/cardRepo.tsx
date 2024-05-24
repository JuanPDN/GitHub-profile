import Image from "next/image";
import { loadRepos } from "@/lib/data";
import Link from "next/link";

export default async function CardRepo({
  user,
  repos,
}: {
  user: string;
  repos: string;
}) {
  const data: any[] = await loadRepos(user);

  let firstRepos = repos ? data : data.length > 4 ? data.slice(0, 4) : data;

  return (
    <div className="mt-[34px] mb-[46px] grid grid-cols-1 w-full lg:grid-cols-2 gap-x-8 gap-y-[34px]">
      {firstRepos.map((element, index) => (
        <Link
          key={index}
          href={element.html_url}
          target="_blank"
          className="bg-gradient-to-r from-111729 to-1D1B48 p-5 w-full rounded-xl text-CDD5E0 flex flex-col gap-3"
        >
          <h1 className="text-xl font-medium">{element.name}</h1>
          <p className="text-sm font-light">{element.description}</p>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-3 *:flex *:gap-1">
            {element.license && (
              <div>
                <Image
                  src={"/Chield_alt.svg"}
                  width={24}
                  height={24}
                  alt="Chield_alt"
                  className="size-6"
                />
                <span>{element.license.name}</span>
              </div>
            )}
            <div>
              <Image
                src={"/Nesting.svg"}
                width={24}
                height={24}
                alt="Nesting"
                className="size-6"
              />
              <span>{element.forks}</span>
            </div>
            <div>
              <Image
                src={"/Star.svg"}
                width={24}
                height={24}
                alt="Star"
                className="size-6"
              />
              <span>{element.watchers}</span>
            </div>
            <div className="pl-3 text-xs">
              <p>
                updated <span>{element.updated_at.split("T")[0]}</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
