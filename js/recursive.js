        // Show Result Function //

        function show(num1) {
            var node = document.createElement("li");
            var textnode = document.createTextNode(+num1);
            node.appendChild(textnode);
            document.getElementById("list").appendChild(node);
            // console.log(num1);
        }


        // Odd/Even Condition & Recursion Checking Function //



        function recurOdd(number1, number2) {

            if (number1 % 2 != 0) {
                show(number1);
            }

            if (number1 < number2) {
                recurOdd(++number1, number2);
            }
        }

        function recurEven(number1, number2) {

            if (number1 % 2 == 0) {
                show(number1);
            }

            if (number1 < number2) {
                recurEven(++number1, number2);
            }
        }



        // Button Called Function //

        function odd(number1, number2) {

            if (number1 < 0 || number2 < 0) {
                alert('Invalid Input');
            } else {
                document.getElementById("list").innerHTML = ' ';
                recurOdd(number1, number2);
            }
        }


        function even(number1, number2) {
            if (number1 < 0 || number2 < 0) {
                alert('Invalid Input');
            } else {
                document.getElementById("list").innerHTML = ' ';
                recurEven(number1, number2);
            }
        }