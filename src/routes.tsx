import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'
import {Dashboard} from './pages/Dashboard';


export interface Props {
    
}
 
export interface State {
    
}
 
class Routes extends React.Component<Props, State> {
    state = {  }
    render() { 
        return ( 
            <BrowserRouter>
                <Route path="/dashboard" component={Dashboard} exact />
            </BrowserRouter>
         );
    }
}
 
export default Routes;