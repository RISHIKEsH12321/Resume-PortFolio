/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1300); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach(carousel => {
    const carouselId = carousel.getAttribute('data-carousel'); // Get unique ID
    const slide = carousel.querySelector('.carousel-slide'); // Find slide container
    const images = slide.querySelectorAll('img'); // Get images
    const textHead = document.querySelector(`.carousel-head[data-carousel="${carouselId}"]`); // Get head for this carousel
    const textElement = document.querySelector(`.carousel-text[data-carousel="${carouselId}"]`); // Get text for this carousel
    const prevBtn = document.querySelector(`.prev[data-carousel="${carouselId}"]`);
    const nextBtn = document.querySelector(`.next[data-carousel="${carouselId}"]`);
    
    // Ensure the text element exists before proceeding
    if (!textElement) {
        console.error(`Text element not found for carousel: ${carouselId}`);
        return; // Stop execution for this carousel
    }

    const texts = {      
        "DonkeyCakes": [
          { 
            t: "Simple Front End Cake Website",
            b: `This website is for Donkey Cakes customers. <br>
                The purpose of this website is to allow customers to browse through <br>
                the selection of cakes and get a idea of what kinds of cakes there are. <br>
                Then, they can purchase anycake they desire in the cart tab. <br>
                If they have any probelms or questions, they can contact us via the email and <br>
                phone number given at the bottom of every page. <br>
                They can also use the help pagee to send a detailed query for th Donkey Cakes staff.<br>`
          },
          { 
            t: "Catalogue", 
            b: `This page displays each cake using data from a list.<br>
                It dynamically creates the HTML Elements based on the number<br>
                of cakes in the List.<br>`
          },
          { t: "Cake Details", 
            b: `This page displays each cakes details dynamically using<br>
                data from the URL that was put in there when clicked on in <br>
                the catalouge. It displays the ingredients and the possible<br>
                allergens.<br>`
          },
          { t: "Order and Pay", 
            b: `This page displays all the cakes and allows users to<br>
                increment/decrement their amount by 1, inputting their<br>
                orders.<br>
                At the end of the page, they can calculate their order<br>
                and finalise the payment.<br>`
          }
        ],

        "IceCream": [
          { 
            t: "OOP Ice Cream Console Program",
            b: `This C# program is an Ice Cream Shop Management System that handles customer and order management, <br>
                including registering customers, creating and modifying orders, and checking out. <br>
                It provides detailed monthly and yearly sales breakdowns. <br>
                The data is stored and retrieved from a CSV file. <br>
                The interface uses a menu-driven approach for user interaction.<br>     `
          } 
        ],

        "TechStudio": [
          { t: "Front End Electronic E-commerce Website",
            b: `We aimed to make online shopping fun and convinient via gamification.<br>
                To do this, we first created our own e-commerce website using tools such as RestDB,<br>
                HTML, JS and CSS. After that using JS we made games so that cutomers will have <br>
                the chance to win big by spending points which they can earn via purchasing items. <br>
                We also made navigation seamless so that users will not be confused when using the website.<br>`
          },
          { t: "Catalouge",
            b: `This page displays all the items in the shop. Users can then filter<br>
                based on the different types of electronics. They may also type in<br>
                name of an item to get filter the page to that specific item/brand.<br>`
          },
          { t: "Electronic Details + Add to Cart",
            b: `In this page, Users can see the price and other details<br>
                of the product. They can then add that item to their cart<br>
                proveided that they have already logged in. When adding,br>
                to their cart, the website sends the data to restDB, <br>
                to store the details of their order.`
          },
          { t: "Cart",
            b: `This page retrieves information from restDB, and <br>
                displays it based on the user logged in. They can,<br>
                proceed to pay.`
          }
        ],
        "PlanHub": [
          { t: "Android App Developed Using Java and Android Studio",
            b: `Introducing PlanHub, your friendly travel companion, designed to simplify every aspect of your journey. <br>
                From a seamless login and customizations to intuitive event management and currency converter,
                our basic features ensure effortless planning and exploration along with a customizable touch
                to your app. <br>
                As you progress to more advanced features, unlock collaborative planning via <br>
                events between users, community engagement through interactive travel posts, and personalized <br>
                recommendations powered by intelligent algorithms. <br>                            
                With biometric authentication and timely notifications, PlanHub elevates your travel experience,
                making every adventure memorable and<br>
                hassle-free. Join us as we redefine the way you travel.<br>`
          },
          { t: "BioMetric Login",
            b: `This features utilises the Biometeric API in the Android Phone<br>
                and allows the app to verify if the user of the app is the<br>
                owner or has access to the phone. Biometric Login also forgoes<br>
                need to type in the details each time.<br>`
          },
          { t: "Settings",
            b: `This page allows users manage their account in many ways<br>
                including turing on and off notifications or biometrics.<br>`
          },
          { t: "Event Creation and Mangagement",
            b: `This features allows users to create and add them to <br>
                their calandar. They can then edit the event anytime the<br>
                need to.<br>`
          },
          { t: "Notifications",
            b: `Each Event created notifies the user for each item in its<br>
                itinerary and reminds them of it.<br>`
          },
          { t: "Event to QR Code",
            b: `This features allows users to convert their event into <br>
                a QR code that other PlanHub users can then scan and  <br>
                create their own copy of.<br>`
          },
          { t: "Scan the QR Code",
            b: `This feature allows users to scan the QR Code of events<br>
                created by other users.<br>`
          }
        ],

        "NgeeAnnCity": [
          { t: "Front End City Building Game",
            b: `In Ngee Ann City, you play as the mayor, aiming to build the happiest and most prosperous city. <br>
                The game offers Arcade mode with limited coins and a 20x20 grid,<br>
                and Free Play mode with unlimited resources.<br>
                In Arcade, start with 16 coins and construct buildings each turn,<br>
                with placement restricted to adjacent squares for connected growth.<br>`
          },
          { t: "Start a Round",
            b: `This page allows users to start and play a new Game. <br>
                They can also load a previously saved game if they have any. <br> `
          },
          { t: "Profile",
            b: `This page displays all of the users statistics. <br> 
                It also allows users to see a leaderboard. <br> `
          },
          { t: "About",
            b: `This page explains the rules on how to play  <br> 
                Ngee Ann City for both Arcade and Free Play modes. <br> `
          }
        ],

        "AgriDynamic": [
          { t: "AgriDynamic: Enhancing Agricultural Knowledge",
            b: `AgriDynamic is a comprehensive platform dedicated to advancing the agricultural sector <br>
                by addressing the challenges posed by technology, political, and climate changes. <br>
                Our website provides valuable insights and resources across various industries <br>
                such as Agriculture, Crop-Production, Livestock Farming, Horticulture, and AgroTechnology.<br>
                With AgriDynamic, users can access a wealth of industry information, engage in interactive quizzes,<br>
                and utilize cutting-edge tools to enhance their agricultural knowledge and practices.<br>`
          },
          { t: "Industry Information",
            b: `This page displays information about each industry.<br>
                It talks about the challenges they face and the <br>
                various methods they use to combat these challenges<br>`
          },
          { t: "Admin Industry",
            b: `This page allows Admins to add, edit and delete information<br>
                on the Industry Information Page.<br>`
          },
          { t: "Quiz",
            b: `This page displays a quiz of 15 questions that the <br>
                user can answer to test their knowldge on the industry.<br>`
          },
          { t: "ChatBot",
            b: `This ChatBot uses the Gemini API to create chats between<br>
                the users and the chatbot. It only answer questions related to<br>
                Agriculture and its subcategories.<br>`
          }          
        ],

        "ATM": [
          { t: "ATM with new Innovative Features",
            b: `OCBC's current ATM network provides essential banking services, but there are opportunities<br>
                to enhance the customer experience by addressing emerging demands for greater accessibility,<br>
                security and customer assistance.<br>`
          },
          { t: "Facial Recogntion",
            b: `This featuers allwos users to replace the usual card and pin<br>
                input with a simple face display. It uses FaceAPI to allow users<br>
                to log into ATM with just their face.<br>`
          },
          { t: "Voice Command",
            b: `This feature allows users to perfrom actions such as <br>
                withdrawing or depositing money simply by speacking <br>
                to the ATM. It uses Gemini to convert the text from the <br>
                user's speech to usuable instructions.`
          },
          { t: "Find the Nearest ATM to you.",
            b: `This feature utilises OCBC's ATM locatar API<br>
                to find the ATM closest to you after the ATM you are<br>
                currently using. It features is primarility used when<br>
                the ATM is out of notes.`
          },
          { t: "Notes in the ATM",
            b: `This features simply displays the live number of notes<br>
                in the ATM so that users can use another ATM if <br>
                there is a lack of notes in the current one.<br>`
          },
          { t: "Financial Situation Display",
            b: `This featuers compiles the data from the User's<br>
                transactions to display multiple graphs. The <br>
                prupose of this graph is to provide a visual<br>
                representation of the users financial state.<br>`
          },
          { t: "Financial Analysis Report",
            b: `This features craetes a report using the graphs<br>
                from the previous feature. It then utilised Gemini
                to identify some key positive or negative traits<br>
                that the user needs to continue or stop.<br>`
          },
        ]
    };

    let currentIndex = 0;

    function moveSlide(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        textHead.innerText = texts[carouselId][currentIndex].t;
        textElement.innerHTML = texts[carouselId][currentIndex].b;
    }
    // Add event listeners to buttons
    prevBtn.addEventListener('click', () => moveSlide(-1));
    nextBtn.addEventListener('click', () => moveSlide(1));

    // Auto-slide every 3 seconds
    // setInterval(() => moveSlide(1), 3000);
});
