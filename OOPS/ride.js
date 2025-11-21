// Q5 — Ride-Sharing Application (Classes + error validation)

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.from = fromLocation;
        this.to = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null || this.distance < 0) {
            throw new Error("❌ Invalid distance provided.");
        }
        return this.distance * 15; // ₹15 per km
    }
}

// Test
try {
    const user = new User("Amit", 4.8);
    const driver = new Driver("Karan", 4.9, "Honda City");
    const trip = new Trip("Delhi", "Noida", 20);

    console.log("Fare:", trip.calculateFare());
} catch (err) {
    console.log(err.message);
}

try {
    const badTrip = new Trip("Delhi", "Gurgaon", -5); // invalid
    console.log(badTrip.calculateFare());
} catch (err) {
    console.log(err.message);
}
