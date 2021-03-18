import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
    user: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "freelancer de site",
          type: "deposit",
          category: "dev",
          amount: 600,
          createdAt: new Date("2021-03-16 09:00:00"),
          userID:"1",
        },
        {
          id:2 ,
          title: "Aluguel",
          type: "withdraw",
          category: "casa",
          amount: 500,
          createdAt: new Date("2021-03-15 09:00:00"),
          userID:"1",
        },

      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      const transactions = this.schema.all("transaction");
      const data = {
        user: { user: "Matheus Souza Santos", id: 1, createdAt: new Date() },
        transactions,
      };

      return data;
    });

    this.post("/transaction", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
