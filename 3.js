function calculateTotal() {
    // Get all the price and discount input fields
    const prices = document.querySelectorAll('.price');
    const discounts = document.querySelectorAll('.discount');
    
    // Initialize total price
    let total = 0;

    // Loop through each row to calculate the total price after discounts
    prices.forEach((priceInput, index) => {
        let price = parseFloat(priceInput.value);
        let discount = parseFloat(discounts[index].value);
        total += price - discount;
    });

    // Update the total price in the UI
    document.getElementById('totalPrice').textContent = total.toFixed(2);
}
