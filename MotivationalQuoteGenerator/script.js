const quotes = {
    success: [
        "Do the best you can until you know better. Then when you know better, do better.",
        "The only place where success comes before hard work is in the dictionary.",
        "Strive not to be a success, but rather to be a value.",
        "Try not to become a man of success, Rather become a man of value.",
        "Success is stumbling from failure with no loss of enthusiasm.",
        "Don't spend time beating on a wall, hoping to transform it into a door.",
        "It is hard to fail, but it is."

    ],
    selflove: [
        "No other love no matter how genuine it is, can fulfill one's heart better than unconditional self-love.",
        "To fall in love with yourself is the first secret to happiness.",
        "Keep taking time for yourself untill you're you are you again.",
        "The things that make me different are the thinhs that make me.",
        "You are you, and that's enough."
    ],
    education: [
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "it does not matter how slowly you go as you don't stop.",
        "Believe you can and you're halfway there.",
        "The greatest glory in living lies not in never failing, But in raising every time we fall.",
        "The harder the battle, the sweeter the victory.",
        "You miss 100% of the shots you don't take.",
        "The only way to do great work is to love what you do.",
        "Failure is simply the opportunity to begin again, this time more intelligently."


    ],
   mentalhealth: [
    "Your mental health is just as important as your physical health.",
    "It's ok not to be ok.",
    "Your are not your mental illness.",
    "Your struggles do not define you.",
    "Taking care of your mental health is an act of self-love.",
    "You are worthy of happiness and peace of mind."
   ]
};

const quoteElement = document.getElementById('quote');
const generateButton = document.getElementById('generate-quote');
const favoriteButton = document.getElementById('save-favorite');
const shareButton = document.getElementById('share-quote');
const favoriteList = document.getElementById('favorite-quotes-list');
const categoryButtons = document.querySelectorAll('.category-button');
const quoteBox = document.getElementById('quote-box');
const favoriteBox = document.getElementById('favorite-box');
const openFavoritesButton = document.getElementById('open-favorites');
const closeFavoritesButton = document.getElementById('close-favorites');


let currentCategory = '';
let favoriteQuotes = [];


categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentCategory = button.getAttribute('data-category');
        quoteBox.classList.remove('hidden');
        generateQuote();
    });
});
generateButton.addEventListener('click', () => {
    generateQuote();

});


function generateQuote() {
    console.log(`Current category: ${currentCategory}`);
    const quotesArray = quotes[currentCategory];
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    quoteElement.textContent = quotesArray[randomIndex];
}

favoriteButton.addEventListener('click', () => {
    if (!favoriteQuotes.includes(quoteElement.textContent)) {
        favoriteQuotes.push(quoteElement.textContent);
        updateFavoriteList();

    }
});

function updateFavoriteList() {
    favoriteList.innerHTML = '';
    favoriteQuotes.forEach(quote => {
        const li = document.createElement('li');
        li.textContent = quote;
        favoriteList.appendChild(li);
    });
}

shareButton.addEventListener('click', () => {
    Navigator.clipboard.writeText(quoteElement.textContent)
            .then(() => alert(`Quote copied to clipboard!`))
            .cach(err => console.error('Failed to copy:', err));
    alert(`Quote: "${quoteElement.textContent}" copied to clipboard!`);

});

openFavoritesButton.addEventListener('click', () => {
    favoriteBox.classList.remove('hidden');
});

closeFavoritesButton.addEventListener('click', () => {
    favoriteBox.classList.add('hidden');
});