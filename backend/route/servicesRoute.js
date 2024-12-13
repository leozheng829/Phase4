const express = require('express');
const router = express.Router();
const db = require('../db');

// [27] Display the service view
router.get('/view', (req, res) => {
    db.query('SELECT * FROM display_service_view', (err, result) => {
        if (err) {
            console.error('Error fetching service view:', err.message);
            return res.status(400).json({ error: err.message });
        }
        res.status(200).json(result);
    });
});

// [8] add_service
router.post("/add-service", (req, res) => {
    const { id, long_name, home_base, manager } = req.body;
  
    db.query(
      `CALL add_service(?, ?, ?, ?)`,
      [id, long_name, home_base, manager],
      (err, result) => {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: "Failed to add service!" });
        }
        res
          .status(200)
          .json({ message: "Procedure 'add_service' finished executing!" });
      }
    );
  });

// [13] manage_service
router.post("/manage-service", (req, res) => {
    const { username, id } = req.body;
  
    db.query(`CALL manage_service(?, ?)`, [username, id], (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Failed to manage service!" });
      }
      res.status(200).json({ message: "Service manager updated successfully!" });
    });
  });

module.exports = router;