"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ViewAll() {
  const pathname = usePathname();
  const searhParams = useSearchParams();
  const { replace } = useRouter();

  const handleAllRepos = () => {
    const params = new URLSearchParams(searhParams);
    if (params.get("repos")) {
      params.delete("repos");
    } else {
      params.set("repos", "all");
    }
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="w-full flex justify-center">
      <input
        type="button"
        value={
          !searhParams.get("repos")
            ? "View all repositories"
            : "Hide repositories"
        }
        className="text-CDD5E0 mb-16 ite cursor-pointer"
        onClick={handleAllRepos}
      />
    </div>
  );
}
