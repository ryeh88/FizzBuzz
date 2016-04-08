function fizz () {
	for(var i = 1; i <= 100; i++) {
		var x = i;
		if (i % 15 == 0)
			x = "FizzBuzz"
		else if (i % 3 == 0) 
			x = "Fizz"
		else if (i % 5 == 0)
			x = "Buzz"
			console.log(x);
	};

}


