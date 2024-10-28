<!DOCTYPE html>
<html>
  <head>
    <title>My Shopping Cart</title>
    <link rel="stylesheet" href="styles/style.css" />
  </head>
  <body>
    <center>
      <img src="images/cart.png" alt="cart" width="200px" height="200px" />
      <h2>Shopping Cart</h2>
      <h3>The online shopping store</h3>
    </center>
    <hr id="test1" />
    <ul class="nav">
      <li><a href="index.html">Home</a></li>
      <li><a href="news.html">News</a></li>
      <li><a href="register.html">Contact</a></li>
      <li><a href="about.php">About Us</a></li>
    </ul>

    <?php 
        $name = "The online shopping store";
        echo "<h1>" .$name. "</h1>";
        echo "<p>Welcome to " . $name . ", your one-stop destination for a seamless and enjoyable online shopping experience! 
        We bring together a curated collection of high-quality products across various categories, ensuring that you find exactly what 
        you need at the best prices. At " . $name . ", we prioritize customer satisfaction, offering reliable and prompt service, easy 
        returns, and dedicated support to make your shopping experience smooth and stress-free.

        With a vast range of items, from the latest fashion trends to top-notch electronics, our platform is designed to cater to your 
        every need and desire. Our easy-to-navigate website, paired with secure payment options, ensures that you have a hassle-free 
        shopping journey from start to finish. 

        Whether you're shopping for yourself or looking for the perfect gift for someone special, " . $name . " has something for everyone. 
        Thank you for choosing us as your trusted shopping partner!</p>";

        $sold = 75;
        $total = 100;

        echo "<h3>The Shopping Cart</h3>";
        echo "No of Sold Items: " . $sold . "<br>";
        echo "No of Total Items: " . $total;

        function findPercentage() {
            global $sold, $total; 
            $percentage = ($sold / $total) * 100; 
            return $percentage; 
        }
        
        $percentage = findPercentage();
        
        echo "<br><br>Percentage of sold items: " . $percentage . "%";

        $today = "Today is " . date("Y-m-d");

        echo "<br><br>". $today;

        $status = "";
        $shipDay = "2019-09-21";

        if ($today >= $shipDay) {
            $status = "SHIPPED";
        } else {
            $status = "TO BE SHIPPED";
        }

        echo "<br><br>Ship day is $shipDay, $sold items have $status.";

        $items = [
            "Iphone Xs" => 27,
            "Iphone X" => 30,
            "Iphone XS Max" => 12,
            "Iphone XR" => 29
        ];
        function loopUsingWhile($items) {
            echo "<br><br>Using While Loop:<br>";
            $keys = array_keys($items);
            $i = 0;
            while ($i < count($keys)) {
                $key = $keys[$i];
                echo "Item: " . $key . " - No of sold items: " . $items[$key] . "<br>";
                $i++;
            }
        }
        
        loopUsingWhile($items);
    ?>

    <hr id="test2" />
    <center>
      <h3>Created by : Yuwantha Ravihara</h3>
      <a href="https://courseweb.sliit.lk/my/">Visit our Course</a>
    </center>
  </body>
</html>
