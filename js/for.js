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

        function ForOdd(number1, number2) {
            document.getElementById("list").innerHTML = ' ';
            for (number1; number1 <= number2; number1++) {
                ODDS(number1);
            }
        }

        function ForEven(number1, number2) {
            document.getElementById("list").innerHTML = ' ';
            for (number1; number1 <= number2; number1++) {
                if (number1 % 2 == 0) {
                    EVENS(number1);
                }
            }
        }



        // Button Called Function //

        function odd(number1, number2) {

            if (number1 < 0 || number2 < 0) {
                alert('All valid input is needed');
            } else {
                ForOdd(number1, number2);
            }
        }


        function even(number1, number2) {
            if (number1 < 0 || number2 < 0) {
                alert('All valid input is needed');
            } else {
                ForEven(number1, number2);
            }
        }