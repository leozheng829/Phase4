const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const ownersRoute = require("./route/ownersRoute");
const employeesRoute = require("./route/employeesRoute");
const driversRoute = require("./route/driversRoute");
const locationsRoute = require("./route/locationsRoute");
const productsRoute = require("./route/productsRoute");
const servicesRoute = require("./route/servicesRoute");


app.use("/api/owners", ownersRoute);
app.use("/api/employees", employeesRoute);
app.use("/api/drivers", driversRoute);
app.use("/api/locations", locationsRoute);
app.use("/api/products", productsRoute);
app.use("/api/services", servicesRoute);

// DO NOT MAKE ANY CHANGES HERE
const procedureRoutes = require("./route/procedureRoutes");
app.use("/api", procedureRoutes);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running`));

app.get("/", (req, res) => {
    res.send("Welcome to the API server!");
});