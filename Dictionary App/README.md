<h1>Dictionary App</h1>
A simple web-based dictionary application that allows users to search for word meanings, examples, synonyms, antonyms, and more. The application fetches data from the Dictionary API and displays it to the user in an interactive and responsive interface.
<h2>Usage</h2>
<h3>-->Search for a word by typing it into the search bar and clicking the Search button.</h3>
<h3>-->The app will fetch data from the Dictionary API and display:</h3>
      -->Word<br>
      -->Part of Speech<br>
      -->Meaning<br>
      -->Example sentence<br>
      -->Synonyms (if available)<br>
      -->Antonyms (if available)<br>
A <span><h3>Read More</h3></span> link for further information
<h3>API Used</h3>
The basic syntax of a URL request to the API is shown below:<br>

-->https://api.dictionaryapi.dev/api/<--version-->/entries/en/<--word--><br>

As an example, to get definition of English word hello using v2, you can send request to<br>

-->https://api.dictionaryapi.dev/api/v2/entries/en/hello and the result returned will be:<br>

```json
[
  {
    "word": "hello",
    "phonetic": "həˈləʊ",
    "phonetics": [
      {
        "text": "həˈləʊ",
        "audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
      },
      {
        "text": "hɛˈləʊ"
      }
    ],
    "origin": "early 19th century: variant of earlier hollo ; related to holla.",
    "meanings": [
      {
        "partOfSpeech": "exclamation",
        "definitions": [
          {
            "definition": "used as a greeting or to begin a phone conversation.",
            "example": "hello there, Katie!",
            "synonyms": [],
            "antonyms": []
          }
        ]
      },
      {
        "partOfSpeech": "noun",
        "definitions": [
          {
            "definition": "an utterance of ‘hello’; a greeting.",
            "example": "she was getting polite nods and hellos from people",
            "synonyms": [],
            "antonyms": []
          }
        ]
      },
      {
        "partOfSpeech": "verb",
        "definitions": [
          {
            "definition": "say or shout ‘hello’.",
            "example": "I pressed the phone button and helloed",
            "synonyms": [],
            "antonyms": []
          }
        ]
      }
    ]
  }
]
```






<h2>How it works:</h2>
<h3>User Input:</h3> The user enters a word in the search bar.
<h3>API Call:</h3> The app sends a request to the Dictionary API using the getWordInfo function.
<h3>Display Results:</h3> The word meaning, part of speech, synonyms, antonyms, and examples are displayed to the user.


