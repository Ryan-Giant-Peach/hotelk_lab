const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");
const cors = require("cors");

app.use(express.json());
app.use(cors());

MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("hotelkBookings");
    const guestCollection = db.collection("bookings");
    const bookingRouter = createRouter(guestCollection);
    app.use("/api/bookings", bookingRouter);
  })
  .catch(console.error);

app.listen(5000, function () {
  console.log(`Listening on port ${this.address().port}`);
});