#JSON ( Javascript Object NOtation)
- common way of  storing and working with data it all boils down to two things -
 Objects
Arrays

An example of Jason:(nested storing of data using array and objects)
[
  {
    "name": "Meowsy",
    "species": "cat",
    "foods": {
      "likes": [
        "tuna",
        "catnip"
      ],
      "dislikes": [
        "ham",
        "zucchini"
      ]
    }
  },
  {
    "name": "Barky",
    "species": "dog",
    "foods": {
      "likes": [
        "bones",
        "carrots"
      ],
      "dislikes": [
        "tuna"
      ]
    }
  },
  {
    "name": "Purrpaws",
    "species": "cat",
    "foods": {
      "likes": [
        "mice"
      ],
      "dislikes": [
        "cookies"
      ]
    }
  }
]
              or

i.e popular and agreed upon format for sending and storing data

##What we are doing in this project ?
- TO use Javascript in AJax to Load the Jason data by visiting this url -
[Example](https://learnwebcode.github.io/json-example/animals-1.json)
-on the fly i.e without reloading the page

- we need to respond to on click button events
- add new html to the page based on the content of our data variable
- only run our AJAX call when the the event of button click is triggered.

 ##AJAX
 -The process of sending and receving data without a page reload is known as Ajax

A -asynchronous (means in the background or not requiring the page refresh)
J -Javascript
A -and
X -XML (dataformat very similar to jason) since in recent year JSON have replaced XML as the
      most popular data form since XML was very important for very long time and so was very important in the history of web development therefore like a tribute we still call 'AJAX'
      but not 'AJAJ'
