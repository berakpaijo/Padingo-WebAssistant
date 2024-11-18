const btn = document.querySelector('.input');
const content = document.querySelector('.content');

/* Social Media */

const github = document.querySelector('#github');
const instagram = document.querySelector('#instagram');
const threads = document.querySelector('#threads');
const reddit = document.querySelector('#reddit');
const youtube = document.querySelector('#youtube');

github.addEventListener('click', ()=>{
    window.open("https://www.github.com/berakpaijo/", "_blank");
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

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

/* Custom message */
function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I did not understand what you said please try again";

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
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
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
