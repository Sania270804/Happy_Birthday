/* =========================================
   HAPPY BIRTHDAY LAIBA 💕
   REAL 3D BOOK SYSTEM
   FULLY UPDATED VERSION
   40 PAGES
   PAGES 8–32 = PHOTO MEMORY CARDS
========================================= */


/* =========================================
   GET HTML ELEMENTS
========================================= */

const introScreen =
    document.getElementById("introScreen");

const mainContainer =
    document.getElementById("mainContainer");

const openBtn =
    document.getElementById("openBtn");

const sheetsContainer =
    document.getElementById("sheetsContainer");

const prevBtn =
    document.getElementById("prevBtn");

const nextBtn =
    document.getElementById("nextBtn");

const pageCounter =
    document.getElementById("pageCounter");

const floatingElements =
    document.getElementById("floatingElements");


/* =========================================
   BOOK STATE
========================================= */

let currentSheet = 0;
let isAnimating = false;
let bookOpened = false;


/* =========================================
   40 BOOK PAGES
========================================= */

const bookPages = [

    /* ========== PAGE 1 ========== */

    {
        title: "Happy Birthday Laiba 💕",
        emoji: "🎂",
        text: `
            Today is all about you!<br><br>
            A beautiful new chapter begins today.
            Let's celebrate the wonderful
            person you are. 🌸
        `,
        type: "cover"
    },


    /* ========== PAGE 2 ========== */

    {
        title: "A Little Surprise 🎀",
        emoji: "📖",
        text: `
            Bs mery mind main ye tha k is dafa tumhain kuch special tareeqy sa wish kron to bs dekh lo tumharay liye kitab likh dali main na chalo ab agy bhi dekho sari aur dhiyan sa prhna sari pics k sath caption bhi acha na  💗
        `
    },


    /* ========== PAGE 3 ========== */

    {
        title: "Dear Laiba 💌",
        emoji: "💗",
        text: `
            May this new year of your life be filled
            with beautiful moments, happiness,
            success and countless reasons to smile.
        `
    },


    /* ========== PAGE 4 ========== */

    {
        title: "Birthday Girl 👑",
        emoji: "👸",
        text: `
            Today you officially have permission
            to feel extra special,
            because this day belongs completely to YOU!
        `
    },


    /* ========== PAGE 5 ========== */

    {
        title: "A Beautiful Soul 🌸",
        emoji: "🌷",
        text: `
            Tum main jo sb sy achi bat lgti hai na mujhy wo hai tumahra dil 
            Koi tumhain kitna hurt kr ly but us ka ehsas krna nhi chorti tum
            that is the best thing in you 
            aur han tunhara dil to mera hai na is liye bhi bht acha hai🤣🤣🤣😉😉😉😍😍😍❤️❤️❤️
        `
    },


    /* ========== PAGE 6 ========== */

    {
        title: "Keep Smiling 😊",
        emoji: "😊",
        text: `
            Tum hi ho wo jis sy main drti bhi bht hon aur pyar bhi bht krti hon 
            tumhain khony sy darti hon aur tumhari narazgi sy bhi drti hon 
            main kooshish krti hon k kuj aisa na kron jis sy k tum hurt ho but phir bhi agr kabhi 
            aisa hoa ho to us k liye dil sa sorry😊😊😊
        `
    },


    /* ========== PAGE 7 ========== */

    {
        title: "Our Beautiful Memories 📸",
        emoji: "💗",
        text: `
            And now comes the most special part
            of this little birthday book...<br><br>

            Some beautiful memories,
            one page at a time. 🎀
            In memories ka purpose tumhain aik dafa pichly do sal yad krwana tha bs
        `
    },


    /* =====================================
       PAGE 8 – MEMORY 1
    ===================================== */

    {
        type: "memory",
        image: "img1.jpeg",
        message: `
            An unforgettable day of my life 💕
        `
    },


    /* PAGE 9 – MEMORY 2 */

    {
        type: "memory",
        image: "img2.jpeg",
        message: `
            Our First chat laikin ye tum ny mujhy pori nhi bhji 🌸
        `
    },


    /* PAGE 10 – MEMORY 3 */

    {
        type: "memory",
        image: "img3.jpeg",
        message: `
            Aj tk tum sy pochy jany waly sawalon main sa sb sa acha jawab is bat ka dia tha tum ny 💗
        `
    },


    /* PAGE 11 – MEMORY 4 */

    {
        type: "memory",
        image: "img4.jpeg",
        message: `
            Hayeee Pyar ka izhar 🙈🙈
        `
    },


    /* PAGE 12 – MEMORY 5 */

    {
        type: "memory",
        image: "img5.jpeg",
        message: `
            🤣🤣😍😍❤️😊💕
        `
    },


    /* PAGE 13 – MEMORY 6 */

    {
        type: "memory",
        image: "img6.jpeg",
        message: `
            I will never 📷💗
        `
    },


    /* PAGE 14 – MEMORY 7 */

    {
        type: "memory",
        image: "img7.jpeg",
        message: `
            Jb hum ny ye pic li thi tb andaza nhi tha k ye itni special ho jaye gi🌷
        `
    },


    /* PAGE 15 – MEMORY 8 */

    {
        type: "memory",
        image: "img8.jpeg",
        message: `
            Bri mushkil sy ye pic achi ai thi....yad hai na  🤗🤗
        `
    },


    /* PAGE 16 – MEMORY 9 */

    {
        type: "memory",
        image: "img9.jpeg",
        message: `
            🤣🤣🤣🤣🤣🤣🤣 Kuj yad aya laibaaaaaaaaa
        `
    },


    /* PAGE 17 – MEMORY 10 */

   {
    type: "memory",
    image: "img10.jpeg",
    message: `
        Meri rothi Mehbooba 😉😉😉 You are always the first one for me ❤️❤️
    `
},

    /* PAGE 18 – MEMORY 11 */

    {
        type: "memory",
        image: "img11.jpeg",
        message: `
            ALLAH humari dosti ko humesha aisy hi salamat rkhy🤲🏻🤲🏻
        `
    },


    /* PAGE 19 – MEMORY 12 */

    {
        type: "memory",
        image: "img12.jpeg",
        message: `
            Another moment of my unforgettable day 💗
        `
    },


    /* PAGE 20 – MEMORY 13 */

    {
        type: "memory",
        image: "img13.jpeg",
        message: `
            Sometimes Anything can be everything fro someone😉🎉💕
        `
    },


    /* PAGE 21 – MEMORY 14 */


{
    type: "memory",
    image: "img14.jpeg",
    message: `
        Our Another Memory 🎥✨
    `
},



    /* PAGE 22 – MEMORY 15 */

    {
        type: "memory",
        image: "img15.jpeg",
        message: `
            I promise that i will always stand by you like this 🌷
        `
    },


    /* PAGE 23 – MEMORY 16 */

    {
        type: "memory",
        image: "img16.jpeg",
        message: `
            My most Favorite pic 😍😍 💕
        `
    },


    /* PAGE 24 – MEMORY 17 */

    {
        type: "memory",
        image: "img17.jpeg",
        message: `
            Hayeee is din tum ny meri kitni achi pics bnai thin na 😉😉🤣🤣💗
        `
    },


    /* PAGE 25 – MEMORY 18 */

    {
        type: "memory",
        image: "img18.jpeg",
        message: `
            Another beautiful picture with my everytime favorite person 🎀
        `
    },


    /* PAGE 26 – MEMORY 19 */

    {
        type: "memory",
        image: "img19.jpeg",
        message: `
            A favorite and unforgettable day of my life 🌸
        `
    },


    /* PAGE 27 – MEMORY 20 */

    {
        type: "memory",
        image: "img20.jpeg",
        message: `
            Kabhi hum inhi pics ko dekh k hasain gy 🤗🤗🤣🤣🤣😊💖
        `
    },


    /* PAGE 28 – MEMORY 21 */

    {
        type: "memory",
        image: "img21.jpeg",
        message: `
            Another moment with you 📖💕
        `
    },


    /* PAGE 29 – MEMORY 22 */

    {
        type: "memory",
        image: "img22.jpeg",
        message: `
            Achi ai hai na pic 😉😉😉😉 💗
        `
    },


    /* PAGE 30 – MEMORY 23 */

    {
        type: "memory",
        image: "img23.jpeg",
        message: `
            My boss 😉 main kisi ki mano na mano tumhari manni prti hai 🌷
        `
    },


    /* PAGE 31 – MEMORY 24 */

    {
        type: "memory",
        image: "img24.jpeg",
        message: `
            Bs aisy hi sath rhna humesha 🦋💕
        `
    },


    /* PAGE 32 – MEMORY 25 */

    {
        type: "memory",
        image: "img25.jpeg",
        message: `
            The best feeling and the best part of our friendship is holding each other's hands 💖
        `
    },


    /* =====================================
       PAGE 33
    ===================================== */

    {
        title: "So Many Memories 💕",
        emoji: "📸",
        text: `
            Every memory has its own little story.<br><br>

            Kesa lga sb ... sb pichli memories mind main ghoom rhi hon gi na  🌸
            bs i wish k agay bhi hum life main bhut si aisi aur is sy achi memories bnain 
            aur mazeed enjoy krain🤲🏻🤲🏻🤲🏻🤲🏻
        `
    },


    /* PAGE 34 */

    {
        title: "Keep Smiling 😊",
        emoji: "😊",
        text: `
            No matter where life takes you,
            I hope you always find reasons
            to smile and be happy. 💗
        `
    },


    /* PAGE 35 */

    {
        title: "Your Dreams 🌙",
        emoji: "🌟",
        text: `
            Dream big.
            Believe in yourself.
            Never stop working
            towards the things you truly want. 💕
        `
    },


    /* PAGE 36 */

    {
        title: "Birthday Wishes 🎂",
        emoji: "🎉",
        text: `
            May this year bring you
            happiness, success,
            peace and lots of beautiful surprises. ✨
        `
    },


    /* PAGE 37 */

    {
        title: "Stay Amazing 👑",
        emoji: "💖",
        text: `
            Keep being the wonderful,
            unique and amazing person you are.<br><br>

            Never forget your own worth. 💗
        `
    },


    /* PAGE 38 */

    {
        title: "One Last Wish 🌸",
        emoji: "💫",
        text: `
            I hope the coming year gives you
            moments so beautiful
            that you will remember them forever. 💕
        `
    },


    /* PAGE 39 */

    {
        title: "Almost The End 🎀",
        emoji: "💌",
        text: `
            This little birthday book
            is almost finished...<br><br>

            But the good wishes
            for you will never end. 💗
            aur han mujhy btana mt bhoolna k kesi lgi tumhain ye book😉😉
        `
    },


    /* ========== PAGE 40 ========== */

    {
        title: "HAPPY BIRTHDAY LAIBA 💕",
        emoji: "🎂🎉",
        text: `
            May your life always be filled with
            happiness, love, success
            and beautiful surprises.<br><br>

            Keep smiling.<br>
            Keep dreaming.<br>
            Keep shining.<br><br>

            HAPPY BIRTHDAY! 💗🎀✨<br>
            Aur han aik zroori bat to rh hi gai k
            I ❤️ U Janooooooooooooo 
        `,
        type: "final"
    }

];


