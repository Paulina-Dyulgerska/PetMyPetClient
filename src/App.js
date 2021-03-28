import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Dashboard from './components/Dashboard/Dashboard';
import PetDetails from './components/PetDetails/PetDetails'
import DemoFormUncontrolled from './components/DemoForm/DemoFormUncontrolled';
import DemoFormControlled from './components/DemoForm/DemoFormControlled';
import DemoFormControlledRef from './components/DemoForm/DemoFormControlledRef';
import DemoFormControlledFunc from './components/DemoForm/DemoFormControlledFunc';
import PetCreate from './components/PetCreate/PetCreate';
import PetEdit from './components/PetEdit/PetEdit';

function App() {
  return (
    <>
      <section className="container">
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/dashboard/:category" component={Dashboard}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/pets/create" component={PetCreate}></Route>
          <Route path="/pets/details/:id" component={PetDetails}></Route>
          <Route path="/pets/edit/:id" component={PetEdit}></Route>

          <Route path="/demo">
            <DemoFormControlled></DemoFormControlled>
            <br />
            <DemoFormControlledRef></DemoFormControlledRef>
            <br />
            <DemoFormControlledFunc></DemoFormControlledFunc>
            <br />
            <DemoFormUncontrolled></DemoFormUncontrolled>
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
