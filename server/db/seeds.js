use hotelkBookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Elken DeGeneres",
    email: "elklyf@elken.com",
    checkedIn: "yes"
  },
]);