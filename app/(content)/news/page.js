// this is using next js fetching in server side
// import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/NewsList";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <main>
      <h1>News page</h1>

      <NewsList news={news} />
    </main>
  );
}
