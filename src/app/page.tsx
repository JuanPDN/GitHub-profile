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
    <main className="bg-20293A h-screen flex flex-col items-center">
      <Search />
      {query && (
        <Suspense fallback={<SearchUserSkeleton />}>
          <UserSearch query={query} />
        </Suspense>
      )}
    </main>
  );
}

//TODO: pantalla de 1024 y 640 margen de 75px pantallas mas grandes margen de 150px
