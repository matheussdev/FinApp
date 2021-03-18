import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
  userID: string;
}

type transactionInput = Omit<transaction, "id" | "createdAt">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: transaction[];
  createTransaction: (trasaction: transactionInput) => Promise<void>;
  sumary:{ 
      deposits:number;
      withdraws:number;
      total:number
  }
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<transaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => {
      console.log(response.data);
      setTransactions(response.data.transactions.models);
      localStorage.setItem("user", JSON.stringify(response.data.user.id));
    });
  }, []);

  async function createTransaction(transactionInput: transactionInput) {
    const response = await api.post("transaction", {...transactionInput, createdAt: new Date()});
    const {transaction} = response.data;

    setTransactions([...transactions, transaction,])
  }

  const sumary = transactions.reduce((acc, transaction) =>{
    if(transaction.type==="deposit"){
        acc.deposits+=transaction.amount;
        acc.total+=transaction.amount
    }else{
        acc.withdraws+=transaction.amount;
        acc.total-=transaction.amount;
    }
    return acc;
  },{
      deposits:0,
      withdraws:0,
      total:0,
  })


  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction, sumary }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions(){
  const context = useContext(TransactionsContext);
  return context;
}