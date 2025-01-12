class Vehicle {
    run: number
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
    vehicle.run = vehicle.run / .62
    return vehicle
}