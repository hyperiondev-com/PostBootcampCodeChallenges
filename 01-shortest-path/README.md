# Algorithms Challenge 1 - Shortest Path

Write a function that finds the shortest route between any two given cities. Its argument is a pair of the cities' names and a map of the distances.
You can assume the cities' names are names and the distances are in km.
The function should return the a pair of the route and the distance of the route.
Your function beave as the shortest_route function called below.

## Pseudocode Example

```
cities =
    pair {
        "Durban"
        "Cape Town"
    }
distances =
    map {
        "Cape Town" ->
            array {
                pair {
                    "Johannesburg"
                    1,261.00 km
                }
            }
        "Pretoria" ->
            array {
                pair {
                    "Cape Town"
                    1,308.26 km
                }
            }
        "Durban" ->
            array {
                pair {
                    "Johannesburg"
                    500.68 km
                }
                pair {
                    "Pretoria"
                    535.53 km
                }
            }
    }
route_parameters =
    pair {
        cities
        distances
    }
route = shortest_route (route_parameters)

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
```

## Space time and complexity

Time complexity: the algorithm performs two loops over the input, assuming there are no further nested destinations. Given that the one loop is nested in the other, the worst case scenriao is O(n^2).

Space complexity: Given that empty variables are declared upfront, which are then checked against and potentially replaced in each loop, extra memory is needed. That said, the size of each variable is relative small as we are dealing with integers and short strings.
