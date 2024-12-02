import React from 'react';
import QuoteForm from '../components/QuoteForm';
import PurchaseForm from '../components/PurchaseForm';
import PolicyList from '../components/PolicyList';

const Dashboard = () => {
  return (
    <div>
      <h1>Insurance Dashboard</h1>
      <QuoteForm />
      <PurchaseForm />
      <PolicyList />
    </div>
  );
};

export default Dashboard;
