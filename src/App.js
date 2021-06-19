import { Route, Switch, Redirect } from 'react-router-dom';
// import firebase, { auth } from './utils/firebase';
import authentication, { firebase } from './utils/firebase';
import { useEffect, useState } from 'react';

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
import DemoContext from './components/DemoContext/DemoContext';
import DemoContextReducer from './components/DemoContextReducer/DemoContextReducer';
import DemoContextUseContext from './components/DemoContextUseContext/DemoContextUseContext';
import PetCreate from './components/PetCreate/PetCreate';
import PetEdit from './components/PetEdit/PetEdit';
import Portfolio from './components/Portfolio/Portfolio';
// import PetDelete from './components/PetDelete/PetDelete';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CustomErrorBoundary from './components/Shared/CustomErrorBoundary/CustomErrorBoundary';

function App() {
  const [user, setUser] = useState(null);

  console.log(process.env.NODE_ENV);
  console.log(process.env);

  useEffect(() => {
    //zakacham tozi event na cheliq app i taka mi e validen navsqkyde vyv vsekq componenta po-nadolu!!!!
    // firebase.auth().onAuthStateChanged(setUser);
    authentication.onUserAuthStateChanged(user, setUser);
  }, []);

  const authUserInfo = {
    isAuthenticated: Boolean(user),
    userEmail: user?.email,
  }

  return (
    <>
      <CustomErrorBoundary>
        <section className="container">
          {/* <Header userEmail={user?.email} isAuthenticated={Boolean(user)}></Header> */}
          <Header {...authUserInfo}></Header>
          {user?.email && <h1>Hi, {user?.email}</h1>}
          <Switch>
            {/* <Route path="/" exact component={Main}></Route>
          <Route path="/dashboard/:category" component={Dashboard}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/pets/create" component={PetCreate}></Route>
          <Route path="/pets/details/:id" component={PetDetails}></Route>
          <Route path="/pets/edit/:id" component={PetEdit}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
           */}
            <Route path="/" exact render={props => <Main {...props} {...authUserInfo} />}></Route>
            <Route path="/dashboard/:category" render={props => <Dashboard {...props}  {...authUserInfo} />}></Route>
            <Route path="/dashboard" render={props => <Dashboard {...props}  {...authUserInfo} />}></Route>
            <Route path="/pets/create" render={props => <PetCreate  {...props} {...authUserInfo} />}></Route>
            <Route path="/pets/details/:id" render={props => <PetDetails  {...props} {...authUserInfo} />}></Route>
            <Route path="/pets/edit/:id" render={props => <PetEdit  {...props} {...authUserInfo} />}></Route>
            <Route path="/portfolio" render={props => <Portfolio  {...props} {...authUserInfo} />}></Route>
            <Route path="/login" render={props => <Login  {...props} {...authUserInfo} />}></Route>
            <Route path="/register" render={props => <Register  {...props} {...authUserInfo} />}></Route>
            <Route path="/logout" render={props => {
              authentication.logout();
              return <Redirect to='/' />
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

            <Route path="/demo-context" component={DemoContext}></Route>
            <Route path="/demo-context-useContext" component={DemoContextUseContext}></Route>
            <Route path="/demo-context-reducer" component={DemoContextReducer}></Route>
          </Switch>
          <Footer></Footer>
        </section>
        <section className="notifications">

        </section>
      </CustomErrorBoundary>
    </>
  );
}

export default App;
