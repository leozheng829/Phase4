const express = require("express");
const router = express.Router();
const db = require("../db");

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
      res.status(200).json({message: 'Owner added successfully!'});
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
      res.status(200).json({message: 'Employee added successfully!'});
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
      res.status(200).json({message: 'Driver added successfully'});
  });
});

// [4] add_worker_role
router.post("/add-worker-role", (req, res) => {
    const { username } = req.body;
  
    db.query(`CALL add_worker_role(?)`, [username], (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Failed to add worker role" });
      }
      res.status(200).json({ message: "Worker role added successfully!" });
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
          return res.status(500).json({ error: "Failed to add product" });
        }
        res.status(200).json({ message: "Product added successfully!" });
      }
    );
  });

// [6] add_van()
router.post("/add-van", (req, res) => {
  const { id, tag, fuel, capacity, sales, driven_by } = req.body;

  db.query(
    `CALL add_van(?, ?, ?, ?, ?, ?)`,
    [id, tag, fuel, capacity, sales, driven_by],
    (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Failed to add van" });
      }
      res.status(200).json({ message: "Van added successfully!" });
    }
  );
});

// [7] add_business()
router.post("/add-business", (req, res) => {
  const { long_name, rating, spent, location } = req.body;

  db.query(
    `CALL add_business(?, ?, ?, ?)`,
    [long_name, rating, spent, location],
    (err, result) => {
      if (err) {
        console.error("Error adding business:", err.message);
        return res.status(500).json({ error: "Failed to add business" });
      }
      res
        .status(200)
        .json({ message: "Business added succesfully!" });
    }
  );
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
          return res.status(500).json({ error: "Failed to add service" });
        }
        res
          .status(200)
          .json({ message: "Service added successfully" });
      }
    );
  });

// [9] add_location()
router.post("/add-location", (req, res) => {
  const { label, x_coord, y_coord, space } = req.body;

  db.query(
    `CALL add_location(?, ?, ?, ?)`,
    [label, x_coord, y_coord, space],
    (err, result) => {
      if (err) {
        console.error("Error adding location:", err.message);
        return res.status(500).json({ error: "Failed to add location" });
      }
      res
        .status(200)
        .json({ message: "Location added successfully!" });
    }
  );
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
        return res.status(500).json({ error: "Failed to start funding" });
      }
      res
        .status(200)
        .json({ message: "Start funding worked successfully!" });
    }
  );
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

// [13] manage_service
router.post("/manage-service", (req, res) => {
    const { username, id } = req.body;
  
    db.query(`CALL manage_service(?, ?)`, [username, id], (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Failed to manage service" });
      }
      res.status(200).json({ message: "Service manager updated successfully!" });
    });
  });

// [14] takeover_van()
router.post("/takeover-van", (req, res) => {
    const { username, id, tag } = req.body;
  
    db.query(`CALL takeover_van(?, ?, ?)`, [username, id, tag], (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Failed to takeover van" });
      }
      res
        .status(200)
        .json({ message: 'Procedure "takeover_van" finished executing!' });
    });
  });

// [15] load_van()
router.post("/load-van", (req, res) => {
    const { id, tag, barcode, more_packages, price } = req.body;
  
    db.query(
      `CALL load_van(?, ?, ?, ?, ?)`,
      [id, tag, barcode, more_packages, price],
      (err, result) => {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: "Failed to load van" });
        }
        res
          .status(200)
          .json({ message: 'Van loaded successfully!' });
      }
    );
  });

  // [16] refuel_van()
router.post("/refuel-van", (req, res) => {
    const { id, tag, more_fuel } = req.body;
  
    db.query(`CALL refuel_van(?, ?, ?)`, [id, tag, more_fuel], (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Failed to refuel van" });
      }
      res.status(200).json({ message: "Van refueled successfully!" });
    });
  });

  // [17] drive_van()
router.post("/drive-van", (req, res) => {
    const { vanId, vanTag, destination } = req.body;

    db.query(
      `CALL drive_van(?, ?, ?)`,
      [vanId, vanTag, destination],
      (err, result) => {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: "Failed to drive van" });
        }
  
        res.status(200).json({ message: "Van driven successfully!" });
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
        return res.status(500).json({ error: "Failed to purchase product" });
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
        return res.status(500).json({ error: "Failed to remove product" });
      }
      res.status(200).json({ message: "Product removed successfully!" });
    });
  });

// [20] remove_van()
router.post("/remove-van", (req, res) => {
    const { id, tag } = req.body;
  
    db.query(`CALL remove_van(?, ?)`, [id, tag], (err, result) => {
      if (err) {
        console.error("Error removing van:", err.message);
        return res.status(500).json({ error: "Failed to remove van" });
      }
      res.status(200).json({ message: "Van removed successfully!" });
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