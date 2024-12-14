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

/* Custom greeting */
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

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}

/* Custom greeting */
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
});

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
    messageDiv.classList.add(sender.toLowerCase());
    messageDiv.textContent = `${sender}: ${message}`;
    if (sender === 'Padingo') {
        messageDiv.style.backgroundColor = '#fe8019';
        messageDiv.style.borderRadius = '8px';
        messageDiv.style.padding = '10px';
        messageDiv.style.minWidth = '100px';
    } else {
        messageDiv.style.backgroundColor = '#b8bb26';
        messageDiv.style.borderRadius = '8px';
        messageDiv.style.padding = '10px';
        messageDiv.style.minWidth = '100px';
    }
    
    chatlog.appendChild(messageDiv);
    scrollToBottom();
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
        "time": new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"}),
        "date": new Date().toLocaleString(undefined, {month: "long", day: "numeric", year: "numeric"}),
        "wikipedia": "Opening Wikipedia.",
        "github": "Follow our Github page!",
        "instagram": "Follow our Instagram account!",
        "youtube": "Subscribe to our YouTube channel!.",
        "threads": "Follow our Threads page!",
        "reddit": "Follow our Reddit!",
        "tiktok": "Follow our TikTok!",
        "open wikipedia": "Opening Wikipedia.",
        "open github": "Follow our Github page!",
        "open instagram": "Follow our Instagram account!",
        "open youtube": "Subscribe to our YouTube channel!",
        "open threads": "Follow our Threads page!",
        "open reddit": "Follow our Reddit!",
        "open tiktok": "Follow our TikTok!",
        "default": "Here's the answer regarding to the question."
    };

    const message = userMessage.toLowerCase();

    if (/^[0-9+\-*/().\s]+$/.test(message)) {
        try {
            const result = math.evaluate(message);
            return `${message} = ${result}`;
        } catch (e) {
            return "Sorry, I couldn't calculate that. Please check your input.";
        }
    }

    const response = responses[message] || responses["default"];
    
    if (response === responses["default"]) {
        async function delayDo() {
            await delay(2000);
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        }
        delayDo();
    }
    if (response === responses["wikipedia"] || response === responses["open wikipedia"]) {
        async function delayDo() {
            await delay(2000);
            window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        }
        delayDo();
    }
    if (response === responses["github"] || response === responses["open github"]) {
        async function delayDo() {
            await delay(2000);
            window.open("https://www.github.com/berakpaijo/", "_blank");
            window.open("https://www.github.com/Rifky1720/", "_blank");
        }
        delayDo();
    }
    if (response === responses["instagram"] || response === responses["open instagram"]) {
        async function delayDo() {
            await delay(2000);
            window.open("https://www.instagram.com/berakpaijo/", "_blank");
            window.open("https://www.instagram.com/minyaktelonmaxx", "_blank");
        }
        delayDo();
    }
    if (response === responses["youtube"] || response === responses["open youtube"]) {
        async function delayDo() {
            await delay(2000);
            window.open("https://www.reddit.com/user/LordPaijo/", "_blank");
        }
        delayDo();
    }
    if (response === responses["reddit"] || response === responses["open reddit"]) {
        async function delayDo() {
            await delay(2000);
            window.open("https://www.reddit.com/user/LordPaijo/", "_blank");
        }
        delayDo();
    }
    if (response === responses["threads"] || response === responses["open threads"]) {
        async function delayDo() {
            await delay(2000);
            window.open("https://www.threads.net/@berakpaijo", "_blank");
        }
        delayDo();
    }
    if (response === responses["tiktok"] || response === responses["open tiktok"]) {
        async function delayDo() {
            await delay(2000);
            window.open("https://www.tiktok.com/@dikasih_info_maszeh?_t=8rUyw3CNqwG&_r=1", "_blank");
        }
        delayDo();
    }

    return response;
}

displayMessage('Padingo', 'Hello! My name is Padingo, I\'m your virtual assistant so it\'s my duty to assist you.');