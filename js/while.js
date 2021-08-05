        // Show Result Function //

        function show(num1) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(+num1);
            node.appendChild(textnode);
            document.getElementById("list").appendChild(node);
        }



        // Loop Checking Function //

        function whileOdd(number1, number2) {
            document.getElementById("list").innerHTML = ' ';
            while (number1 <= number2) {

                if (number1 % 2 != 0) {
                    show(number1);
                }

                number1++;
            }

        }

        function whileEven(number1, number2) {
            document.getElementById("list").innerHTML = ' ';
            while (number1 <= number2) {

                if (number1 % 2 == 0) {
                    show(number1);
                }

                number1++;
            }

        }



        // Button Called Function //

        function odd(number1, number2) {

            if (number1 < 0 || number2 < 0) {
                alert('All valid input is needed');
            } else {
                whileOdd(number1, number2);
            }
        }


        function even(number1, number2) {
            if (number1 < 0 || number2 < 0) {
                alert('All valid input is needed');
            } else {
                whileEven(number1, number2);
            }
        }