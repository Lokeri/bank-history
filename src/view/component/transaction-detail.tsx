import dayjs from "dayjs";
import React from "react";
import { capitalize } from "../../service/formater.service";
import { Transaction } from "../../service/transaction.model";

const TransactionDetail: React.FC<TransactionDetailProps> = ({
  transaction,
}) => {
  return (
    <div className="w-full h-full" id="transaction-detail">
      <div className="w-full h-18 py-4">
        <div className="text-center">
          {capitalize(transaction.operation_type)}
        </div>
        <div className="text-center text-xs text-gray-600">
          {dayjs(transaction.created_at).format("MMM DD, YYYY hh:mm")}
        </div>
      </div>
      <div className="h-36 bg-white m-4 rounded-xl shadow-lg text-center py-8">
        <div
          className="text-xl"
          id={`transaction-detail-amount-${transaction.id}`}
        >
          {transaction.amount + " " + transaction.currency}
        </div>
        <div className="text-sm">{transaction.counterparty_name}</div>
        <div className="text-sm text-gray-600">
          {transaction.amount + " " + transaction.currency}
        </div>
      </div>
    </div>
  );
};

interface TransactionDetailProps {
  transaction: Transaction;
}

export default TransactionDetail;
