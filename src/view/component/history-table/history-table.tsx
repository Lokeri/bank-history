import React, { useContext } from "react";
import { inject, observer } from "mobx-react";
import RootStore from "../../../stores/root-store";
import HistoryRow from "./history-row";
import { Transaction } from "../../../service/transaction.model";
import { useHistory } from "react-router-dom";
import sortIcon from "../../../assets/Vector.png";

const HistoryTable: React.FC = () => {
  const { transactionStore } = useContext(RootStore);
  const { transactions } = transactionStore;
  const history = useHistory();

  const clickOnRow = (transaction: Transaction) => {
    /* Put the transaction in the store to be reused for the sidepanel */
    history.push(`/transactions/${transaction.id}`);
  };

  const sort = () => {
    transactionStore.sortTransaction();
  };

  return (
    <div className="w-full h-full flex-column overflow-auto" id="history-table">
      {/* Header */}
      <div className="flex h-10 py-2 px-12">
        <div className="w-1/4">Counterparty</div>
        <div className="w-1/4">Method</div>
        <div className="w-1/4">Payment date</div>
        <div
          className="w-1/4 items-end cursor-pointer"
          onClick={sort}
          id="header-amount"
        >
          <div className="flex">
            Amount <img className="m-2 h-2" src={sortIcon} alt="sort" />
          </div>
        </div>
      </div>
      <div className="h-px bg-graydivider" />
      {/* Content */}
      {transactions.map((t, index) => (
        <HistoryRow key={index} transaction={t} onClick={() => clickOnRow(t)} />
      ))}
    </div>
  );
};

export default inject(({ RootStore }) => ({ RootStore }))(
  observer(HistoryTable)
);
