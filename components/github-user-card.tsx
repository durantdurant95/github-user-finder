import { fetchGithubUser, fetchGithubUserRepos } from "@/utils/services";
import { JSX, SVGProps } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default async function GithubUserCard({
  user,
}: {
  user: string | undefined;
}) {
  const userData: GithubUser | undefined = user
    ? await fetchGithubUser(user)
    : undefined;

  const userRepos: GithubRepo[] = user
    ? await fetchGithubUserRepos(user)
    : undefined;

  const getInitials = (name: string | undefined) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return userData ? (
    <Card className="w-full max-w-md">
      <CardHeader className="flex items-center gap-4">
        <Avatar>
          <AvatarImage alt="@shadcn" src={userData?.avatar_url} />
          <AvatarFallback>{getInitials(userData?.name)}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <CardTitle className="text-center">{userData?.name}</CardTitle>
          <CardDescription>{userData?.bio}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <UsersIcon className="h-4 w-4" />
            <span>{userData?.followers} seguidores</span>
          </div>
          <div className="flex items-center gap-2">
            <GitForkIcon className="h-4 w-4" />
            <span>{userData?.public_repos} repositorios públicos</span>
          </div>
        </div>
        <div className="grid gap-3">
          <p className="text-lg text-center font-semibold">
            Repositorios recientes
          </p>
          {userRepos?.map((repo: GithubRepo) => (
            <div key={repo.id} className="space-y-1">
              <p className="font-medium">{repo.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {repo.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ) : (
    <Card className="w-full max-w-sm mx-auto p-6 flex flex-col items-center justify-center text-center">
      <FileSearchIcon className="h-12 w-12 text-gray-400 mb-4" />
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
          No se encontraron datos
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Lo sentimos, no pudimos encontrar ningún usuario que conicida con el
          parámetro de búsqueda, intenta introducir correctamente el nombre de
          usuario que intentas encontrar.
        </p>
      </div>
    </Card>
  );
}

function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function GitForkIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
      <path d="M12 12v3" />
    </svg>
  );
}

function FileSearchIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="m9 18-1.5-1.5" />
    </svg>
  );
}
