const menuList = document.querySelector("#menu-list");
const totalPriceElement = document.getElementById("total-price");
let totalAmount = 0; // Initialize total amount
let cartItems = []; // Initialize cart items array

const itemList = [
    {
        title: "Blueberry Cold Coffee",
        imgSrc: "/images/blueberrycoldcoffee.jpeg",  
        price: 50,
        desc: "Cold coffee with blueberry flavor; fruity refreshment.",
        tags: ["Beverage", "Chilled", "Coffee"]

    },
    {
        title: "Lemon Iced Tea",
        imgSrc: "/images/LemonIcedTea.jpg", 
        price: 50,
        desc: "Refreshing iced tea with a zesty lemon twist.                     . ",
        tags: ["Beverage", "Chilled", "Tea"]

    }, 
    {
        title: "Veg. Puff",
        imgSrc: "/images/2.jpeg",
        price: 50,
        desc: "Crispy pastry with seasoned vegetables; perfect snack!.",
        tags: ["Vegetarian", "Snack", "Baked", "Healthy"]
    },
    {
        title: "Cheesa Fan Fries",
        imgSrc: "/images/cheesa fan fries.jpg",
        price: 50,
        desc: "Crispy fries topped with gooey, melted cheese.",
        tags: ["Snack", "Cheesy", "Vegetarian", "Crispy"]
    },
    {
        title: "Mexican burger",
        imgSrc: "/images/Mexican burger.jpg",
        price: 50,
        desc: "Spicy burger with veggies, salsa, and jalapeños!",
        tags: ["Spicy", "Vegetarian", "Mexican", "Burger"]
    },
    {
        title: "Margarita pizza",
        imgSrc: "/images/Cheese Maggi.jpg",
        price: 50,
        desc: "Classic Maggi noodles cooked with gooey melted cheese for a rich, creamy flavor.",
        tags: ["Snack", "Comfort Food", "Cheesy", "Vegetarian"]
    },
    {
        title: "Margarita pizza",
        imgSrc: "/images/Cheese Nachos.jpg",
        price: 50,
        desc:  "Crunchy nachos topped with creamy melted cheese, perfect for a flavorful snack.",
        tags: ["Snack", "Vegetarian", "Cheesy", "Crispy"]
    },
    {
        title: "Cheese Sandwich",
        imgSrc: "/images/Cheese Sandwich.jpg",
        price: 50,
        desc:  "Grilled to perfection, this sandwich is packed with melted cheese between crispy bread slices.",
        tags: ["Snack", "Vegetarian", "Grilled", "Cheesy"]
    },
    {
        title: "Samosa",
        imgSrc: "/images/Samosa.jpg",
        price: 50,
        desc: "Crunchy pastry filled with spiced potatoes and peas, perfect for snacking.",
        tags: ["Vegetarian", "Fried", "Snack", "Spicy"]
    },
    {
        title: "Vada Pav",
        imgSrc: "/images/Vada Pav.jpg",
        price: 50,
        desc: "Spicy potato fritter in a soft bun.",
        tags: ["Vegetarian", "Street Food", "Spicy", "Indian"]
    },
    {
        title: "Manchurian Cheese Frankie",
        imgSrc: "/images/Manchurian Cheese Frankie.jpg",
        price: 50,
        desc: "Delicious rolled flatbread filled with spicy Manchurian and gooey cheese.",
        tags: ["Vegetarian", "Spicy", "Street Food", "Indian"]
    },
    // Add more items as needed
];

