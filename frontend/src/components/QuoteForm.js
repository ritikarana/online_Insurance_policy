import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateQuote } from '../features/quoteSlice';

const QuoteForm = () => {
  const [formData, setFormData] = useState({ driverAge: '', vehicleType: '', coverageAmount: '' });
  const dispatch = useDispatch();
  const { loading, error, quote } = useSelector((state) => state.quote);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(generateQuote(formData));
  };

  return (
    <div>
      <h2>Generate Quote</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="driverAge" placeholder="Driver Age" onChange={handleChange} required />
        <input type="text" name="vehicleType" placeholder="Vehicle Type" onChange={handleChange} required />
        <input type="number" name="coverageAmount" placeholder="Coverage Amount" onChange={handleChange} required />
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </form>
      {quote && <p>Premium: {quote.premium}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default QuoteForm;
