import './Content.css'
import React from "react"
import { Switch, Route} from 'react-router-dom'
import Inicio from '../../views/contents/Inicio'
import Detalhes from '../../views/contents/Detalhes'
import Sobre from '../../views/contents/Sobre'

const Content = props => (
    <main className="Content">
       <Switch>
           <Route exact path="/">
               <Inicio />
           </Route>
           <Route path="/detalhes">
                   <Detalhes />
               </Route>
               <Route path="/sobre">
                   <Sobre />
               </Route>
               </Switch>
    </main>
)
export default Content