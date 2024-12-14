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
    else if(hr == 12)            { speak("Workshift? Ahoy! Did you have a good lunch? Becasue I do!"); }
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
        ".help": "Padingo is web-based digital assistant. Use '.list' to see commands, and '.man' to learn how to use them.",
        ".getpwd": "Here's your unique password: " + generatePassword(12),
        ".getpwd -s": "Here's your short unique password: " + generatePassword(6),
        ".getpwd -l": "Here's your long unique password: " + generatePassword(24),
        ".getstr": "Here's your unique characters: " + generateRandomString(12),
        ".getstr -s": "Here's your short unique characters: " + generateRandomString(6),
        ".getstr -l": "Here's your long unique characters: " + generateRandomString(24),
        ".getchar": "Here's your random character: " + generateRandomString(1),
        ".list": list,
        ".man": manpage,
        "default": "Here's the answer regarding to the question.",
    };

    const response = responses[message] || responses["default"];
    let stored = userMessage.replace(".echo", "").trim().replace(/['"]/g, "");

    if (response === responses["default"]) {
        async function delayDo() {
            await delay(2000);
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        }
        delayDo();
    }

    if (/^[0-9+\-*/().\s]+$/.test(userMessage)) {
        try { return `${userMessage} = ${math.evaluate(userMessage)}`; } 
        catch { return "Sorry, I couldn't calculate that. Please check your input."; }
    }

    if (userMessage.startsWith(".echo")) {
        return userMessage.replace(".console", "").trim().replace(/['"]/g, "");
    }

    if (userMessage === ".retrieve") {
        return lastConsoledMessage || "No message has been written to console yet.";
    }

    if (userMessage.startsWith(".console")) {
        const consoleMessageedMessage = userMessage.replace(".console", "").trim().replace(/['"]/g, "");
        lastConsoledMessage = consoleMessageedMessage;
        console.log(consoleMessageedMessage);
        return "Messaged has sucessfully written to console!"
    }

    if (userMessage.toLowerCase() === ".clear") {
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
        if (userMessage.includes(cmd)) {
            externalCommands[cmd](userMessage);
            return `Opening ${cmd}...`;
        }
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

displayMessage('Padingo', 
    "Hello! My name is Padingo, I\'m your virtual assistant so it\'s my duty to assist you. " + 
    "Ask me a question and I'll answer it. Additional features are also available, type \'.help\' to check them!");