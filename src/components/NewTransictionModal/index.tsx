import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useTransactions } from "../../hooks/useTransactions";

import { Container, RadioBox, TrasactionTypeContainer } from "./style";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("deposit");

  async function handleCreateNewTrasaction(event: FormEvent) {
    event.preventDefault();
    await createTransaction({
      title,
      amount,
      category,
      userID: localStorage.getItem("user") || "",
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTrasaction}>
        <h2>Cadastrar operação</h2>
        <input
          placeholder="Titulo"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          required
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TrasactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            activecolor="green"
            onClick={() => setType("deposit")}
          >
            Entrada
          </RadioBox>
          <RadioBox
            type="button"
            activecolor="red"
            isActive={type === "withdraw"}
            onClick={() => setType("withdraw")}
          >
            Saída
          </RadioBox>
        </TrasactionTypeContainer>

        <input
          placeholder="Categoria"
          required
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