/* =========================================
   TOTAL SHEETS
========================================= */

const totalSheets =
    Math.ceil(bookPages.length / 2);


/* =========================================
   CREATE PAGE CONTENT
========================================= */

function createPageContent(
    pageData,
    pageNumber
) {

    if (!pageData) {

        return `
            <div class="page-content"></div>
        `;

    }


    /* =====================================
       PHOTO MEMORY PAGE
    ===================================== */

    if (pageData.type === "memory") {

        let imageHTML;


        /*
            If an image path is added,
            display the image.
        */

        if (
            pageData.image &&
            pageData.image !== ""
        ) {

            imageHTML = `
                <img
                    src="${pageData.image}"
                    alt="Memory"
                >
            `;

        }


        /*
            Otherwise show placeholder.
        */

        else {

            imageHTML = `

                <div class="image-placeholder">

                    <span>📷</span>

                    Insert Your Image Here

                </div>

            `;

        }


        return `

            <div class="page-content memory-page">

                <div class="memory-card">

                    <div class="memory-image-box">

                        ${imageHTML}

                    </div>


                    <div class="memory-message">

                        ${pageData.message}

                    </div>

                </div>


                <div class="page-number">

                    Page ${pageNumber}

                </div>

            </div>

        `;

    }


    /* =====================================
       NORMAL PAGE
    ===================================== */

    let specialClass = "";


    if (pageData.type === "cover") {

        specialClass =
            "cover-page";

    }


    if (pageData.type === "final") {

        specialClass =
            "final-page";

    }


    return `

        <div class="
            page-content
            ${specialClass}
        ">

            <h2>

                ${pageData.title}

            </h2>


            <div class="big-emoji">

                ${pageData.emoji}

            </div>


            <p>

                ${pageData.text}

            </p>


            <div class="page-number">

                Page ${pageNumber}

            </div>

        </div>

    `;

}


