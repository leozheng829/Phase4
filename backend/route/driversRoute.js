const express = require('express');
const router = express.Router();
const db = require('../db');

// [24] display_driver_view
router.get('/view', (req, res) => {
    db.query('SELECT * FROM display_driver_view', (err, result) => {
        if (err) return res.status(400).json({error: err.message});
        res.status(200).json(result);
    });
});

// [3] add_driver
router.post('/add', (req, res) => {
  const { username, licenseID, license_type, driver_experience } = req.body;

  db.query(`CALL add_driver_role(?, ?, ?, ?)`, 
      [username, licenseID, license_type, driver_experience], 
      (err, result) => {
      if (err) {
          console.error(err.message);
          return res.status(500).json({error: 'Failed to add a new driver'});
      }
      res.status(200).json({message: 'A new driver is added successfully'});
  });
});

// [21] remove_driver_role
router.post("/remove-driver-role", (req, res) => {
    const { username } = req.body;
  
    db.query(`CALL remove_driver_role(?)`, [username], (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Failed to remover driver role" });
      }
      res.status(200).json({ message: "Driver role removed successfully!" });
    });
  });

module.exports = router;
