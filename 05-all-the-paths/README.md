# Algorithms Challenge 5 - All the Paths

Write a function that finds all the paths in a maze that visit each room, assuming the maze is composed of a room surrounded
by four of either a closed door or an open door to the next room in the maze. If a door is open, it's represented as 1. If it's
closed, it's represented as 0. A room is represented an array of doors where the order represents the positions top, right, bottom,
left. An open door always leads to another room. It might help to imagine that one's room's top is another's bottom; one room's left
is another's right; and vice-versa. The entire maze is represented as an array of arrays of rooms. Rooms in the same array are connected
to each other via the left and right doors whereas those in adjacent arrays are connected to each other via the bottom and top doors.

If at least one room is entirely closed, you may simply return an empty array. However, if no room is entirely closed, your function
needs to return all the paths covering every room. These paths altogether may be represented as an array of paths where a path is an array
of a room of coordinates. The coordinate of a room is a pair of its array index in its left-right array (horizontal) and said left-right array's index in the
top-bottom array (vertical) aka the maze. It should be possible to follow each path by going through the open door connected to the next room. Rooms may be 
repeated in a path.

## Pseudocode Example

```
maze =
    array { // top-bottom right
        array { // left-right array
            array { // room
                0
                1
                1
                0
            }
            array { // room
                0
                0
                0
                1
            }
        }
        array { // left-right array
            array { // room
                0
                0
                1
                0
            }
        }
    }
paths = all_paths (maze)

/**
    The value of paths should be:
        array { // paths
            array { // path
                pair { // coordinate
                    0
                    0
                }
                pair { // coordinate
                    1
                    0
                }
                pair { // coordinate
                    0
                    0
                }
                pair { // coordinate
                    0
                    1
                }
            }
            array { // path
                pair { // coordinate
                    0
                    0
                }
                pair { // coordinate
                    0
                    1
                }
                pair { // coordinate
                    0
                    0
                }
                pair { // coordinate
                    1
                    0
                }
            }
        }
 */
```
