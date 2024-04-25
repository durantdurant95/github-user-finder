import GithubUserCard from "@/components/github-user-card";
import GithubUserForm from "@/components/github-user-form";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    user?: string;
  };
}) {
  return (
    <main className="flex gap-8 flex-col h-screen items-center justify-center">
      <h1 className="text-4xl font-semibold">Buscador de usuarios de Github</h1>
      <GithubUserForm />
      <GithubUserCard user={searchParams?.user} />
    </main>
  );
}
