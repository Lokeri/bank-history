export interface Transaction {
  id: string;
  created_at: string;
  counterparty_name: string;
  debit: boolean;
  credit: boolean;
  amount: number;
  currency: string;
  operation_type: string;
  attachements: Attachements[];
}

export interface Attachements {
  url: string;
}

export interface TransactionResponse {
  transactions: Transaction[];
}