/* =========================================
   CREATE REAL SHEETS

   FRONT = Page 1, 3, 5...
   BACK  = Page 2, 4, 6...
========================================= */

function createBook() {

    sheetsContainer.innerHTML = "";


    for (
        let sheetIndex = 0;
        sheetIndex < totalSheets;
        sheetIndex++
    ) {

        const frontPageIndex =
            sheetIndex * 2;


        const backPageIndex =
            sheetIndex * 2 + 1;


        const sheet =
            document.createElement("div");


        sheet.className =
            "sheet";


        sheet.dataset.index =
            sheetIndex;


        /* FRONT SIDE */

        const front =
            document.createElement("div");


        front.className =
            "sheet-side sheet-front";


        front.innerHTML =
            createPageContent(
                bookPages[frontPageIndex],
                frontPageIndex + 1
            );


        /* BACK SIDE */

        const back =
            document.createElement("div");


        back.className =
            "sheet-side sheet-back";


        back.innerHTML =
            createPageContent(
                bookPages[backPageIndex],
                backPageIndex + 1
            );


        sheet.appendChild(front);

        sheet.appendChild(back);

        sheetsContainer.appendChild(sheet);

    }


    updateSheetStack();

}


/* =========================================
   UPDATE SHEET STACK
========================================= */

