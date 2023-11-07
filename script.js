
var products = [
    {
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtLqGWxKyFsKZKqt5K7rzd4nalW7xr_66sfw&usqp=CAU",
      name: "iphone13",
    },
    {
      image:
        "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-14-red-back.png?v=38",
      name: "iphone14",
    },
    {
      image:
        "https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?w=900&t=st=1699052251~exp=1699052851~hmac=cbd82c98a74caca624155353d9ca759be4cbf7393a7757c3768ca5184f8209d0",
      name: "iphone15",
    },
  ];
  var cards = document.getElementById("cards");
  var cartDiv = document.getElementById("cart-products-div");
  var howManyItemsSelected = 1;
  console.log(cartDiv);
  function displayItems() {
    for (let i = 0; i < products.length; i++) {
      var box = document.createElement("div");
      var image = document.createElement("img");
      image.style.width = "150px";
      image.style.objectFit = "cover";
      var para = document.createElement("p");
      var textnode = document.createTextNode(products[i].name);
      para.appendChild(textnode);
      image.setAttribute("src", products[i].image);
      box.appendChild(image);
      box.appendChild(para);
      var cta = document.createElement("button");
      cta.setAttribute("class", "product-btn");
      var buttonTextNode = document.createTextNode("Add to Cart");
      cta.appendChild(buttonTextNode);
      cta.addEventListener("click", () => {
        addToCart(products[i].name);
      });
      box.appendChild(cta);
      box.setAttribute("class", "product-holder");
      console.log(box);
      cards.appendChild(box);
    }
  }

  function addToCart(productName) {
    var cartProduct = cartDiv.querySelector(
      `.cart-product[data-name="${productName}"]`
    );
    if (cartProduct) {
      var howMany = cartProduct.querySelector(".how-many");
      howMany.textContent = parseInt(howMany.textContent) + 1;
    } else {
      var cartProductDiv = document.createElement("div");
      cartProductDiv.setAttribute("class", "cart-product");
      cartProductDiv.setAttribute("data-name", productName);

      var productNameElement = document.createElement("p");
      productNameElement.setAttribute("class", "product");
      productNameElement.innerHTML = productName;

      var howManyElement = document.createElement("p");
      howManyElement.setAttribute("class", "how-many");
      howManyElement.innerHTML = "1";

      cartProductDiv.appendChild(productNameElement);
      cartProductDiv.appendChild(howManyElement);

      cartProductDiv.style.display = "flex";
      cartProductDiv.style.justifyContent = "space-around";

      cartDiv.appendChild(cartProductDiv);
    }
  }

  displayItems();

  // local storage
  // session storage

