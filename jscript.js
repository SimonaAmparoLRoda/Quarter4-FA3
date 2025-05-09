var shape = "";
        var x;
        while (isNaN(x)) {
        var x = parseInt(prompt("Please enter a number."));
        }

        if(x % 2 == 0) {
            document.getElementById("out").innerHTML = triangle(x);
        }
        else {
            document.getElementById("out").innerHTML = rectangle(x);
        }

        function triangle(x) {
            for(i=x; i>=1; i--) {
                for(j=1; j<=i; j++) {
                    shape += j + " ";
                }
                shape += "<br>";
            }
            return shape;
        }

        function rectangle(x) {
            for (i=x; i>=1; i--) {
                    for (j=1; j<=x; j++) {
                        shape += i + " ";
                    }
                    shape += "<br>";
            }
            return shape;
        }

        var contactsList = [];

        function addContact() {
            var c = document.getElementById("input").value;

            if (contactsList.length == 7) {
                contactsList.shift();
            }
            contactsList.push(c);
            document.getElementById("contacts").innerHTML = contactsList.join(" ");
            return false;
        }

        function delContact() {
            contactsList.pop();
            document.getElementById("contacts").innerHTML = contactsList.join(" ");
            return false;
        }