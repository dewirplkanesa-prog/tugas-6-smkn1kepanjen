/*WELCOME SCREEN*/
const welcomeScreen =document.getElementById("welcomeScreen");
const enterButton =document.getElementById("enterButton");

/*Kunci scroll ketika welcome masih ditampilkan.*/
document.body.classList.add("lock-scroll");

/*Tombol masuk ke portfolio.*/
enterButton.addEventListener("click",
    function () {
        welcomeScreen.classList.add("hide");
        document.body.classList.remove("lock-scroll");
    }
);

/*PERGANTIAN BAHASA*/
const welcomeLanguage = document.getElementById("welcomeLanguage");
const languages = [
    "مرحباً",
    "Привет",
    "你好",
    "Selamat Datang",
    "Welcome",
    "안녕하세요",
    "こんにちは",
    "Bonjour",
    "Hola",
    "Hallo",
    "Ciao",
    "Olá"
];
let languageIndex = 0;
/*Fungsi mengganti bahasa.*/
function changeLanguage() {

    /*Animasi keluar.*/
    welcomeLanguage.classList.add("out");

    setTimeout(
        function () {
            /*Pindah ke bahasa berikutnya.*/
            languageIndex = languageIndex + 1;

            /*Jika sudah sampai akhir,kembali ke bahasa pertama.*/
            if ( languageIndex >= languages.length) {
                languageIndex = 0;
            }

            /*Ganti tulisan.*/
            welcomeLanguage.textContent =languages[languageIndex];

            /*Hilangkan class keluar.*/
            welcomeLanguage.classList.remove("out");

            /*Tambahkan animasi masuk.*/
            welcomeLanguage.classList.add("in");

            /*Hapus class animasi setelah selesai.*/
            setTimeout(
                function () {
                    welcomeLanguage.classList.remove("in")
                ;}
                ,450
            );
        },
        400
    );
}

/*Ganti bahasa setiap 2 detik.*/
setInterval( changeLanguage, 2000);

/*DARK / LIGHT MODE*/
const themeButton = document.getElementById("themeButton");

/*Cek tema yang pernah disimpan.*/
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "☀";
} else {
    themeButton.textContent = "☾";
}

/*Tombol tema.*/
themeButton.addEventListener( "click",
    function () {
        document.body.classList.toggle("dark");

        const darkMode = document.body.classList.contains("dark");

        if (darkMode) {
            themeButton.textContent = "☀";
            localStorage.setItem( "portfolioTheme", "dark");
        } 
        else {
            themeButton.textContent = "☾";
            localStorage.setItem( "portfolioTheme", "light");
        }
    }
);

/*MOBILE MENU*/
const menuButton = document.getElementById("menuButton");

const navigation =document.getElementById("navigation");

menuButton.addEventListener("click",function () {
        navigation.classList.toggle("active");
    }
);

/*Tutup menu ketika link diklik.*/
const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(
    function (link) {
        link.addEventListener("click",
            function () {
                navigation.classList.remove("active");
            }
        );
    }
);


/*HEADER SAAT SCROLL*/
const header = document.getElementById("header");

window.addEventListener("scroll",
    function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
);

/*SCROLL REVEAL*/
const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

const revealObserver =new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }
                }
            );
        },
        { threshold: 0.12}
    );

revealElements.forEach(function (element) {
        revealObserver.observe(element);
    }
);

/*FOTO*/
const profilePhoto = document.getElementById("profilePhoto");

const photoPlaceholder = document.getElementById("photoPlaceholder");

/*Jika foto tidak ditemukan,tampilkan placeholder.*/
profilePhoto.addEventListener("error",
    function () {
        profilePhoto.style.display ="none";
        photoPlaceholder.classList.add("show");
    }
);

/*EFEK FOTO MENGIKUTI MOUSE*/
const photoFrame =document.querySelector(".photo-frame");

photoFrame.addEventListener("mousemove",
    function (event) {
        const rectangle =photoFrame.getBoundingClientRect();

        const mouseX =event.clientX -rectangle.left;
        const mouseY =event.clientY -rectangle.top;

        const centerX =rectangle.width / 2;
        const centerY =rectangle.height / 2;

        const rotateX =(mouseY - centerY) / 35;
        const rotateY =(centerX - mouseX) / 35;

        photoFrame.style.animation ="none";
        photoFrame.style.transform ="rotateX(" + rotateX + "deg) " + "rotateY(" + rotateY + "deg) " + "scale(1.02)";
    }
);

photoFrame.addEventListener("mouseleave",
    function () {
        photoFrame.style.transform ="";
        photoFrame.style.animation ="photoFloat 6s ease-in-out infinite";
    }
);

/*PROJECT HOVER*/
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(
    function (card) {
        card.addEventListener("mousemove",function (event) {
                const rectangle =card.getBoundingClientRect();

                const x =event.clientX - rectangle.left;
                const y =event.clientY - rectangle.top;

                const centerX =rectangle.width / 2;
                const centerY =rectangle.height / 2;

                const rotateX =(y - centerY) / 40;
                const rotateY =(centerX - x) / 40;

                card.style.transform ="perspective(900px) " + "rotateX(" + rotateX + "deg) " + "rotateY(" + rotateY + "deg) " + "translateY(-8px)";
            }
        );

        card.addEventListener("mouseleave",
            function () {
                card.style.transform ="";
            }
        );
    }
);

/*BUTTON EFFECT*/
const buttons =document.querySelectorAll(".button, .welcome-button");

buttons.forEach(
    function (button) {
        button.addEventListener("mousemove",
            function (event) {
                const rectangle =button.getBoundingClientRect();

                const x =event.clientX - rectangle.left;
                const y =event.clientY - rectangle.top;

                const moveX =(x - rectangle.width / 2) * 0.12;
                const moveY =(y - rectangle.height / 2) * 0.12;

                button.style.transform = "translate(" + moveX + "px, " + moveY + "px)";
            }
        );

        button.addEventListener("mouseleave",
            function () {
                button.style.transform = "";
            }
        );
    }
);

/*TAHUN FOOTER*/
const year =document.getElementById("year");
year.textContent =new Date().getFullYear();

/*SMOOTH SCROLL*/
const allAnchorLinks =document.querySelectorAll('a[href^="#"]');

allAnchorLinks.forEach(
    function (link) {
        link.addEventListener("click",
            function (event) {
                const targetId =link.getAttribute("href");

                if (targetId === "#" || targetId === "") {
                    return;
                }

                const target =document.querySelector(targetId);

                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({
                        behavior:"smooth"
                    });
                }
            }
        );
    }
);

/*ANIMASI DELAY CARD*/
const skillCards =document.querySelectorAll(".skill-card");
skillCards.forEach(function (card, index) {
        card.style.transitionDelay =(index * 0.1) + "s";
    }
);

const projectCardsAnimation =document.querySelectorAll(".project-card");
projectCardsAnimation.forEach(
    function (card, index) {
        card.style.transitionDelay =(index * 0.12) + "s";
    }
);