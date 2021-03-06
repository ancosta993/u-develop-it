const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection.js');
const inputCheck = require('./utils/inputCheck');

const apiRoutes = require('./routes/apiRoutes');

// Express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Middleware
app.use('/api', apiRoutes);



// Default response for any other request (Not Found)
app.use((req, res)=>{
   res.status(404).end();
});


// start server after DB connection

db.connect(err => {
   if (err) throw err;
   console.log(`Database Connected.`);
   app.listen(PORT, () => {
      console.log(`Server Running on PORT ${PORT}`)
   });
});