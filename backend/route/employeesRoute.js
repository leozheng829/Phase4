const express = require('express');
const router = express.Router();
const db = require('../db');

// [23] display_employee_view
router.get('/view', (req, res) => {
    db.query('SELECT * FROM display_employee_view', (err, result) => {
        if (err) return res.status(400).json({error: err.message});
        res.status(200).json(result);
    });
});

// [2] add_employee
router.post('/add', (req, res) => {
    const { username, first_name, last_name, address, birthdate, taxID, hired, employee_experience, salary } = req.body;

    db.query(`CALL add_employee(?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
        [username, first_name, last_name, address, birthdate, taxID, hired, employee_experience, salary], 
        (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({error: 'Failed to add a new employee'});
        }
        res.status(200).json({message: 'A new employee is added successfully'});
    });
});

  // [11] hire_employee
router.post("/hire-employee", (req, res) => {
    const { username, user_id } = req.body;
  
    db.query(`CALL hire_employee(?, ?)`, [username, user_id], (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Failed to hire employee" });
      }
      res.status(200).json({ message: "Employee hired successfully!" });
    });
  });
  
// [12] fire_employee
  router.post("/fire-employee", (req, res) => {
    const { username, user_id } = req.body;
  
    db.query(`CALL fire_employee(?, ?)`, [username, user_id], (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Failed to fire employee" });
      }
      res.status(200).json({ message: "Employee fired successfully!" });
    });
  });

module.exports = router;