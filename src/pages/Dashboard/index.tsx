import { useState } from "react";
import { Link } from "react-router-dom";
import { SpendChart } from "../../Charts/SpendChart";
import { DashboardHeader } from "../../components/DashboardHeader";
import { NewTransactionModal } from "../../components/NewTransictionModal";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./style";


export function Dashboard() {

  const{sumary} = useTransactions();
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
        <div className="contentDashboard">
          <div>
            <div>
              <h4>Saldo total</h4>
              <h2>{new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(sumary.total)}</h2>
              <Link to="/extrato-detalhado">Ver extrato completo</Link>
            </div>
          </div>
          <div>
            <h4>Relatório de gastos</h4>
            <SpendChart datas={sumary} />
          </div>
          <div>
            <h4>Contas do mês</h4>
            <ul>
              <li>Telefone: R$34,99 </li>
              <li>Academia: R$100,00</li>
              <li>Internet: R$99,90</li>
              <li>Viagem: R$300,00</li>
              <a href="#">Ver todas as contas</a>
            </ul>
          </div>
        </div>
        <div className="chartSpendDayContainer">
          <div>
            <h4>Relatório de gastos/dia</h4>
            {/* <SpendDayChart /> */}
            <h1>Em Manutenção{"<desenvolvimento>"}</h1>
          </div>
        </div>
      </Container>

      <NewTransactionModal
        isOpen={isNewTrasactionModalOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
}
