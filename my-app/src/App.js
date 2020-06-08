import React from 'react';
import { BrowserRouter as Router , Route, Switch, HashRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import TokenEnterPage from './User/TokenEnterPage';
import RequestCreatePage from './User/RequestCreatePage';
import HelpNearMe from './User/HelpNearMe';
import SignInPage from './NGO/SignInPage';
import RegisterNGOUser from './NGO/RegisterNGOUser';
import PostEvent from './NGO/PostEvent';

function App() {
  return (
    <div className="App">

       <Header/>
       <Router>
         <Switch>


             <Route exact path="/HelpNearMe" render={()=>{
                                    return(
                                      <div>
                                        <HelpNearMe/>
                                      </div>
                                    );
                                  }}
                                  />

            <Route exact path="/Post" render={()=>{
                       return(
                         <div>
                           <PostEvent/>
                         </div>
                       );
                     }}
                     />

                 <Route exact path="/Home" render={()=>{
                                     return(
                                       <div>
                                         <Home/>
                                       </div>
                                     );
                                   }}

                                   />

            <Route exact path="/Create" render={()=>{
              return(
                <div>
                  <RequestCreatePage/>
                </div>
              );
            }}

            />

           <Route exact path="/" render={()=>{
                         return(
                           <div>
                            <TokenEnterPage/>
                           </div>
                         );
                       }}
                       />

             <Route exact path="/Donor" render={()=>{
                                     return(
                                       <div>
                                        <SignInPage/>
                                       </div>
                                     );
                                   }}
                                   />

              <Route exact path="/NGORegister" render={()=>{
                                                   return(
                                                     <div>
                                                      <RegisterNGOUser/>
                                                     </div>
                                                   );
                                                 }}
                                                 />

         </Switch>
       </Router>
    </div>
  );
}

export default App;
