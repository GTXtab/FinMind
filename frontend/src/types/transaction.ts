export type TransactionType = "income" | "expense";

export interface TransactionProps {
  id: string;
  title: string;
  date: string;
  amount: number;
  type: TransactionType;
  icon?: string; // "wallet" | "paypal" | "dollar" | undefined
}
