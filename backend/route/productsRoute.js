const express = require('express');
const router = express.Router();
const db = require('../db');

// [26] display_product_view
router.get('/view', (req, res) => {
    db.query('SELECT * FROM display_product_view', (err, result) => {
        if (err) {
            console.error('Error fetching product view:', err.message);
            return res.status(400).json({ error: err.message });
        }
        res.status(200).json(result);
    });
});

// [5] add_product()
router.post("/add-product", (req, res) => {
    const { barcode, iname, weight } = req.body;
  
    db.query(
      `CALL add_product(?, ?, ?)`,
      [barcode, iname, weight],
      (err, result) => {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: "Failed to add product!" });
        }
        res.status(200).json({ message: "Product added successfully!" });
      }
    );
  });

// [18] purchase_product()
router.post("/purchase-product", (req, res) => {
    const { long_name, id, tag, barcode, quantity } = req.body;
  
    db.query(
      `CALL purchase_product(?, ?, ?, ?, ?)`,
      [long_name, id, tag, barcode, quantity],
      (err, result) => {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: "Failed to purchase product!" });
        }
        res.status(200).json({ message: "Product purchased successfully!" });
      }
    );
  });
  
// [19] remove_product()
router.post("/remove-product", (req, res) => {
    const { barcode } = req.body;

    db.query(`CALL remove_product(?)`, [barcode], (err, result) => {
    if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Failed to remove product!" });
    }
    res.status(200).json({ message: "Product removed successfully!" });
    });
});

module.exports = router;