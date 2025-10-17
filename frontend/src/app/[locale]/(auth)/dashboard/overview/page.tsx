import { ArticleTemplate } from "@/templates/article-template";
import { CardSwiper } from "./components/card-swiper";
import { Transaction } from "./components/transaction";
import { BalanceHistoryData, transactions } from "@/utils/Data";
import { WeeklyActivity } from "./components/graphics-activity";
import { ExpenseStatistics } from "./components/expense-diagram";
import { QuickTransfer } from "./components/quick-transfer";
import { BalanceHistory } from "./components/balance-history";

const sections = [
  {
    title: "Recent Transactions",
    content: (
      <>
        {transactions.map((t) => (
          <Transaction key={t.id} {...t} />
        ))}
      </>
    ),
  },
  { title: "Weekly Activity", content: <WeeklyActivity /> },
  { title: "Expense Statistics", content: <ExpenseStatistics /> },
  { title: "Quick Transfer", content: <QuickTransfer /> },
  { title: "Balance History", content: <BalanceHistory chartData={BalanceHistoryData} /> },
];

export default async function OverView() {
  return (
    <section>
      <article>
        <h2 className="mb-3 text-2xl font-bold">My Cards</h2>
        <CardSwiper />
      </article>
      {sections.map(({ title, content }) => (
        <ArticleTemplate key={title} title={title}>
          {content}
        </ArticleTemplate>
      ))}
    </section>
  );
}
