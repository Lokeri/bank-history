import dayjs from "dayjs";
import React from "react";
import { capitalize } from "../../../service/formater.service";
import { Transaction } from "../../../service/transaction.model";

const HistoryRow: React.FC<HistoryRowProps> = ({ transaction, onClick }) => {
  return (
    <>
      <div
        id={`transaction-row-${transaction.id}`}
        className="w-full h-16 flex py-6 px-12 cursor-pointer"
        onClick={onClick}
      >
        <div className="w-1/4">{transaction.counterparty_name}</div>
        <div className="w-1/4">{capitalize(transaction.operation_type)}</div>
        <div className="w-1/4">
          {dayjs(transaction.created_at).format("MMM DD, YYYY")}
        </div>
        <div
          className="w-1/4 text-right"
          id={`transaction-row-amount-${transaction.id}`}
        >
          {transaction.amount + " " + transaction.currency}
        </div>
      </div>
      <div className="h-px bg-graydivider" />
    </>
  );
};

interface HistoryRowProps {
  transaction: Transaction;
  onClick: any;
}

export default HistoryRow;
