import { action, makeObservable, observable } from "mobx";
import * as appSettings from "../appsettings.json";
import { Transaction, TransactionResponse } from "../service/transaction.model";

export default class TransactionStore {
  @observable public transactions: Transaction[];
  @observable public pendingRequests: number;
  public sortOrder: number;

  constructor() {
    this.transactions = [];
    this.pendingRequests = 0;
    this.sortOrder = 1;

    makeObservable(this);
  }

  @action startRequest = () => {
    this.pendingRequests++;
  };

  @action completeRequest = () => {
    this.pendingRequests--;
  };

  @action
  getTransactions = async () => {
    this.startRequest();
    const res = await fetch(`${appSettings.api_url}/transactions`);

    const transactionResponse: TransactionResponse = (await res.json()) as TransactionResponse;

    this.transactions = transactionResponse.transactions;

    this.completeRequest();
  };

  @action
  sortTransaction = async () => {
    this.transactions = this.transactions.sort(
      (a, b) => (a.amount - b.amount) * this.sortOrder
    );
    this.sortOrder = -this.sortOrder;
  };
}
