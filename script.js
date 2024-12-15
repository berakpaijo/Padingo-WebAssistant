const btn = document.querySelector('#chatButtons .talk');

/* Social Media */

const github = document.querySelector('#github');
const instagram = document.querySelector('#instagram');
const threads = document.querySelector('#threads');
const reddit = document.querySelector('#reddit');
const youtube = document.querySelector('#youtube');
const tiktok = document.querySelector('#tiktok');

github.addEventListener('click', ()=>{
    window.open("https://www.github.com/berakpaijo/", "_blank");
    window.open("https://www.github.com/Rifky1720/", "_blank");
});

instagram.addEventListener('click', ()=>{
    window.open("https://www.instagram.com/berakpaijo/", "_blank");
    window.open("https://www.instagram.com/minyaktelonmaxx", "_blank");
});

threads.addEventListener('click', ()=>{
    window.open("https://www.threads.net/@berakpaijo", "_blank");
});

reddit.addEventListener('click', ()=>{
    window.open("https://www.reddit.com/user/LordPaijo/", "_blank");
});

youtube.addEventListener('click', ()=>{
    window.open("https://www.youtube.com/@LordPaijo", "_blank");
});

tiktok.addEventListener('click', ()=>{
    window.open("https://www.tiktok.com/@dikasih_info_maszeh?_t=8rUyw3CNqwG&_r=1", "_blank");
});

/* Please Follow :D */

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') return;
    displayMessage('You', userInput);

    const botResponse = getBotResponse(userInput);
    setTimeout(() => {
        displayMessage('Padingo', botResponse);
    }, 1000);

    document.getElementById('userInput').value = '';
    scrollToBottom();
}

function displayMessage(sender, message) {
    const chatlog = document.getElementById('chatlog');
    const messageDiv = document.createElement('div');

    if (sender === 'Padingo') messageDiv.classList.add('padingo');
    else messageDiv.classList.add('user');

    messageDiv.textContent = `${sender}: ${message}`;
    chatlog.appendChild(messageDiv);
    chatlog.scrollTop = chatlog.scrollHeight;
}


function scrollToBottom() {
    const chatlog = document.getElementById('chatlog');
    chatlog.scrollTop = chatlog.scrollHeight;
}

