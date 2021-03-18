import React, { useState} from "react";
import { DashboardHeader } from "../../components/DashboardHeader";
import { NewTransactionModal } from "../../components/NewTransictionModal";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./style";

interface transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
  userID: string;
}

export function TrasnsactionsPage() {
 const {transactions} = useTransactions();

  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(
    false
  );

  function handleOpenNewTrasactionModal() {
    setIsNewTrasactionModalOpen(true);
  }

  function handleCloseModal() {
    setIsNewTrasactionModalOpen(false);
  }

  return (
    <>
      <Container>
        <DashboardHeader
          onOpenNewTrasactionModal={handleOpenNewTrasactionModal}
        />

        <table>
          <thead>
            <th>Transação</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </thead>
          <tbody className="overflowTable">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td>
                  {transaction.type==="withdraw"&&("-")}
                  {" "}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-br").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>

      <NewTransactionModal
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
}


