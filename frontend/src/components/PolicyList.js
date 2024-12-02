import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPolicies } from '../features/policySlice';

const PolicyList = () => {
  const dispatch = useDispatch();
  const { policies, loading, error } = useSelector((state) => state.policy);

  useEffect(() => {
    dispatch(fetchPolicies());
  }, [dispatch]);

  return (
    <div>
      <h2>Policy List</h2>
      {loading && <p>Loading policies...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {policies.length > 0 ? (
        <ul>
          {policies.map((policy) => (
            <li key={policy._id}>
              {policy.type}: ${policy.premium} (Coverage: ${policy.coverageAmount})
            </li>
          ))}
        </ul>
      ) : (
        <p>No policies found.</p>
      )}
    </div>
  );
};

export default PolicyList;
