# PADINGO VIRTUAL WEB ASSISTANT
  A web-based virtual assistant made by me, LordPaijo.

  ![](https://github.com/berakpaijo/Padingo-WebAssistant/blob/main/screenshots/ss-0.jpeg)

  ## Requirements
  - A WebKit-supported browser
  - Speech-Dispatcher
  - Speech-Dispatcher-Utils

  ## Documentation
  ### HTML
  You can edit the base of Padingo by editing the `index.html` file. To be honest with you, I don't think you need to do this. However, I can show you a list of the classes and IDs.

  Here's the list of the classes and IDs:

  ```html
  class main            -> main
  class image-container -> container for the images, links, and the title
  class sosmed  -> social media links
  class say     -> the hint on how to use Padingo
  class faq-container -> container for the faqs
  class faq-content   -> the contents of faqs (about, documentation, how to use)
  id chatbox -> container for the chatbot
  id chatlog -> container for the chats
  class talk -> the damn microphone button
  ```

  ### CSS
  Reading the CSS file might be confusing so uh... I guess here's another list. I mean styling is a crucial thing so yeah, here's another list of classes and IDs that you might want to edit:

  ```css
  .main
  .main .image-container
  .main .image-container .sosmed
  .main .faq-container
  .main .faq-container .faq-content
  #chatbox
  #chatlog && #chatlog div
  #userinput
  #chatbuttons
  .padingo && .padingo::after
  .usre && .user::after
  button
  ```

  ### JAVASCRIPT
  Now this one is tricky, but I'm sure you're already familiar with how things work here. I'll just point out which part of the code you might want to edit.

  First is the `getBotResponse()` function. It has one argument, `userMessage`, and to match the argument with the available messages the bot can understand you can add your desired commands to the `responses` array within the function.

  ```javascript
  function getBotResponse(userMessage) {
    const responses = {
      "<YOUR MESSAGE>":"<THE OUTPUT THAT WILL GET RETURNED (could be anything including functions)>",
    }
  }
  ```

  Second is the `speakThis()` function. It also has one argument called `message`, and to match the argument... you pretty much do the same thing as what you did before.

  ```javascript
  function speakThis(message) {
    const responses = {
      "<YOUR MESSAGE>":"<THE OUTPUT THAT WILL GET RETURNED (could be anything including functions)>",
    }
  }
  ```

  And there you have it, the not ultimate guide to style Padingo! (why would I even make this)

  ## More About
  Thanks for reading the [documentation](##Documentation), I appreciate your appreciation of my small and simple project. It's nothing much, but I've sworn to myself that I will do something better and bigger in the future. Fork all the way you want, contribute if you'd like to, and give it a comment!

  Visit the fully published project [here](https://padingo-webassistant.vercel.app).
  
  credits: [@azzamalfaruq062](https://github.com/azzamalfaruq062) [@reddevill007](https://github.com/reddevill007/reddevill007) [@rifky1720](https://github.com/rifky1720)


