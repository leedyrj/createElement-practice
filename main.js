// You're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's that wacky aunt that you see every Christmas and Fourth of July.

// Put an article DOM element in your index.html with the id attribute value of messages.
// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
const messagesArt = document.querySelector('#messages')
// Create five (5) section elements, each with a class of message, and with textContent of your choosing.

const docFrag = document.createDocumentFragment();

const message1 = document.createElement('section');
message1.setAttribute('class', 'message');
message1.textContent = 'Hi!'
docFrag.appendChild(message1)

const message2 = document.createElement('section');
message2.setAttribute('class', 'message');
message2.textContent = 'How are you?'
docFrag.appendChild(message2)

const message3 = document.createElement('section');
message3.setAttribute('class', 'message');
message3.textContent = 'I am well!'
docFrag.appendChild(message3)

const message4 = document.createElement('section');
message4.setAttribute('class', 'message');
message4.textContent = 'What are you up to?'
docFrag.appendChild(message4)

const message5 = document.createElement('section');
message5.setAttribute('class', 'message');
message5.textContent = 'Bye'
docFrag.appendChild(message5)

// Using appendChild(), attach each message as a child to the messages element.


// Update your code from the previous exercise to add the chat messages to the messages elements via a document fragment.
const allMessage = document.querySelectorAll('.message');
messagesArt.appendChild(docFrag)

for (let i=0; i<allMessage.length; i++) {
    document.querySelectorAll('.message[i]').appendChild(docFrag);
}


// for (let i=0; i<articleHeaderAll.length; i++) {
//     articleHeaderAll[i].classList.replace('article__header', 'article__header__important');
//     console.log(articleHeaderAll[i].classList)
// }
