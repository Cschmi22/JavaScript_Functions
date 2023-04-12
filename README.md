
## Exercise 4: What type of triangle?

Write a function that receives three numbers that represent the lengths of a triangles three sides. If the three
sides do not form a valid triangle (the sum of two sides should always be greater than the length of the third side),
 you should return a message indicating an invalid triangle. Otherwise, return a string indicating the type of triangle
the three sides make (equilateral: all side lengths equal, isosceles: only two side lengths equal, or scalene: all different side lengths).

For example:

- Sides 1, 2, 2 make an isosceles triangle
- Sides 1, 1, 2 make an invalid triangle

## Exercise 5: Data Plan Status

Write a function that will display feedback on cell phone data usage. Cell phone
plans for this particular company give you a certain amount of data every 30 days
which must be used or they are lost (no rollover). We want to track the average amount of data
 used per day and inform the user if they are using too much data or can
afford to use more.

Write a function that accepts the following parameters:

- `planLimit`: amount of data in the plan per 30 day period
- `day`: the current day in the 30 day period
- `usage`: the total amount of data used so far

The function should compute whether the user is over, under, or right on the average
daily usage under the plan. It should also inform them of how much data is left
and how much, on average, they can use per day for the rest of the month. If
they’ve run out of data, it should inform them of that too.

For example, if the user enters `planLimit = 100`, `day = 15`, and `usage = 56`, your program should print
out something similar to the following.

```txt
15 days used, 15 days remaining
Average daily use: 3.333 GB/day
You are EXCEEDING your average daily use (3.73 GB/day),
continuing this high usage, you'll exceed your data plan by
11.9 GB.
To stay below your data plan, use no more than 2.93 GB/day.
```

