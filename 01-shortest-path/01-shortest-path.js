/* This program finds the shortest route between two cities.
 * If they do not have a direct connection, it searches a given map for
 * stops and calculates the stop with the shortest distance vetween the start
 * city and the end city.
 */

// Inputs
const cities = ["Durban", "Cape Town"];
const distances = {
  "Cape Town": { Johannesburg: 1261.0 },
  Pretoria: { "Cape Town": 1308.26 },
  Durban: {
    Johannesburg: 500.68,
    Pretoria: 535.53,
  },
};
const route_parameters = [cities, distances];

// Fucntion to calculate the shortest distance based on the route parameters
const shortest_route = (array) => {
  const [cities, distances] = array;
  const [startCity, endCity] = cities;
  let middleCity = "";
  let stops = [startCity];
  // Set an upper limit for distance
  let distance = 1000000000000;
  // First check if the start city is in the list of distances
  if (startCity in distances) {
    // Then check if the end city has a direct connection to that city.
    // If it does, we assume it is the fastest route.

    if (endCity in distances[startCity]) {
      stops.push(endCity);
      distance += distances[startCity][endCity];
      return [stops, distance];
    }
    // Otherwise, we search for a connection.
    else {
      for (city in distances) {
        // First check if one of the other cities has the end city distance in their array

        if (endCity in distances[city]) {
          // If that distance is shorter than the current shortest distance, then replace it.
          // console.log(distances[startCity][city]);
          // console.log(distances[city][endCity]);
          if (
            distances[startCity][city] + distances[city][endCity] <
            distance
          ) {
            distance = distances[startCity][city] + distances[city][endCity];
            middleCity = city;
          }
          // If the end city is not in the list, it may exist in reverse (i.e. the end city has a distance tot he middle city):
        }
        // Check each citiy's subcities
        for (subCity in distances[city]) {
          // If one of the subcities is also a subcity of the end city, we could also got our distance from there
          if (endCity in distances && subCity in distances[endCity]) {
            // If that distance is shorter than the current shortest distance, then replace it.
            // Also make sure we are not double counting the end city
            if (
              distances[city][subCity] + distances[endCity][subCity] <
                distance &&
              city !== endCity
            ) {
              distance = distances[city][subCity] + distances[endCity][subCity];
              middleCity = subCity;
            }
          }
        }
      }
      // Once all the cities have been looped through, return the final shortest distance and stops.
      stops.push(middleCity);
      stops.push(endCity);
      return [stops, distance + " km"];
    }
  }
};

// Execute the function with the given route parameters:
route = shortest_route(route_parameters);
console.log(route);

/**
Route's value is shown below:
    pair {
        array {
            "Durban"
            "Johannesburg"
            "Cape Town"
        }
        1761.68 km // 500.68 km + 1261.00 km
    }
 */
