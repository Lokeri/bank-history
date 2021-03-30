import React, { useContext, useEffect } from "react";
import { inject, observer } from "mobx-react";
import RootStore from "../stores/root-store";
import Header from "./component/header";
import HistoryTable from "./component/history-table/history-table";
import TransactionDetail from "./component/transaction-detail";
import { useParams } from "react-router-dom";
import { Transaction } from "../service/transaction.model";

const History: React.FC = () => {
  const { transactionStore } = useContext(RootStore);
  const { transactions } = transactionStore;
  const params: any = useParams();

  let transaction: Transaction =
    transactions.find((t) => t.id === params?.id) || ({} as Transaction);

  useEffect(() => {
    transactions.length || transactionStore.getTransactions();
  });

  return (
    <div className="w-full h-full flex">
      <div className="flex-grow">
        <Header label="History" />
        <div className="h-content">
          <HistoryTable />
        </div>
      </div>
      <div className="w-92 bg-gray-200">
        {transaction.id ? (
          <TransactionDetail transaction={transaction} />
        ) : (
          <div
            id="transaction-detail-none"
            className="h-full flex items-center justify-center text-base font-medium"
          >
            No transaction selected
          </div>
        )}
      </div>
    </div>
  );
};

export default inject(({ RootStore }) => ({ RootStore }))(observer(History));
