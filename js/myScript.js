function loadData(product1) {
  const contentDiv = document.getElementById("content");

  let imageUrl, description;

  if (product1 === "iphone XS") {
    imageUrl = "images/xs.png";
    description =
      "The Apple iPhone XS, introduced in September 2018, is a sophisticated and powerful smartphone that exemplifies Apple's commitment to cutting-edge technology and elegant design. Featuring a sleek glass and stainless steel body, the iPhone XS showcases a stunning 5.8-inch Super Retina OLED display with True Tone technology and wide color (P3) support, delivering vibrant visuals and an immersive viewing experience. Powered by the A12 Bionic chip, this device ensures exceptional performance and efficiency, making multitasking and high-performance gaming a breeze. The iPhone XS is equipped with a dual 12 MP rear camera system that captures sharp, detailed photos and 4K videos, while the 7 MP front-facing camera enables Face ID and Portrait Mode selfies. With an IP68 rating for water and dust resistance, impressive battery life, and various storage options up to 512 GB, the iPhone XS combines style and substance to meet the needs of discerning users.";
  } else if (product1 === "iphone XS Max") {
    imageUrl = "images/xs_max.png";
    description =
      "The Apple iPhone XS Max, launched in September 2018, stands out as a premium flagship device designed for those who crave a larger, more immersive smartphone experience. With its expansive 6.5-inch Super Retina OLED display, the iPhone XS Max delivers stunning visuals and vibrant colors, thanks to True Tone technology and wide color (P3) support. The device is powered by the robust A12 Bionic chip, which ensures exceptional performance and efficiency for multitasking and demanding applications. The iPhone XS Max features a dual 12 MP rear camera system, capable of capturing high-resolution photos and 4K videos with remarkable detail and clarity. The 7 MP TrueDepth front camera facilitates Face ID and Portrait Mode selfies. Its sleek glass and stainless steel design, combined with an IP68 rating for water and dust resistance, offer both elegance and durability. The iPhone XS Max provides impressive battery life, with up to 20 hours of talk time and supports fast and wireless charging. Available in storage options up to 512 GB, this device is perfect for users who desire a blend of style, power, and expansive display.";
  } else if (product1 === "iphone 8s Plus") {
    imageUrl = "images/8plus.png";
    description =
      "The Apple iPhone 8 Plus, released in September 2017, is a robust and stylish smartphone that combines classic design with modern technology. Sporting a 5.5-inch Retina HD display, the iPhone 8 Plus offers sharp and vibrant visuals with True Tone technology that adjusts the screen's white balance to match the surrounding light. Under the hood, it is powered by the A11 Bionic chip, which delivers smooth performance and efficiency for everyday tasks and demanding applications. The iPhone 8 Plus features a dual 12 MP rear camera system with wide and telephoto lenses, allowing for high-quality photos and 4K video recording, as well as Portrait Mode with advanced lighting effects. The 7 MP front-facing camera supports Portrait Mode selfies and features an enhanced sensor for better low-light performance. Encased in a glass body with an aluminum frame, the iPhone 8 Plus is both stylish and durable, offering an IP67 rating for water and dust resistance. It includes up to 256 GB of storage, supports fast charging and wireless charging, and provides a reliable battery life for a full day of use. The iPhone 8 Plus is ideal for users seeking a blend of powerful performance and classic aesthetics.";
  } else if (product1 === "iphone SE") {
    imageUrl = "images/se.png";
    description =
      "The Apple iPhone SE (2nd generation), launched in April 2020, is a compact and affordable smartphone that brings together classic design with modern performance. Featuring a 4.7-inch Retina HD display, the iPhone SE delivers vibrant colors and sharp text, enhanced by True Tone technology for a natural viewing experience. Powered by the A13 Bionic chip, the same processor found in the iPhone 11 series, this device offers impressive performance and efficiency, ensuring smooth operation for apps, games, and multitasking. The iPhone SE comes with a 12 MP rear camera capable of capturing high-quality photos and 4K videos, along with Portrait Mode for enhanced depth and detail. The 7 MP front-facing camera supports Portrait Mode selfies and features improved sensor technology for better low-light performance. The device is housed in a sleek aluminum and glass body, with an IP67 rating for water and dust resistance. Offering storage options up to 256 GB, the iPhone SE supports fast charging and wireless charging, making it a powerful yet compact choice for users who value performance and portability without breaking the bank.";
  } else if (product1 === "priceForLoop") {
    description = "Average price of iPhones: $999.";
  } else if (product1 === "Price higher than 1000") {
    imageUrl = ""; // Optionally set a default image
    description =
      "iPhones with prices higher than $1000 include the iPhone XS Max and iPhone 12 Pro.";
  } else if (product1 === "Price lower than 800") {
    imageUrl = ""; // Optionally set a default image
    description = "iPhones with prices lower than $800 include the iPhone SE.";
  } else {
    imageUrl = "";
    description = "Product not found.";
  }

  contentDiv.innerHTML = `
        <div style="display: flex; justify-content: center;">
            <img src="${imageUrl}" alt="${product1}" style="width: 420px; height: auto;">
        </div>
        <p>${description}</p>
      `;
}

// average price ================================================

const products = [
  "Iphone XS - $1,349",
  "Iphone XS - $1,449",
  "Iphone XS - $999",
  "Iphone 8 plus - $599",
  "Iphone SE - $399",
];

function priceForLoop() {
  let productListHtml = "";

  for (let i = 0; i < products.length; i++) {
    productListHtml += `<div id="content-item" style="margin-top: 10px">${products[i]}</div>`;
  }

  document.getElementById("content").innerHTML = productListHtml;
}

// highest price =============================================

function priceHigher() {
  const prices = [1349, 1449, 999, 599, 399];
  let resultHTML = "";

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > 1000) {
      resultHTML += `<div>${products[i]}</div>`;
    }
  }

  document.getElementById("content").innerHTML = resultHTML;
}

function priceLower() {
  const prices = [1349, 1449, 999, 599, 399];
  let resultHTML = "";

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < 1000) {
      resultHTML += `<div>${products[i]}</div>`;
    }
  }

  document.getElementById("content").innerHTML = resultHTML;
}

// form data and birth =======================

const daySelect = document.getElementById("day");
for (let i = 1; i <= 31; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.text = i;
  daySelect.appendChild(option);
}

// Populate years from the current year back to 1900
const yearSelect = document.getElementById("year");
const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= 1900; i--) {
  let option = document.createElement("option");
  option.value = i;
  option.text = i;
  yearSelect.appendChild(option);
}

//============== password check =================

function checkPassword() {
  var password = document.getElementById("fpassword").value;
  var rePassword = document.getElementById("frepassword").value;

  if (password !== rePassword) {
    alert("Password Mismatch!");
    return false;
  } else {
    alert("Success!");
    return true;
  }
}

//================= check box ================

function enableButton() {
  var checkbox = document.getElementById("privacyPolicy");
  var submitButton = document.getElementById("submitButton");

  if (checkbox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
