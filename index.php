<!DOCTYPE html>
<html lang="en">

<head>
    <title>GFG- Store Data</title>
    <style>
        #pp{
            background-color:cyan;
            background-image:url("cafe.jpg");
            height : 100%;
            width : 100%;
            background-repeat:no-repeat;
            fit=cover;
        }
    </style>
</head>

<body id="pp">
    <center>
        <h1>Employee Registration Form</h1>
        <form action="insert.php" method="post">

            <p>
                <label for="firstName">Employee Name:</label>
                <input type="text" name="first_name" id="firstName">
            </p>


            <p>
                <label for="lastName">Employee's Last Name:</label>
                <input type="text" name="last_name" id="lastName">
            </p>


            <p>
                <label for="Gender">Gender:</label>
                <input type="text" name="gender" id="Gender">
            </p>


            <p>
                <label for="Address">Address:</label>
                <input type="text" name="address" id="Address">
            </p>


            <p>
                <label for="emailAddress">Email Address:</label>
                <input type="text" name="email" id="emailAddress">
            </p>

            <input type="submit" value="Submit">
        </form>
    </center>
</body>

</html>