import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Dashboard from './components/Dashboard/Dashboard';
import PetDetails from './components/PetDetails/PetDetails'

function App() {
  return (
    <>
      <section className="container">
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/dashboard/:category" component={Dashboard}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/pets/details/:id" component={PetDetails}></Route>
        </Switch>
        <Footer></Footer>
      </section>
      <section className="notifications">

      </section>
    </>
  );
}

export default App;
