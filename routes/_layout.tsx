import { PageProps } from "$fresh/server.ts";
import Header from "../components/ui/nav/header.tsx";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <>
      <Header />
      <Component />
    </>
  );
}