itemList.forEach((item) => {
    // Create the main card container
    const menuCard = document.createElement('div');
    menuCard.classList.add('rounded-lg', 'border', 'bg-card', 'text-card-foreground', 'shadow-sm', 'menu-card');

    // Create the image container
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('flex', 'flex-col', 'space-y-1.5', 'p-6', 'pb-3');

    const itemImg = document.createElement('img');
    itemImg.src = item.imgSrc;
    itemImg.alt = item.title;
    itemImg.classList.add('rounded-t-lg', 'object-cover');
    itemImg.style.aspectRatio = '300 / 200';
    itemImg.style.objectFit = 'cover';
    itemImg.width = 300;
    itemImg.height = 200;

    imgContainer.appendChild(itemImg);
    menuCard.appendChild(imgContainer);

    // Create the content container
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('p-6');

    // Title and Price
    const titlePriceContainer = document.createElement('div');
    titlePriceContainer.classList.add('flex', 'items-center', 'justify-between');

    const itemTitle = document.createElement('h3');
    itemTitle.classList.add('text-lg', 'font-medium');
    itemTitle.textContent = item.title;

    const itemPrice = document.createElement('span');
    itemPrice.classList.add('text-primary', 'font-medium');
    itemPrice.innerHTML = `&#8377;${item.price}`;

    titlePriceContainer.appendChild(itemTitle);
    titlePriceContainer.appendChild(itemPrice);
    contentContainer.appendChild(titlePriceContainer);

    // Description
    const itemDesc = document.createElement('p');
    itemDesc.classList.add('text-muted-foreground', 'text-sm');
    itemDesc.textContent = item.desc;
    contentContainer.appendChild(itemDesc);

    // Tags
    if (item.tags && item.tags.length > 0) {
        const tagsContainer = document.createElement('div');
        tagsContainer.classList.add('flex', 'items-center', 'gap-2', 'mt-2');

        item.tags.forEach(tag => {
            const tagElement = document.createElement('div');
            tagElement.classList.add(
                'inline-flex',
                'w-fit',
                'items-center',
                'whitespace-nowrap',
                'rounded-full',
                'border',
                'px-2.5',
                'py-0.5',
                'font-semibold',
                'text-xs',
                'bg-secondary',
                'text-secondary-foreground'
            );
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });

        contentContainer.appendChild(tagsContainer);
    }

    menuCard.appendChild(contentContainer);

    // Quantity Selector and Add to Cart Button
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('flex', 'items-center', 'p-6');

    // Create quantity input
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = 1; // Default value
    quantityInput.min = 1; // Minimum value
    quantityInput.classList.add('border', 'rounded-md', 'w-16', 'text-center', 'mr-2');

    // Create Add to Cart button
    const addButton = document.createElement('button');
    addButton.classList.add(
        'inline-flex',
        'items-center',
        'justify-center',
        'text-sm',
        'font-medium',
        'bg-primary',
        'text-primary-foreground',
        'hover:bg-primary/90',
        'h-9',
        'rounded-md',
        'px-3',
        'w-full'
    );

    // SVG Icon
    addButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="h-4 w-4 mr-2">
            <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
            <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
            <path d="M2 7h20"></path>
            <path
                d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7">
            </path>
        </svg>
        Add to Cart
    `;

    // Add event listener for the button
    addButton.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value, 10); // Get quantity from input
        const itemTotal = item.price * quantity; // Calculate item total
        totalAmount += itemTotal; // Update total amount
        totalPriceElement.textContent = `Total: ₹${totalAmount}`; // Update total price display
        
        // Add item to cart
        const cartItem = {
            title: item.title,
            price: item.price,
            quantity: quantity,
            total: itemTotal
        };
        cartItems.push(cartItem); // Add item to cart
        console.log(`${quantity} of ${item.title} added to cart. Current Total: ₹${totalAmount}`);
        displayCart();
    });

    buttonContainer.appendChild(quantityInput);
    buttonContainer.appendChild(addButton);
    menuCard.appendChild(buttonContainer);

    // Append the card to the menu list
    menuList.appendChild(menuCard);
});

// Function to display cart items
function displayCart() {
    const cartContainer = document.querySelector("#cart-items"); // Create a div for cart items in your HTML
    cartContainer.innerHTML = ""; // Clear existing items

    cartItems.forEach((cartItem, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item', 'flex', 'justify-between', 'items-center', 'p-2', 'border-b');

        cartItemDiv.innerHTML = `
            <div>${cartItem.title} - ₹${cartItem.price} x ${cartItem.quantity} = ₹${cartItem.total}</div>
            <button class="remove-button bg-red-500 text-white px-2 rounded" data-index="${index}">Remove</button>
        `;
        cartContainer.appendChild(cartItemDiv);
    });

    // Update the total price display
    totalPriceElement.textContent = `Total: ₹${totalAmount}`;
    addRemoveButtonListeners(); // Re-add event listeners for remove buttons
}

// Add event listeners for remove buttons
function addRemoveButtonListeners() {
    const removeButtons = document.querySelectorAll(".remove-button");
    removeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index'); // Get index of the item to remove
            totalAmount -= cartItems[index].total; // Update total amount
            cartItems.splice(index, 1); // Remove item from cart
            displayCart(); // Refresh cart display
            console.log(`Removed ${cartItems[index].title} from cart. Current Total: ₹${totalAmount}`);
        });
    });
}
