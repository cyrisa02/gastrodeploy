import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Applepie from './pages/Applepie';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Strawberrypie from "./pages/Strawberrypie";
import Lemonpie from "./pages/Lemonpie";
import Isopicture from "./pages/Isopicture";
import Pricingtable from "./pages/Pricingtable";
import Contact from "./pages/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee,faList,faUser,faClock,faHourglass } from "@fortawesome/free-solid-svg-icons";
import {AnimatePresence} from 'framer-motion';


library.add(fab, faCheckSquare, faCoffee, faList, faUser, faClock, faHourglass);


const App = () => {
  return (
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/applepie" component={Applepie} />
        <Route exact path="/strawberrypie" component={Strawberrypie} />
        <Route exact path="/lemonpie" component={Lemonpie} />
        <Route exact path="/isopicture" component={Isopicture} />
        <Route exact path="/pricingtable" component={Pricingtable} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    
  );
};

export default App;