import React from 'react';
import { Route, Switch } from 'wouter';
import MainLayout from "./layouts/MainLayout";
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/shop';
import ProductsPage from '@/pages/products';
import FaqsPage from '@/pages/faqs';
import ContactUsPage from '@/pages/contactus';
import AboutUsPage from '@/pages/AboutUs';
import LoginPage from '@/pages/Login';
import SignupPage from '@/pages/Signup';
import DashboardPage from '@/pages/Dashboard';


function App() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/faqs" component={FaqsPage} />
        <Route path="/contact-us" component={ContactUsPage} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route>404 - Not Found</Route>
      </Switch>
    </MainLayout>
  );
}

export default App;
