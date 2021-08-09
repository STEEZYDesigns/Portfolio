/*

********************************NOTES **********************************

Portfolio Page, Started: 7/21/21    
                Finished:

*Header1st Draft Front End complete 8/1/21




Rough Draft Dates:

Want at least 4 pages. 
1 Home, which has my links and some greeting, a merry go round of my art
2 My Works, Pictures of my art which has bootstrap to expand when hover and clicked
3 About Me, Which is about me, my achievements and goals and has a picture of me 
4 Contact Me, some input fields with a clean background, functionality to send me an email :)


My Plan *

I will attempt to keep Components as the HTML structure and holder of JS functions

Functions will at first include changing the DOM's body so that I don't have to change the GlobalHeader and GlobalFooter.
I think I will strive to make that functionality rely on Express.JS as it is constantly listening when launched to respond
to the client and give an updated file. It should be very low-impact due to only changing part of the DOM.

Functions of a second nature may be for some dynamic interactions with client users. I may be able to handle most with Bootstrap
and some other libraries. Research!!!!!!!!!!
The other most pressing thing may be allowing the ability to leave me a message directly from the website. Though I believe that is simply
linking the functionality of a submit button to a database, and then subsequently clearing the database automatically if you don't 
check it before every time you renew the domain lease or manually doing it while checking the messages.

Functions of a third priority are that of the search bar which will at first be a Programmable Search Engine, and then one 
that searches my database for my products only. That is much farther down the line at the moment.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Things I think along the way,
*******

I must work with two pages first. I will focus on the HomeBody and the About Me . The first impression and the familiarization experience.

Create all the basic components. 

I will learn Bootstrap quickly tomorrow and apply it to create a fleshed out page.
yarn add bootstrap react-bootstrap --- in the VS Code Terminal to add vanilla and react bootstrap to project
check react-bootstrap docs for how to add in bootstrap components, alter them: https://react-bootstrap.github.io/getting-started/introduction/

Learn as to why images are not rendering:
for a Bootstrap Image component, use: src={require("./JOMGLogo.jpg")
path is required, unsure why, forgot to write in my source for the answer.
Unsure as to why. Cannot go back in file. i.e. ../../public/image.jpg ------ Instead, I moved images to the Component folder, and go "deeper"
to access the image I require. (While in Components, GlobalHeader.js i.e.) require("./WebsiteImages/image.jpg")



HomeBody Component: 
Welcome Message - Text with functionality like Steve Wilson
To do this. Add one curson element in a span |, add css to make cursor blink at all times
Use arrays for a string, add the string to the existing page letter by letter in a time delayed execution
of a function. Then we add the letters in and to remove them, we can fade out the sentence, remove the string from DOM
and then repeat the function. 

Jumbotron with image merry go round



New functionality. Search bar - connects to the gif background. Once the search Icon is clicked it will play the gif once, as if to signal the
execution of the search. after the 2 second clip passes, we then change the page component to the appropriate search queries results
Reset the gif to original frame.

Method 1: 
    1) Place the original starting frame by taking a screenshot of the gif
    2) Once the Search Icon is clicked, we replace the image with the gif
    3) Allow one rotation of the gif. Replace the gif with the OG start frame
    4) return search results in the Body of the page.

Method 2:
    1) Find gif control methods. Freeze on original starting frame
    2) Once Search is clicked, we play the gif ONCE, stop it on the OG start frame
    3) return search results in the Body of the page.
















Original Github ReadMe.md, retrieved 8/3/21
    # Portfolio
My Portfolio

Portfolio Page, Started 7/21/21 Finished TBD

Rough Draft Dates: . . .

Want at least 4 pages. 
1 Home, which has my links and some greeting, a merry go round of my art
2 My Works, Pictures of my art which has bootstrap to expand when hover and clicked
3 About Me, Which is about me, my achievements and goals and has a picture of me 
4 Contact Me, some input fields with a clean background, functionality to send me an email :)


My Plan *

I will attempt to keep Components as the HTML structure and holder of JS functions

Functions will at first include changing the DOM's body so that I don't have to change the GlobalHeader and GlobalFooter.
I think I will strive to make that functionality rely on Express.JS as it is constantly listening when launched to respond
to the client and give an updated file. It should be very low-impact due to only changing part of the DOM.

Functions of a second nature may be for some dynamic interactions with client users. I may be able to handle most with Bootstrap
and some other libraries. Research!!!!!!!!!!
The other most pressing thing may be allowing the ability to leave me a message directly from the website. Though I believe that is simply
linking the functionality of a submit button to a database, and then subsequently clearing the database automatically if you don't 
check it before every time you renew the domain lease or manually doing it while checking the messages.

Functions of a third priority are that of the search bar which will at first be a Programmable Search Engine, and then one 
that searches my database for my products only. That is much farther down the line at the moment.

+=
+=
+=
+=
+=
+=
+=
+=
+=
+=


I've decided to use react-bootstrap off: https://react-bootstrap.github.io/getting-started/introduction/

Getting started has wasted today for me. Following the docs provided are useless. Downloading the npm provided simply tells me I don't have the appropriate loader for the package. I resorted to youtube and found this: https://www.youtube.com/watch?v=8pKjULHzs0s I tried yarn on VS Code since I already use it, and it seems to have downloaded the package fine, so I will now attempt to create something and update this as I continue.
















The Following is completely wrong:


~~How to use Bootstrap. (with React) . . . src: https://react-bootstrap.github.io/getting-started/introduction/#installation

~~download Bootstrap through git bash - Node.js. 7/24/2021, use: npm install react-bootstrap@next bootstrap@5.0.2
you should be in the directory of the react project (i.e. src, public folder etc)

~~Optional: include a Browser Global package through a link.....

~~At the top of your index.js file, let your project be able to render Bootstrap by adding: import 'bootstrap/dist/css/bootstrap.min.css';

~~You can then add the following code block in index.js and it will allow your project to use a CDN -  
  A geographically distributed group of servers which work together to provide fast delivery of Internet content. 
  A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos

~~<linkrel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous"
/>
      
~~While a CDN does not host content and can’t replace the need for proper web hosting, it does help cache content at the network edge, which improves website performance.
  src: https://www.cloudflare.com/learning/cdn/what-is-a-cdn/

~~Now you're ready to begin USING Bootstrap!

~~To use bootstrap, you may use either of the following lines of code:
import Button from 'react-bootstrap/Button';
      // or less ideally
      import { Button, Accordion, etc etc } from 'react-bootstrap';

~~You may import in individual components so as to not load unused components, otherwise, use the second line of code, and simply continue adding onto list

~~render and return a DOM compromised of Bootstrap, React and HTML components
You may then alter components through SCSS. First create an index.scss or app.scss and a custom.scss - 
Then, you must include all SCSS Scripts in the App.js or Index.js file.

~~Customize your webpage by adding in regular CSS to your SCSS files. For any SCSS files, you have the ability to add in the following line:
@import "custom";
      
~~This will then refer to the custom.scss file IN THE SAME FOLDER. In this file, you should be customizing Boostrap components.
Add in the following to the custom.scss file to set changes


 ~~// import bootstrap to set changes 
 @import "../node_modules/bootstrap/scss/bootstrap";

*/