import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/NewsList";

export default function NewsPage() {
  return (
    <main>
      <h1>News page</h1>

      <NewsList news={DUMMY_NEWS} />
    </main>
  );
}
