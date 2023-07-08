const express = require("express");
const router = express.Router();

//Import the pool/db information
const pool = require("../db/pool");

//Get all Sleep info from database

router.get("/", async (req, res) => {
  
    try {
      const query = "SELECT * FROM  users, sleep WHERE sleep.user_id =users.id";
      const result = await pool.query(query);
      res.json(result.rows);
      console.log (result.rows)
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Add a new sleep info  to the database
router.post("/", async (req, res) => {
    try {
      const { sleeptime, waketime, user_id } = req.body;
  
      const query =
        "INSERT INTO sleep (sleeptime, waketime, user_id ) VALUES ($1, $2 , $3) RETURNING *";
      const values = [sleeptime , waketime, user_id];
  
      const result = await pool.query(query, values);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  

  

module.exports = router;