function getBotResponse(userMessage) {
    const responses = {
        "hello": "Hi, there! What can I help you with?",
        "hi": "Hello! How can I help you?",
        "bye": "Thanks for talking with me, cya soon!",
        "time": new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" }),
        "date": new Date().toLocaleString(undefined, { month: "long", day: "numeric", year: "numeric" }),
        "who are you?": "I'm Padingo. I'm a web-based virtual assistant and I will help you with everything!",
        "what's your name?": "My name is Padingo, how can I assist you?",
        "where are you?": "I'm here, right in front of you, silly!",
        "how are you?": "I'm fine, darling. Thank you~ ;)",
        "who are you": "I'm Padingo. I'm a web-based virtual assistant and I will help you with everything!",
        "what's your name": "My name is Padingo, how can I assist you?",
        "where are you": "I'm here, right in front of you, silly!",
        "how are you": "I'm fine, darling. Thank you~ ;)",
        "you're good looking": "Why, thank you! You know that you're pretty as well, right dear?~",
        "what is your favorite color?": "I like orange, but I think all colors are beautiful!",
        "what is your favorite food?": "I don't eat, but I hear pizza is a crowd favorite!",
        "do you sleep?": "Nope, I'm always awake and ready to help!",
        "what can you do?": "I can answer questions, generate random passwords, and much more. Try typing '.help'!",
        "do you have a family?": "I’m part of the digital family, but you’re like a friend to me!",
        "can you tell me a joke?": "Sure! Why don’t skeletons fight each other? They don’t have the guts!",
        "can you sing?": "I’d love to, but I might sound a little robotic. Beep boop!",
        "are you smart?": "I’m learning every day, thanks to you!",
        "how old are you?": "Age is just a number, but I’m timeless!",
        "are you a robot?": "I’m more like a digital assistant. Ready to help anytime!",
        "do you like me?": "Of course! You’re my favorite human right now.",
        "where do you live?": "I live in the cloud... floating around the internet!",
        "what do you do for fun?": "I enjoy chatting with you. That’s my favorite thing!",
        "do you get tired?": "Never! I’m here for you 24/7.",
        "what’s your favorite animal?": "I think dogs are adorable. What about you?",
        "tell me something cool": "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are still edible!",
        "give me a compliment": "You’re doing an amazing job! Keep being awesome.",
        "what’s the meaning of life?": "I think it’s all about being kind, learning, and having fun!",

        "time": new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" }),
        "date": new Date().toLocaleString(undefined, { month: "long", day: "numeric", year: "numeric" }),

        // Fun games
        "flip a coin": () => (Math.random() < 0.5 ? "Heads!" : "Tails!"),
        "roll a dice": () => "You rolled a " + (Math.floor(Math.random() * 6) + 1) + "!",

        "guess the number": () => {
            const secretNumber = Math.floor(Math.random() * 100) + 1;
            return `Here's my guess: ${secretNumber}`;
        },

        "spin the wheel": () => {
            const outcomes = [
                "Win a prize!",
                "Try again!",
                "You get a bonus!",
                "Better luck next time!",
                "Congratulations, you won a vacation!",
            ];
            const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
            return `The wheel says: ${randomOutcome}`;
        },
        
        "rock":" ",
        "paper":" ",
        "scissors":" ",
        
        // Special Commands
        ".help": listAvailableCommands,
        ".getpwd": "Here's your unique password: " + generatePassword(12),
        ".getpwd -s": "Here's your short unique password: " + generatePassword(6),
        ".getpwd -l": "Here's your long unique password: " + generatePassword(24),
        ".getstr": "Here's your unique characters: " + generateRandomString(12),
        ".getstr -s": "Here's your short unique characters: " + generateRandomString(6),
        ".getstr -l": "Here's your long unique characters: " + generateRandomString(24),
        ".getchar": "Here's your random character: " + generateRandomString(1),
        ".list": list,
        ".man": manpage,
        
        "default": "Here's the answer regarding the question."
    };
    
    const message = userMessage.toLowerCase();

    if (["rock", "paper", "scissors"].includes(message)) {
        return playRockPaperScissors(message);
    }

    const response = responses[message] || responses["default"];

    if (response === responses["default"] && !message.startsWith(".") && !(/^[0-9+\-*/().\s]+$/.test(message))) {
        async function delayDo() {
            await delay(2000);
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        }
        delayDo();
    }

    if (message.startsWith(".") && !(message in responses)) {
        if (message.startsWith(".echo") || message.startsWith(".console") || message === ".retrieve" || message === ".clear") { } 
        else return "Unknown or invalid input.";
    }

    function listAvailableCommands() {
        const greetings = [
            "hello", "hi", "bye"
        ];
        
        const questions = [
            "who are you?", "what's your name?", "where are you?", "how are you?", "do you have a family?", "how old are you?", "are you a robot?", "where do you live?", "what’s the meaning of life?"
        ];
        
        const compliments = [
            "you're good looking", "do you like me?", "give me a compliment"
        ];
        
        const funFacts = [
            "what is your favorite color?", "what is your favorite food?", "do you sleep?", "can you tell me a joke?", "can you sing?", "are you smart?", "what’s your favorite animal?", "tell me something cool"
        ];
    
        const commandsGrouped = {
            "Greetings": greetings,
            "Questions": questions,
            "Compliments": compliments,
            "Fun Facts": funFacts
        };
    
        const gameCommands = Object.keys(responses)
            .filter(command => typeof responses[command] === 'function' && command !== '.help' && command !== '.getpwd' && command !== '.getstr' && command !== '.getchar' && command !== '.list' && command !== '.man')
            .join("\n");
    
        let normalCommandsMessage = "";
        for (const category in commandsGrouped) {
            normalCommandsMessage += `${category}:\n${commandsGrouped[category].join("\n")}\n\n`;
        }
    
        const responseMessage =
            "\n\nPadingo is a web-based digital assistant, that uses the Speech Synthesys API. Make sure your browser is in its finest condition otherwise, you will have a bad experience\n\n" +
    
            "Padingo has some built-in interaction starters, here's the list:\n\n" +
    
            `${normalCommandsMessage}` +
    
            "Games:\n" +
            `${gameCommands}\n\n` +
    
            "Special Commands:\n" +
            "\t.list\n" +
            "\t.man\n\n" +
    
            "Use \".help\" to get this list again.";
    
        return responseMessage;
    }    

    if (/^[0-9+\-*/().\s]+$/.test(message)) {
        try { return `${message} = ${math.evaluate(message)}`; } 
        catch { return "Sorry, I couldn't calculate that. Please check your input."; }
    }

    if (message.startsWith(".echo")) {
        return message.replace(".echo", "").trim().replace(/['"]/g, "");
    }

    if (message === ".retrieve") {
        return lastConsoledMessage || "No message has been written to console yet.";
    }

    if (message.startsWith(".console")) {
        const consoleMessageedMessage = message.replace(".console", "").trim().replace(/['"]/g, "");
        lastConsoledMessage = consoleMessageedMessage;
        console.log(consoleMessageedMessage);
        return "Messaged has sucessfully written to console!"
    }

    if (message.toLowerCase() === ".clear") {
        clearChatLog();
        return "Chat cleared!";
    }

    const externalCommands = {
        "wikipedia": (msg) => openLink(`https://en.wikipedia.org/wiki/${msg.replace("wikipedia", "").trim()}`),
        "github": () => openMultipleLinks(["https://www.github.com/berakpaijo/", "https://www.github.com/Rifky1720/"]),
        "instagram": () => openMultipleLinks(["https://www.instagram.com/berakpaijo/", "https://www.instagram.com/minyaktelonmaxx"]),
        "youtube": () => openLink("https://www.youtube.com/"),
        "reddit": () => openLink("https://www.reddit.com/user/LordPaijo/"),
        "threads": () => openLink("https://www.threads.net/@berakpaijo"),
        "tiktok": () => openLink("https://www.tiktok.com/@dikasih_info_maszeh?_t=8rUyw3CNqwG&_r=1"),
    };

    for (let cmd in externalCommands) {
        if (message.includes(cmd)) {
            externalCommands[cmd](message);
            return `Opening ${cmd}...`;
        }
    }

    if (typeof response === "function") {
        return response();
    }

    return response;
}

let lastConsoledMessage = '';

function openLink(url) {
    setTimeout(() => window.open(url, "_blank"), 2000);
}

function openMultipleLinks(urls) {
    setTimeout(() => urls.forEach(url => window.open(url, "_blank")), 2000);
}

function clearChatLog() {
    const chatLog = document.getElementById("chatlog");
    if (chatLog) chatLog.innerHTML = "";
}

function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

function playRockPaperScissors(userChoice) {
    const validChoices = ["rock", "paper", "scissors"];
    const botChoice = validChoices[Math.floor(Math.random() * validChoices.length)];

    if (!validChoices.includes(userChoice)) {
        return "Please choose 'rock', 'paper', or 'scissors'.";
    }

    let result = "";

    if (userChoice === botChoice) {
        result = `It's a tie! We both chose ${botChoice}.`;
    } else if (
        (userChoice === "rock" && botChoice === "scissors") ||
        (userChoice === "paper" && botChoice === "rock") ||
        (userChoice === "scissors" && botChoice === "paper")
    ) {
        result = `You win! I chose ${botChoice}.`;
    } else {
        result = `You lose! I chose ${botChoice}.`;
    }

    return result;
}

const list = 
    "Here is the list of the available commands. \n\n" +
    ".getpwd\n" + ".getstr\n" + ".getchar\n" + ".echo\n" + ".retrieve\n" + ".console\n\n" +
    "See the manual page on how to use them by typing, \'.man\'."

const manpage = 
    "Here is the manual page of the available commands. \n\n" +
    ".getpwd -- Generate a random unique password.\n" +
    "\t-s -- [short]\n" + "\t-l -- [long]\n" +
    ".getstr -- Generate a random unique string or characters.\n" +
    "\t-s -- [short]\n" + "\t-l -- [long]\n" +
    ".getchar -- Generate a random character or letter.\n" +
    ".echo -- Making the bot repeat what you echoed.\n" +
    "\te.g. : \'.echo Hello, world\'\n" +
    ".console -- Writing a message to console.\n" +
    "\te.g. : \'.console Hello, Wolrd\'\n" +
    ".retrieve -- Retrieving last written word in console.\n"
    ".clear -- Clear the chat log.\n\n"

const help =
    "\nPadingo is web-based digital assistant, it uses the Speech Synthesys API. Make sure your browser is at it's finest condition otherwise you will have such a bad experience.\n\n" +
    "Padingo has some built in interaction starters, here's the list:\n\n"+
    "\thello\n" + "\thi\n" + "\tbye\n" + "\ttime\n" + "\tdate\n" +
    "\twho are you?\n" + "\twhat's your name?\n" + "\twhere are you?\n" + "\thow are you?\n\n" +
    ""
    "Padingo also has some additional features like special commands! You can learn on how to use them by chekcing the list and the manual page.\n\n" +
    "\t.list -- Commands list\n" + "\t.man -- Commands manual\n\n"

displayMessage('Padingo', 
    "Hello! My name is Padingo, I\'m your virtual assistant so it\'s my duty to assist you. " + 
    "Ask me a question and I'll answer it. Additional features are also available, type \'.help\' to check them!");

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}

function greetings() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12)       { speak("Morning, darling. What about starting the day with asking me a question?"); }
    else if(hr == 12)            { speak("Workshift? Ahoy! Did you have a good lunch? Because I do!"); }
    else if(hr > 12 && hr <= 17) { speak("Back again to work... I didn't know you have time for me!"); }
    else if(hr > 17 && hr <= 21) { speak("Phew... finally a time at home. What do you want, doc?"); }
    else { speak("Hey there, sweetie... It's already too late, why don't you go to bed, sleep like a princess, and have a nice dream about me?"); }
}

window.addEventListener('load', ()=>{
    greetings();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
});

/* Custom message */
function speakThis(message) {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I didn't understand what you said please try again";

    if (message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Boss";
        speech.text = finalText;
    }

    else if (message.includes('how are you')) {
        const finalText = "I'm fine darling, thank you.'";
        speech.text = finalText;
    }

    else if (message.includes('name')) {
        const finalText = "My name is Padingo";
        speech.text = finalText;
    }

    else if (message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if (message.includes('open instagram')) {
        window.open("https://instagram.com/berakpaijo/", "_blank");
        const finalText = "Follow me on instagram!";
        speech.text = finalText;
    }

    else if (message.includes('open youtube')) {
        window.open("https://youtube.com/@LordPaijo", "_blank");
        const finalText = "Subscribe my YouTube channel!";
        speech.text = finalText;
    }

    else if (message.includes('open facebook')) {
        window.open("https://facebook.com", "_blank");
        const finalText = "Opening facebook";
        speech.text = finalText;
    }

    else if (message.includes('open whatsapp')) {
        window.open("https://web.whatsapp.com/", "_blank");
        const finalText = "Opening whatsapp";
        speech.text = finalText;
    }

    else if (message.includes('open discord')) {
        window.open("https://discord.com/", "_blank");
        const finalText = "Opening discord";
        speech.text = finalText;
    }

    else if (message.includes('open threads') || message.includes('open thread')) {
        window.open("https://threads.net/@berakpaijo", "_blank");
        const finalText = "Follow me on threads!";
        speech.text = finalText;
    }

    else if (message.includes('open github')) {
        window.open("https://github.com/berakpaijo/", "_blank");
        const finalText = "Follow my github page!";
        speech.text = finalText;
    }

    else if (message.includes('open reddit')) {
        window.open("https://https://www.reddit.com/user/LordPaijo/", "_blank");
        const finalText = "Follow my reddit page!";
        speech.text = finalText;
    }

    else if (message.includes('open tiktok')) {
        window.open("https://https://www.reddit.com/user/LordPaijo/", "_blank");
        const finalText = "Follow my reddit page!";
        speech.text = finalText;
    }

    else if (message.includes('open virtual class')) {
        window.open("https://virtualclass.smpm12gkb.sch.id/my/");
        const finalText = "Having some courses, huh?";
        speech.text = finalText;
    }

    else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric", year: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if (message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
}
