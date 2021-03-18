import { Container } from "./style";

interface DashboardHeaderProps{
  onOpenNewTrasactionModal:()=> void;
}

export function DashboardHeader({onOpenNewTrasactionModal}:DashboardHeaderProps) {
  return (
    <Container>
      <div className="content">
        <div>
          <h6>Matheus Souza Santos</h6>
          <span>iniciado em 01/10/2020</span>
        </div>

        <div>
          <button>Editar</button>
          <button onClick={onOpenNewTrasactionModal}>Operação</button>
        </div>
      </div>
    </Container>
  );
}