function updateSheetStack() {

    const sheets =
        document.querySelectorAll(".sheet");


    sheets.forEach(
        (sheet, index) => {


            /* Turned pages on left */

            if (index < currentSheet) {

                sheet.style.zIndex =
                    index + 1;

            }


            /* Remaining pages on right */

            else {

                sheet.style.zIndex =
                    totalSheets -
                    index +
                    10;

            }

        }
    );

}


/* =========================================
   UPDATE CONTROLS
========================================= */

function updateControls() {

    if (!bookOpened) return;


    let displayText;


    /* First page */

    if (currentSheet === 0) {

        displayText =
            "Page 1 of 40";

    }


    /* Middle pages */

    else if (
        currentSheet <
        totalSheets
    ) {

        const leftPage =
            currentSheet * 2;


        const rightPage =
            currentSheet * 2 + 1;


        displayText =
            `Pages ${leftPage} - ${rightPage} of 40`;

    }


    /* Last page */

    else {

        displayText =
            "Page 40 of 40";

    }


    pageCounter.textContent =
        displayText;


    prevBtn.disabled =
        currentSheet === 0 ||
        isAnimating;


    nextBtn.disabled =
        currentSheet === totalSheets ||
        isAnimating;

}


/* =========================================
   PAGE TURN SOUND
========================================= */

function playPageSound() {

    try {

        const AudioContextClass =
            window.AudioContext ||
            window.webkitAudioContext;


        const context =
            new AudioContextClass();


        const duration =
            0.28;


        const length =
            Math.floor(
                context.sampleRate *
                duration
            );


        const buffer =
            context.createBuffer(
                1,
                length,
                context.sampleRate
            );


        const data =
            buffer.getChannelData(0);


        for (
            let i = 0;
            i < length;
            i++
        ) {

            const progress =
                i / length;


            const envelope =
                Math.pow(
                    1 - progress,
                    2.5
                );


            data[i] =
                (
                    Math.random() * 2 - 1
                )
                *
                envelope
                *
                0.06;

        }


        const source =
            context.createBufferSource();


        const gain =
            context.createGain();


        source.buffer =
            buffer;


        gain.gain.setValueAtTime(
            0.08,
            context.currentTime
        );


        gain.gain.exponentialRampToValueAtTime(
            0.001,
            context.currentTime +
            duration
        );


        source.connect(gain);

        gain.connect(
            context.destination
        );


        source.start();


        source.stop(
            context.currentTime +
            duration
        );


        setTimeout(
            () => {

                context.close();

            },
            600
        );

    }

    catch (error) {

        console.log(
            "Page sound unavailable."
        );

    }

}


