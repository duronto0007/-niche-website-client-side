import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddProduct from './Pages/AddProduct/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import About from './Pages/Home/About/About';
import Home from './Pages/Home/Home/Home';
import ManageProduct from './Pages/Home/ManageProduct/ManageProduct';
import Subscribe from './Pages/Home/Subscribe/Subscribe';
import Login from './Pages/Login/Firebase/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Order from './Pages/Order/Order/Order';
import Payment from './Pages/Order/Payment/Payment';
import Footer from './Pages/shared/Footer';
import Header from './Pages/shared/Header/Header';

function App() {
  return (
    <div className="App">
       <AuthProvider>
       <Router>
         <Header></Header>
         <Switch>
           <Route exact path="/">
               <Home></Home>
           </Route>
           <Route path="/home">
                <Home></Home>
           </Route>
           <Route path="/login">
                <Login></Login>
           </Route>
           <Route path="/register">
                <Register></Register>
           </Route>
           <PrivateRoute path="/order/:productId">
                <Order></Order>
           </PrivateRoute>
           <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
           </PrivateRoute>
           <Route path="/addProduct">
             <AddProduct></AddProduct>
           </Route>
           <Route path="/manageProduct">
             <ManageProduct></ManageProduct>
           </Route>
           <Route path="/payment">
             <Payment></Payment>
           </Route>
           <Route path="/about">
             <About></About>
           </Route>
           <Route path="./subscribe">
             <Subscribe></Subscribe>
           </Route>
           <Route path="*">
            <NotFound></NotFound>
           </Route>
         </Switch>
         <Route>
           <Footer></Footer>
         </Route>
       </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
