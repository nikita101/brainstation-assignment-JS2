
// Challenge 1

var step = ""
for (i = 0; i < 7; i++) {
	if (i <= 6){
	step = step + "#"
  console.log(step)
}
}

// The for loop prints a # for every line it runs.
// It is set to run for 7 lines, until i < 7 returns false.
// Using the if statment as part of the loop 
// allows the loop to add another # to the string
// if the condition of i being <= 7 is not met.


// // Challenge 2


function isEven(number){
    if (number%2 == 0)
        return ("The number is even!");
    else
        return ("The number is odd!");
}

console.log(isEven(4))

// This function takes a parameter, in this case the integer 4
// and using the % operator determins if it's devisible by 2.
// If the result is 0, it returns the string "The number is even!"
// If the result is not 0, "The number is odd!" is returned.
// The tricky part for me was figuring out the %













