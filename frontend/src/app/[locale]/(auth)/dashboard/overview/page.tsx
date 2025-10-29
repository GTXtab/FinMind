import { Suspense } from "react";
import { ArticleTemplate } from "@/templates/article-template";
import { CardSwiper } from "./components/card-swiper";
import { Transaction } from "./components/transaction";
import { BalanceHistoryData, transactions } from "@/utils/Data";
import { WeeklyActivity } from "./components/graphics-activity";
import { ExpenseStatistics } from "./components/expense-diagram";
import { QuickTransfer } from "./components/quick-transfer";
import { BalanceHistory } from "./components/balance-history";
import { ComponentLoader } from "@/templates/loader";

const sections = [
  {
    title: "Recent Transactions",
    content: (
      <div className="max-h-64 overflow-y-auto pr-2">
        {transactions.slice(0, 5).map((t) => (
          <Transaction key={t.id} {...t} />
        ))}
      </div>
    ),
    span: 2,
    className: "p-[12px]",
  },
  { title: "Weekly Activity", content: <WeeklyActivity />, span: 4 },
  { title: "Expense Statistics", content: <ExpenseStatistics />, span: 2 },
  { title: "Quick Transfer", content: <QuickTransfer />, span: 3 },
  {
    title: "Balance History",
    content: <BalanceHistory chartData={BalanceHistoryData} />,
    span: 3,
  },
];

export default async function OverView() {
  return (
    <Suspense fallback={<ComponentLoader />}>
      <main
        className="
          grid min-[1024px]:gap-6 p-6 
          grid-cols-1 
          lg:grid-cols-6 lg:auto-rows-min
       "
      >
        <article className="mb-8 min-[1024px]:px-0 rounded-xl lg:col-span-4">
          <h2 className="mb-3 text-2xl font-bold">My Cards</h2>
          <CardSwiper />
        </article>

        {sections.map(({ title, content, span, className }) => (
          <ArticleTemplate
            key={title}
            title={title}
            className={`lg:col-span-${span} ${className || ""}`}
          >
            {content}
          </ArticleTemplate>
        ))}
      </main>
    </Suspense>
  );
}
