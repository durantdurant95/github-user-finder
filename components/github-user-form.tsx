"use client";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function GithubUserForm() {
  return (
    <form className="flex gap-4" action={"/"}>
      <Input
        onChange={() => console.log("input")}
        placeholder="Nombre de usuario"
        name="user"
      />
      <Button
        type="submit"
        onClick={() => {
          toast("Buscando usuario...");
        }}
      >
        Buscar
      </Button>
    </form>
  );
}
