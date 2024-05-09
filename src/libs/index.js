const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const userRoute = require("./routes/user");
const planetRoute = require("./routes/planet");
const solarSystemRoute = require("./routes/solarSystem");
const moonRoute = require("./routes/moon");
const asteroidCometRoute = require("./routes/asteroidComet");

// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use(cors());
/* app.use(cors({
  origin: 'http://example.com' // Aquí especifica el origen permitido
})); */

// routes
app.use("/api", userRoute);
app.use("/api", planetRoute);
app.use("/api", solarSystemRoute);
app.use("/api", moonRoute);
app.use("/api", asteroidCometRoute);

// root route
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));
