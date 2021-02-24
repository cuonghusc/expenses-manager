import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Navbar,Container,Nav,Row, Col} from 'react-bootstrap';
import CreateExpense from './components/create-expense.component';
import EditExpense from './components/edit-expense.component';
import ExpenseList from './components/expenses-listing.component';

function App() {
    return (
        <Router>
            <div className="App">
                <header>
                    <Navbar bg="success" variant="success">
                        <Container>
                            <Navbar.Brand>
                                <Link to={"/create-expense"} className="nav-link">
                                Expense manager
                                </Link>
                            </Navbar.Brand>

                            <Nav className="justify-content-end">
                                <Nav>
                                    <Link to={"/create-expense"} className="nav-link">
                                    Create Expense
                                    </Link>
                                    <Link to={"/expenses-listing"} className="nav-link">
                                    Expenses List
                                    </Link>
                                </Nav>
                            </Nav>
                        </Container>
                    </Navbar>
                </header>

                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="wrapper">
                            <Switch>
                                <Route exact path='/' component={CreateExpense} />
                                <Route path="/create-expense" component={CreateExpense} />
                                <Route path="/edit-expense/:id" component={EditExpense} />
                                <Route path="/expenses-listing" component={ExpenseList} />
                            </Switch>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Router>
    );
}

export default App;
