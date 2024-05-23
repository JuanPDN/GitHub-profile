import Profile from "@/ui/profile/profile";
import SearchUserSkeleton from "@/ui/search/loading";
import Search from "@/ui/search/search";
import UserSearch from "@/ui/search/userSearch";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    q?: string;
  };
}) {
  const query = searchParams?.q || "";

  return (
    <main>
      <div className="bg-20293A w-full h-screen overflow-auto">
        <div className="flex flex-col items-center">
          <Search />

          {query && (
            <Suspense fallback={<SearchUserSkeleton />}>
              <UserSearch query={query} />
            </Suspense>
          )}

          <Profile query={query} />
          <input type="button" value="View all repositories" className="text-CDD5E0 mb-14 cursor-pointer"/>
        </div>
      </div>
    </main>
  );
}
