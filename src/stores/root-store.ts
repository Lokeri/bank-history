import * as React from "react";
import { configure } from "mobx";
import TransactionStore from "./transactions-store";

configure({ enforceActions: "observed" });

export const stores = { transactionStore: new TransactionStore() };

const RootStore = React.createContext(stores);

export default RootStore;
