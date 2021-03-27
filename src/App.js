import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Dashboard from './components/Dashboard/Dashboard';
import PetDetails from './components/PetDetails/PetDetails'
import DemoForm from './components/DemoForm/DemoForm';
import DemoFormControlled from './components/DemoForm/DemoFormControlled';

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
          <Route path="/demo">
            <DemoForm></DemoForm>
          </Route>
        </Switch>
        <Footer></Footer>
      </section>
      <section className="notifications">

      </section>
    </>
  );
}

export default App;
