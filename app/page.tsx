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
      <GithubUserForm />
      <GithubUserCard user={searchParams?.user} />
    </main>
  );
}
