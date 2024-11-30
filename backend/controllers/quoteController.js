const Policy = require('../models/Policy');

exports.generateQuote = async (req, res) => {
    const { driverAge, vehicleType, coverageAmount } = req.body;
  
    try {
      // Premium Calculation Algorithm
      let basePremium = 100; // Base premium amount
      if (driverAge < 25) basePremium += 50; // Higher premium for young drivers
      if (vehicleType === 'sports') basePremium += 150; // Premium for sports cars
  
      const premium = basePremium + coverageAmount * 0.03; // Add 3% of coverage amount
      res.status(200).json({
        quote: {
          coverageAmount,
          premium,
          details: { driverAge, vehicleType },
        },
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

exports.purchasePolicy = async (req, res) => {
  const { coverageAmount, premium, type, termLength } = req.body;

  try {
    // Mock Payment System
    const paymentStatus = 'success'; // Simulating successful payment
    if (paymentStatus !== 'success') throw new Error('Payment failed');

    // Create the policy in the database
    const policy = await Policy.create({
      type,
      coverageAmount,
      premium,
      termLength,
      user: req.user._id,
      status: 'active', // Set status as active after purchase
    });

    res.status(201).json({
      message: 'Policy purchased successfully',
      policy,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
