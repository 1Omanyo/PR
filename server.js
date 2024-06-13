const express = require('express');
const mysql = require('mysql');
const app = express();

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1Republic.',
  database: 'meal_plan_db'
});

// Connect to MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Serve static files from public folder
app.use(express.static('public'));

// Handle GET request for meal plan page
app.get('/meal-plan', (req, res) => {
  const query = 'SELECT * FROM meal_plans WHERE patient_id = ?';
  const patientId = req.query.patientId;
  db.query(query, patientId, (err, results) => {
    if (err) {
      console.error('Error fetching meal plan:', err);
      res.status(500).send('Error fetching meal plan');
    } else {
      res.render('meal-plan', { mealPlan: results });
    }
  });
});

// Handle GET request for home page
app.get('/', (req, res) => {
  res.render('home');
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});