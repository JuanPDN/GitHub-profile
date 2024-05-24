"use client";

import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="relative flex flex-col items-center bg-hero bg-cover bg-center h-60 w-full">
      <div className="relative flex flex-col gap-2 top-8 w-3/4 lg:w-[47%] xl:w-[40%]">
        <label htmlFor="search" className="absolute left-4 top-4">
          <Image
            src={"/Search.svg"}
            alt={"search icon"}
            width={24}
            height={24}
          />
        </label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="username"
          className="outline-none placeholder:text-4A5567 bg-20293A p-4 pl-14 text-CDD5E0 rounded-xl ring-2 ring-transparent focus:ring-3662E3"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("q")?.toString()}
        />
      </div>
    </div>
  );
}
