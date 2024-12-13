const express = require('express');
const router = express.Router();
const db = require('../db');

// [22] display_owner_view
router.get('/view', (req, res) => {
    db.query('SELECT * FROM display_owner_view', (err, result) => {
        if (err) return res.status(400).json({error: err.message});
        res.status(200).json(result);
    });
});

// [1] add_owner
router.post('/add', (req, res) => {
    const { username, first_name, last_name, address, birthdate } = req.body;
  
    db.query(`CALL add_owner(?, ?, ?, ?, ?)`, 
        [username, first_name, last_name, address, birthdate], 
        (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({error: 'Failed to add a new owner'});
        }
        res.status(200).json({message: 'Successfully added a new owner'});
    });
  });

// [10] start_funding
router.post("/start-funding", (req, res) => {
    const { owner, amount, long_name, fund_date } = req.body;
  
    db.query(
      `CALL start_funding(?, ?, ?, ?)`,
      [owner, amount, long_name, fund_date],
      (err, result) => {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: "Failed start funding" });
        }
        res
          .status(200)
          .json({ message: "Start funding was successfully completed!" });
      }
    );
  });

module.exports = router;