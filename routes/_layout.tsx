import { PageProps } from "$fresh/server.ts";
import Footer from "../components/ui/nav/footer.tsx";
import Header from "../components/ui/nav/header.tsx";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  );
}
