'use client';

// this is using client side (react way), this file is not used, just for reference

// import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/NewsList";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);

      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("An error occurred while fetching the news");
        setIsLoading(false);
      }

      const news = await response.json();
      setIsLoading(false);
      setNews(news);
    }
    fetchNews();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;

  if (news) {
    newsContent = <NewsList news={news} />;
  }

  return (
    <main>
      <h1>News page</h1>

      {newsContent}
    </main>
  );
}
