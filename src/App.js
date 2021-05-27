import { Route, Switch } from 'react-router-dom';
// import firebase, { auth } from './utils/firebase';
import authentication from './utils/firebase';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Dashboard from './components/Dashboard/Dashboard';
import PetDetails from './components/PetDetails/PetDetails';
import Demo from './components/DemoForm/Demo';
import DemoFormUncontrolled from './components/DemoForm/DemoFormUncontrolled';
import DemoFormControlled from './components/DemoForm/DemoFormControlled';
import DemoFormControlledRef from './components/DemoForm/DemoFormControlledRef';
import DemoFormControlledFunc from './components/DemoForm/DemoFormControlledFunc';
import PetCreate from './components/PetCreate/PetCreate';
import PetEdit from './components/PetEdit/PetEdit';
import Portfolio from './components/Portfolio/Portfolio';
// import PetDelete from './components/PetDelete/PetDelete';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {

  console.log(process.env.NODE_ENV);
  console.log(process.env);

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
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/logout" render={props => {
            authentication.logout();
          }} />
          {/* <Route path="/pets/delete/:id" component={PetDelete}></Route> */}

          <Route path="/demo">
            <Demo></Demo>
            <br />
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
