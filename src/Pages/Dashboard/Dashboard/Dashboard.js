import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import DashBoardHome from '../DashboardHome/DashBoardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../../AddProduct/AddProduct';
import Reviews from '../Reviews/Reviews';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {admin} = useAuth();
    return (
         <div className="dashboard mt-3">
                <div>
                        <Navbar bg="danger" expand={false}>
                        <Container fluid>
                        <Navbar.Brand href="#">Dashboard</Navbar.Brand>
                    
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                        >
                            
                            <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Dashboard</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                {/* <Nav.Link href="#action1">Home</Nav.Link> */}
                                <Nav.Link className="text-success" as={HashLink} to="/home#home">Home</Nav.Link>
                                <Nav.Link className="text-success" as={HashLink} to={`${url}`}>Dashboard</Nav.Link>
                                {
                                 admin && <> 
                                    <Nav.Link className="text-success" as={HashLink} to="/manageProduct">Manage Product</Nav.Link>
                                    <Nav.Link className="text-success" as={HashLink} to={`${url}/makeAdmin`}>Make Admin</Nav.Link>
                                    <Nav.Link className="text-success" as={HashLink} to={`${url}/addProduct`}>Add Product</Nav.Link>
                                    
                                    </>
                                }
                                <Nav.Link className="text-success" as={HashLink} to={`${url}/reviews`}>Reviews</Nav.Link>
                                
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                </div>

                <div className="dashboard-content">
                <Switch>
                    <Route exact path={path}>
                    <DashBoardHome></DashBoardHome>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                         <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                         <AddProduct></AddProduct>
                    </AdminRoute>
                    <Route path={`${path}/reviews`}>
                         <Reviews></Reviews>
                    </Route>
                </Switch>
                </div>
         </div>
        
    );
};

export default Dashboard;