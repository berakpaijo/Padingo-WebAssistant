# PADINGO VIRTUAL WEB ASSISTANT
  A web-based virtual assistant made by me, LordPaijo.

  ![](https://github.com/berakpaijo/Padingo-WebAssistant/blob/main/screenshots/ss-0.jpeg)

  ![](https://github.com/berakpaijo/Padingo-WebAssistant/blob/main/screenshots/ss-1.jpeg)

  ## DOCUMENTATION

  ### A Youtube video of testing the project
  [![youtube video](https://img.youtube.com/vi/eeAdXy7NGGU/0.jpg)](https://www.youtube.com/watch?v=eeAdXy7NGGU)
  
  ### REQUIREMENTS
    - A browser with working text-to-speech.
    - Any code editor that.
    - Live/Local server.

  Let's start by cloning the repo,
  ```bash
  git clone https://github.com/berakpaijo/Padingo-WebAssistant.git  # HTTP
  git clone git@github.com:berakpaijo/Padingo-WebAssistant.git      # SSH
  ```

  then change the directory to `Padingo-WebAssistant/`.
  ```bash
  cd Padingo-WebAssistant/
  ```

  And now we can start coding!

  ### CLASSES
  The list of all the classes inside `index.html`.

  ```html
  "main"                  <!-- The entirity of screen -->
  "image-container"       <!-- Container to render images, texts, and buttons -->
  "input"                 <!-- The speak button class -->
  "talk"                  <!-- The microphone button inside "input" -->
  "content"               <!-- User's recorded dialog text inside "input" -->
  "sosmed"                <!-- Social media links -->
  "say"                   <!-- A hint on how to use Padingo -->
  "faq-container"         <!-- Container for faqs -->
  "faq-content"           <!-- Content of the faqs in "faq-container" -->
  "ll"                    <!-- Names of creators -->
  ```

  ### Styling
  Style with your own desire! You can style the website by editing the `style.css` file.

  ```css
  .main                                     /* main */
  .main .say                                /* the say class to show hint on how to use Padingo */
  .main .ll                                 /* credits for the developers */
  .main .image-container                    /* image-container class to render main parts */
  .main .image-container h1                 /* Padingo logo/title */
  .main .image-container p                  /* description about Padingo */
  .main .input                              /* speak button */
  .main .input .talk                        /* microphone button inside "input" */
  .main .input .talk i                      /* the microphone logo inside the microphone button */
  .main .input .content                     /* user's recorded dialog */
  .main .image-container .sosmed            /* social media links */
  .main .image-container .sosmed button     /* buttons to redirect into social media pages */
  .main .faq-container                      /* containing faq contents */
  .main .faq-container .faq-content         /* faq contents */
  .main .faq-container .faq-content a       /* links inside the faq contents */
  ```

  ### Scripting
  Rewrite the code on your own behalf... don't be scared about it. Edit the code on `script.js` and find your ways of liking.

  Most of the parts of the code that you want to reconfigure are such as, `speak()`, `greetings()`, and `speakThis()`.

  ```JavaScript
  function speak(sentence) {
    /* ... */
    text_speak.rate = /* Your voice rate */;
    text_speak.pitch = /* Your voice pitch */;
    /* ... */
  }

  function greetings() {
    /* ... */

    if (hr >= 0 && hr < 12)       { speak(/* Your message */); }
    else if (hr == 12)            { speak(/* Your message */); }
    else if (hr > 12 && hr <= 17) { speak(/* Your message */); }
    else if (hr > 17 && hr <= 21) { speak(/* Your message */); }
    else { speak(/* Your message */); }
  }

  function speakThis(message) {
    /* ... */

    /* Greetings, Time, and Date */
    // 72
    if (message.includes(/* Any greeting methods, say like hello or hi */)) {
      const finalText = "Hello Boss"; /* Change this to anything, really */
      speech.text = finalText;
    }

    // 153
    else if (message.includes('time')) {
      const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
      const finalText = time;
      speech.text = finalText;
    }

    // 159
    else if (message.includes('date')) {
      const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
      const finalText = date;
      speech.text = finalText;
    }

    /* Opening Websites */
    else if (message.includes('open <website\'s name>')) {
      window.open("<Link to the website>", "_blank");
      const finalText = "Opening <The website>";
      speech.text = finalText;
    }

    /* ... */
  }
  ```

  All done, you can now run your already tweaked version of Padingo!

  ## Finishing
  Run the project on a live/local server.

  The project's deployed website is [padingo-webassistant.netlify.app](https://padingo-webassistant.netlify.app)

  Thank you for reading the entire documentation and using the project! There will be no license since this project is just a simple project. I made it open-source because I want people to not only use the already finished product but also the entirety of the codebase. This project is made for a coding competition in Indonesia that focuses on high school, junior high school, and elementary school.

  credits: [@azzamalfaruq062](https://github.com/azzamalfaruq062) [@reddevill007](https://github.com/reddevill007/reddevill007)


