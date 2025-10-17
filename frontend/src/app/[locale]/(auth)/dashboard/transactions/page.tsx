import { ArticleTemplate } from "@/templates/article-template";

export default async function Transactions() {
  return (
    <section>
      <h2 className="mb-3 text-2xl font-bold">Transactions Page</h2>
      <ArticleTemplate title="Recent Transactions">
        <p>Тут можна вставляти будь-які компоненти або дані</p>
      </ArticleTemplate>
    </section>
  );
}
