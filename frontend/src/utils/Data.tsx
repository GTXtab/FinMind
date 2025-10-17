import { TransactionProps } from "@/types/transaction";

export const transactions: TransactionProps[] = [
  {
    id: "1",
    title: "Deposit from my",
    date: "28 January 2021",
    amount: 850,
    type: "expense",
    icon: "wallet",
  },
  {
    id: "2",
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    type: "income",
    icon: "paypal",
  },
  {
    id: "3",
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    type: "income",
    icon: "dollar",
  },
];

export const WeeklyActivityData = [
  { name: "Sat", deposit: 220, withdraw: 480 },
  { name: "Sun", deposit: 100, withdraw: 300 },
  { name: "Mon", deposit: 280, withdraw: 350 },
  { name: "Tue", deposit: 310, withdraw: 470 },
  { name: "Wed", deposit: 200, withdraw: 140 },
  { name: "Thu", deposit: 230, withdraw: 400 },
  { name: "Fri", deposit: 310, withdraw: 390 },
];

export const expenseData = [
    { name: "Food", value: 450 },
    { name: "Shopping", value: 300 },
    { name: "Subscriptions", value: 120 },
    { name: "Travel", value: 250 },
  ];

export const COLORS = ["#4F46E5", "#22C55E", "#F59E0B", "#EF4444"];
  

export const QuickTransferUsers = [
  { id: 1, name: "Livia Bator", position: "CEO", avatar: "/livia.png" },
  {
    id: 2,
    name: "Randy Press",
    position: "Director",
    avatar: "/randy.png",
  },
  {
    id: 3,
    name: "Workman",
    position: "Designer",
    avatar: "/workman.png",
  },
  { id: 4, name: "Livia Bator1", position: "CEO", avatar: "/livia.png" },
  {
    id: 5,
    name: "Randy Press1",
    position: "Director",
    avatar: "/randy.png",
  },
  {
    id: 6,
    name: "Workman1",
    position: "Designer",
    avatar: "/workman.png",
  },
];

export const BalanceHistoryData = [
  { month: "Jul", value: 150 },
  { month: "Aug", value: 300 },
  { month: "Sep", value: 650 },
  { month: "Oct", value: 250 },
  { month: "Nov", value: 700 },
  { month: "Dec", value: 150 },
  { month: "Jan", value: 600 },
];
