export interface ITransactions {
  id: string;
  description: string;
  category: string;
  amount: string | number;
  transactionType: string;
  createdAt: string;
}