/* =========================================
   NEXT PAGE
========================================= */

function nextPage() {

    if (
        isAnimating ||
        currentSheet >= totalSheets
    ) {

        return;

    }


    const sheets =
        document.querySelectorAll(".sheet");


    const sheet =
        sheets[currentSheet];


    if (!sheet) return;


    isAnimating = true;

    updateControls();


    /*
        Bring turning sheet
        above all other sheets.
    */

    sheet.style.zIndex =
        totalSheets + 100;


    playPageSound();


    requestAnimationFrame(
        () => {

            sheet.classList.add(
                "flipped"
            );

        }
    );


    sheet.addEventListener(
        "transitionend",
        function handleTransition(event) {


            if (
                event.propertyName !==
                "transform"
            ) {

                return;

            }


            sheet.removeEventListener(
                "transitionend",
                handleTransition
            );


            currentSheet++;


            isAnimating = false;


            updateSheetStack();

            updateControls();

        }
    );

}


/* =========================================
   PREVIOUS PAGE
========================================= */

function previousPage() {

    if (
        isAnimating ||
        currentSheet <= 0
    ) {

        return;

    }


    const sheets =
        document.querySelectorAll(".sheet");


    const sheetIndex =
        currentSheet - 1;


    const sheet =
        sheets[sheetIndex];


    if (!sheet) return;


    isAnimating = true;

    updateControls();


    sheet.style.zIndex =
        totalSheets + 100;


    playPageSound();


    requestAnimationFrame(
        () => {

            sheet.classList.remove(
                "flipped"
            );

        }
    );


    sheet.addEventListener(
        "transitionend",
        function handleTransition(event) {


            if (
                event.propertyName !==
                "transform"
            ) {

                return;

            }


            sheet.removeEventListener(
                "transitionend",
                handleTransition
            );


            currentSheet--;


            isAnimating = false;


            updateSheetStack();

            updateControls();

        }
    );

}


/* =========================================
   BUTTON EVENTS
========================================= */

nextBtn.addEventListener(
    "click",
    nextPage
);


prevBtn.addEventListener(
    "click",
    previousPage
);


/* =========================================
   KEYBOARD CONTROLS
========================================= */

document.addEventListener(
    "keydown",
    event => {


        if (!bookOpened) return;


        if (
            event.key ===
            "ArrowRight"
        ) {

            nextPage();

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            previousPage();

        }

    }
);


/* =========================================
   OPEN BOOK
========================================= */

openBtn.addEventListener(
    "click",
    () => {


        if (bookOpened) return;


        bookOpened = true;
const backgroundMusic =
    document.getElementById("backgroundMusic");

backgroundMusic.volume = 0.85;
backgroundMusic.play();

        introScreen.classList.add(
            "hide"
        );


        setTimeout(
            () => {


                mainContainer.style.display =
                    "flex";


                updateControls();


            },
            500
        );

    }
);


/* =========================================
   FLOATING DECORATIONS
========================================= */

const floatingEmojis = [

    "💕",
    "💗",
    "💖",
    "🌸",
    "✨",
    "🎀",
    "🦋",
    "💫"

];


function createFloatingElement() {

    if (!floatingElements) return;


    const element =
        document.createElement("div");


    element.className =
        "floating-item";


    element.textContent =
        floatingEmojis[
            Math.floor(
                Math.random() *
                floatingEmojis.length
            )
        ];


    element.style.left =
        Math.random() * 100 +
        "vw";


    const size =
        Math.random() *
        24 +
        18;


    element.style.fontSize =
        size +
        "px";


    const duration =
        Math.random() *
        4 +
        5;


    element.style.animationDuration =
        duration +
        "s";


    floatingElements.appendChild(
        element
    );


    setTimeout(
        () => {

            element.remove();

        },
        duration * 1000
    );

}


/* =========================================
   CREATE FLOATING ITEMS
========================================= */

setInterval(
    createFloatingElement,
    850
);


/* =========================================
   INITIALIZE BOOK
========================================= */

createBook();

updateControls();