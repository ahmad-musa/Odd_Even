        // Show Result Function //

        function show(num1) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(+num1);
            node.appendChild(textnode);
            document.getElementById("list").appendChild(node);
        }


        // Odd/Even Condition Checking Function //

        function ODDS(num) {
            if (num % 2 != 0) {
                show(num);
            }

        }

        function EVENS(num) {
            if (num % 2 == 0) {
                show(num);
            }

        }


        // Loop Checking Function //

        function dowhileOdd(number1, number2) {
            document.getElementById("list").innerHTML = ' ';
            do {
                ODDS(number1);
                number1++;
            } while (number1 <= number2)

        }

        function dowhileEven(number1, number2) {
            document.getElementById("list").innerHTML = ' ';


            do {
                EVENS(number1);
                number1++;
            } while (number1 <= number2)

        }



        // Button Called Function //

        function odd(number1, number2) {

            if (number1 < 0 || number2 < 0) {
                alert('All valid input is needed');
            } else {
                dowhileOdd(number1, number2);
            }
        }


        function even(number1, number2) {
            if (number1 < 0 || number2 < 0) {
                alert('All valid input is needed');
            } else {
                dowhileEven(number1, number2);
            }
        }
