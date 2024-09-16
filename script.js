const fruitContent = {
    "mleko": 5, "milk": 5,
    "jogurt": 4, "yogurt": 4,
    "kefir": 3.5,
    "twaróg": 3, "cottage cheese": 3,
    "skyr": 3,
    "ser feta": 3, "feta cheese": 3,
    "mozzarella": 1.5,
    "ricotta": 4,
    "cheddar": 0.5, 
    "gouda": 0.5, 
    "parmesan": 0.5,
    "brie": 0.5, 
    "camembert": 0.5, 
    "roquefort": 0.5, 
    "swiss cheese": 0.5, 
    "ser szwajcarski": 0.5, 
    "colby": 0.5, 
    "masło": 0.5, 
    "butter": 0.5,  
    "śmietana": 3.5, 
    "sour cream": 3.5, 
    "lody": 6.5,  
    "ice cream": 6.5, 
};

//translation
const translations = {
    pl: {
        title: "zawartość laktozy w nabiale (w 100g)",
        hint: "ⓘ użyj liczby pojedynczej, np. zamiast \"jogurty\" ➔ \"jogurt\"",
        placeholder: "nazwa nabiału",
        button: "sprawdź",
        noInfo: "brak info lub to nie nabiał",
        low: "mało",
        high: "dużo",
        footer: "by kalafioreg"
    },
    en: {
        title: "lactose content in dairy (per 100g)",
        hint: "ⓘ use singular form, e.g. instead of \"yogurts\" ➔ \"yogurt\"",
        placeholder: "dairy name",
        button: "check",
        noInfo: "no info or not a dairy",
        low: "low",
        high: "high",
        footer: "by kalafioreg"
    }
};

//languages
function updateLanguage(language) {
    document.getElementById('mainTitle').textContent = translations[language].title;
    document.getElementById('subTitle').textContent = translations[language].hint;
    document.getElementById('fruitInput').placeholder = translations[language].placeholder;
    document.getElementById('checkButton').textContent = translations[language].button;

    document.getElementById('flagPl').classList.remove('selected-flag');
    document.getElementById('flagEn').classList.remove('selected-flag');

    if (language === 'pl') {
        document.getElementById('flagPl').classList.add('selected-flag');
    } else if (language === 'en') {
        document.getElementById('flagEn').classList.add('selected-flag');
    }
}

document.getElementById('flagPl').addEventListener('click', function() {
    updateLanguage('pl');
});

document.getElementById('flagEn').addEventListener('click', function() {
    updateLanguage('en');
});

//fructose
function checkFructose() {
    const fruit = document.getElementById("fruitInput").value.toLowerCase();
    const resultElement = document.getElementById("result");
    const fructose = fruitContent[fruit];

    const currentLanguage = document.getElementById('checkButton').textContent === "sprawdź" ? 'pl' : 'en';

    if (fructose === undefined) {
        resultElement.textContent = translations[currentLanguage].noInfo;
        resultElement.style.color = "black";
    } else {
        const type = fructose <= 4 ? translations[currentLanguage].low : translations[currentLanguage].high;
        const color = fructose <= 4 ? "#78c93e" : "red";
        resultElement.textContent = `${type} (${fructose} g)`;
        resultElement.style.color = color;
    }
}

document.getElementById("fruitInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        checkFructose();
    }
});
