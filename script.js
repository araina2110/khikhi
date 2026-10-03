/* =========================
   ENVELOPE
   ========================= */

/*
   Find the envelope in our HTML.
*/

const envelope = document.querySelector(".envelope");


/*
   When the envelope is clicked,
   add the class "open".
*/

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

});

/* =========================
   LOAD MEMORIES BUTTON
   ========================= */

const loadMemories = document.querySelector("#load-memories");

loadMemories.addEventListener("click", (event) => {

    // Prevent the click from opening the envelope again
    event.stopPropagation();

    // Hide the envelope page
    document.querySelector(".envelope-page").style.display = "none";

    // Show the jar page
    document.querySelector(".jar-page").style.display = "flex";

});

/* =========================
   MEMORIES
   ========================= */

const memoryCard = document.querySelector("#memory-card");
const memoryImage = document.querySelector("#memory-image");
const memoryTitle = document.querySelector("#memory-title");
const memoryText = document.querySelector("#memory-text");


const memories = {

    1: {
        title: "playing minecraft with you",
        image: "memory11.jpeg",
        text: "i LOVELOVELOVE playing minecraft with you sooo much. it's like our game. anytime i play without you it just feels boring and i start to miss you sosososoo much."
    },

    2: {
        title: "gentleman services",
        image: "memory12.jpeg",
        text: "I LOVEVEVE WHEN YOU DO ABSOLUTELY ANYTHINGG FOR ME LIKE BE IT JUST OPENING THE DOOR FOR ME, OR TYING MY SHOE LACES OR UH I DONT KNOW JUST ANYTHINGGG. I FEEL SO LOVED AND TAKEN CARE OF AT THAT MOMENT."
    },

    3: {
        title: "listening skills",
        image: "memory8.jpeg",
        text: "I ABSOLUTELY LOVE WHEN YOU LISTEN TO ME LIKE A GOODBOY AND JUST HEAR ME RANT OR YAP SOME BULLSHIT AND YOU JUST NOD YOUR HEAD CUTELY AND AGREE WITH WHATEVER CRAP I SAW. ALSO YEH JABKI PHOTO HAI YOU TOLD KI YOURE CONCERNED FOR ME AND TERKO DARR LAG RHA HAI MAI GIRVIR NA JAU IDK BUTTERFLIES AAGYE THE VAHI BAAT HAI NA YOU MAKE ME FEEL SO LOVEDDD AND SEENNN AND TAKEN CAREEE OF."
    },

    4: {
        title: "picking me up specifically like this",
        image: "memory13.jpeg",
        text: "I HATE TO ADMIT IT BUT I LOVE WHEN YOU UTHAO ME AISE SPECIFICALLY, LIKE OKAY MY STRONG BOY. HEHEHHE I MEAN I DO FEEL SHIT SCARED BUT I KNOW THAT YOU WOULDN'T DROP ME. I LOVE BEING THAT CLOSE TO YOUR FACEEE. ALSO THIS PIC IS OF WHEN YOU FIRST CAME TO MEET ME IN MY SOCIETY, AND THAT IS LITERALLY ONE OF THE BEST DAYS IN MY LIFE."
    },

    5: {
        title: "holding cheeks",
        image: "memory9.jpeg",
        text: "I LOVEVEE TO HOLD YOUR CHEEKSSS ANDDD KISSS YOUUU POOREE FACEEE PAIIII. LIKE YOUR FACE IS SO CUTUCUTU AND SQUISHYSQUISHY I LOVEE TO PLAY WITH IT YOU LOOK SO CUTU ONGGG. I HATE HOW INSECURE YOU ARE AND HOW LOWLY YOU THINK OF YOURSELF. YOUREEE GORGEOUS IN MY EYES."
    },

    6: {
        title: "you+rain=arainaheppi",
        image: "memory1.jpeg",
        text: "BEING WITH YOU WHEN IT RAINS IS SOO FUNNN. LIKE I DONT KNOW IF YOU FEEL THE SAME WAY BUT I LOVE BEING WITH YOU WHEN IT RAINS. LIKE THE TIME WHEN WE WERE AT THE SWINGS WHEN IT WAS RAINING AND DOING RANDOM BAKCHODI AND LIGHETNING PADHRI THI AND THIS DAY AS WELL WAS SO CUTUCUTU."
    },

    7: {
        title: "khikhikhi",
        image: "memory2.jpeg",
        text: "I LOVEVEE LAUGHINGG WITH YOU SO MUCH. WE ARE LITERALLY THE COUPLE WHO LAUGH ALL DAY LIKE POORE TIME BAS KHIKHIKHI AND I ADORE THIS THING SO MUCH BECAUSE WAHT DO YOU MEAN I HAVE SOMEONE WITH EXACT SAME SENSE OF HUMOUR AS MINE AND MATCHES MY ENERGY."
    },

    8: {
        title: "JISM HEHE",
        image: "memory7.jpeg",
        text: "MUEHEHEHHEEHE YEH JO AAPKA ITNA SEXY JISM HAI NA, CHHUPAAKE RAKHA KARO MAI KUCH GALAT KRDUNGI AAPKE SAATH. KITNE MAST BICEPS HAI TERE BRO. AND TBH KUCH TIME PAI TOH TERI CHEST MUJHSE BADI HOJAYEGIIII BALLE BALLE MAST BOOBS DABAUNGI TEREEEE."
    },

    9: {
        title: "heheh ashleelpana",
        image: "memory3.jpeg",
        text: "KHIKHIKHI I LOVEEE KISSINGNGNG YOUUUU AND LIKE MAKING OUT WITH YOU AND DOING VOIII SABBABB HEHEHE KHA JAUNGI TERKO. ISPE ZYADA NHI BOLUNGI BCS UHM AISE HEHE WEBSITE KE THRU THODI CHARCHA KRUNGI ISPE SHARAM AATI HAI."
    },

    10: {
        title: "goofy",
        image: "memory4.jpeg",
        text: "I LOVE BEING GOOFY WITH YOU ISTG. THIS IS LIKE SIMILAR TO THE LAUGHING ONE EXCEPT LIKE IDK HOW TO SAY THIS. OK SO MY FAVOURITE COMPLIMENT IS WHEN SOMEONE (LIKE JAPJI) SAYS THAT WE ARE LITERALLY THE SAME PERSON LIKE BRO YOU DONT KNOW HOW MUCH THAT MEANS TO ME; KI WE HAVE SAME LEVEL OF GOOFINESS AND SAME ACTIONS AND SHITTT."
    }

};


/* =========================
   MAKE ALL STARS CLICKABLE
   ========================= */

document.querySelectorAll(".star").forEach((star, index) => {

    star.addEventListener("click", () => {

        const memoryNumber = index + 1;

        const memory = memories[memoryNumber];

        memoryImage.src = memory.image;

        memoryTitle.textContent = memory.title;

        memoryText.textContent = memory.text;

        memoryCard.style.display = "block";

    });

});


/* =========================
   CLOSE MEMORY CARD
   ========================= */

const closeMemory = document.querySelector(".close-memory");

closeMemory.addEventListener("click", () => {

    memoryCard.style.display = "none";

});

/* =========================
   FINAL MOON
   ========================= */

const moonButton = document.querySelector(".moon-button");

const finalCard = document.querySelector("#final-card");

const closeFinal = document.querySelector(".close-final");


/* OPEN FINAL MESSAGE */

moonButton.addEventListener("click", () => {

    finalCard.style.display = "block";

});


/* CLOSE FINAL MESSAGE */

closeFinal.addEventListener("click", () => {

    finalCard.style.display = "none";

});