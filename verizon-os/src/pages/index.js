import React from 'react';
import  "../styles/styles.scss";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/home';  
import BlogPage from '../pages/blog'; 
import Header from '../components/header';
import Footer from '../components/footer'; 
import Ospo from '../components/ospo'; 

const IndexPage = () => (
    <Router>
        <Header/>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/blog" component={BlogPage} />
            </Switch>
        <Ospo/>
        <Footer/>
    </Router>
)

export default IndexPage
