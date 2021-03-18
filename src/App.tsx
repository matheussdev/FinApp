import { Header } from "./components/Header";
import { LeftNav } from "./components/LeftNav";
import { GlobalStalye } from "./styles/global";
import { Dashboard } from "./pages/Dashboard";

import { Route, BrowserRouter, Switch} from 'react-router-dom'
import { TrasnsactionsPage } from "./pages/Transactions";
import { TransactionsProvider } from "./hooks/useTransactions";


function App() {
  return (
    <TransactionsProvider>
    <BrowserRouter>
      <GlobalStalye />
      <div>
        <LeftNav/>
      </div>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} exact/>
          <Route path="/extrato-detalhado" component={TrasnsactionsPage}/>
          </Switch>
        
      </div>
      </BrowserRouter>
    </TransactionsProvider>
  );
}

export default App;
