import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function GithubUserForm() {
  return (
    <form className="flex gap-4" action={"/"}>
      <Input placeholder="Nombre de usuario" name="user" />
      <Button type="submit">Buscar</Button>
    </form>
  );
}
