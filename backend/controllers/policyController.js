const Policy = require('../models/Policy');

exports.getPolicies = async (req, res) => {
  try {
    const policies = await Policy.find({ user: req.user._id });
    res.status(200).json(policies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPolicy = async (req, res) => {
  const { type, coverageAmount, premium, termLength } = req.body;

  try {
    const policy = await Policy.create({
      type,
      coverageAmount,
      premium,
      termLength,
      user: req.user._id,
    });
    res.status(201).json(policy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
