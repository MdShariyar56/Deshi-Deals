// Helper function to get element by id
function getElement(id){
    return document.getElementById(id);
}

// All Add to Cart buttons
const cardBtns = document.getElementsByClassName("card-btn");

// Total price and quantity elements
const totalPriceEl = getElement("total-price");
const totalQuantityEl = getElement("total-Quantity");

// Cart container
const cardContainer = getElement("card-container");

for(let btn of cardBtns){
    btn.addEventListener("click", function() {
        // Find the card parent
        const card = btn.closest(".card");

        // Get product details
        const productImg = card.querySelector("img").src;
        const productTitle = card.querySelector(".card-title").innerText;
        const productPrice = Number(card.querySelector("span").innerText);

        // Update total price
        const currentTotal = Number(totalPriceEl.innerText) + productPrice;
        totalPriceEl.innerText = currentTotal;

        // Update total quantity
        const currentQuantity = Number(totalQuantityEl.innerText) + 1;
        totalQuantityEl.innerText = currentQuantity;

        // Create new cart item
        const newCart = document.createElement("div");
        newCart.classList.add("bg-gray-200", "rounded-xl", "flex", "justify-between", "p-4", "mb-3");
        newCart.innerHTML = `
            <img src="${productImg}" alt="" class="w-10 rounded"/>
            <div class="ml-2 flex flex-col">
                <h2 class="font-bold">${productTitle}</h2>
                <h2>${productPrice} TK</h2>
            </div>
        `;

        // Append to cart container
        cardContainer.appendChild(newCart);
    });
}
