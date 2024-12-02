import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { purchasePolicy } from '../features/policySlice';

const PurchaseForm = () => {
  const dispatch = useDispatch();
  const { quote } = useSelector((state) => state.quote);
  const { loading, error, policy } = useSelector((state) => state.policy);

  const handlePurchase = () => {
    dispatch(
      purchasePolicy({
        type: 'auto',
        coverageAmount: quote.coverageAmount,
        premium: quote.premium,
        termLength: 12, // Example value
      })
    );
  };

  return (
    <div>
      <h2>Purchase Policy</h2>
      <button onClick={handlePurchase} disabled={loading}>
        {loading ? 'Processing...' : 'Purchase'}
      </button>
      {policy && <p>Policy purchased successfully!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PurchaseForm;
