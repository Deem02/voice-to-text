# Voice to Text Converter

This is a simple HTML, CSS, and JavaScript application that allows users to convert their speech to text using the browser's built-in speech recognition API.

## Features

1. **Speech Recognition**: The application uses the `webkitSpeechRecognition` API to capture the user's speech and convert it to text.
2. **Real-time Transcription**: As the user speaks, the transcribed text is displayed in a textarea in real-time.
3. **Responsive Design**: The application is designed to be responsive and mobile-friendly, ensuring a consistent user experience across different devices.

## How to Use

1. Open the HTML file in a web browser that supports the `webkitSpeechRecognition` API (e.g., Google Chrome).
2. Click the "Start speaking" button to begin the speech recognition process.
3. Speak clearly, and the transcribed text will appear in the textarea.
4. To stop the speech recognition, simply click the "Start speaking" button again.

## HTML Structure

The HTML structure of the application consists of the following elements:

- `<h2>`: Displays the title of the application.
- `<div class="content">`: Contains the main content of the application.
- `<button id="speak">`: The button that starts and stops the speech recognition.
- `<textarea id="text" readonly>`: The textarea where the transcribed text is displayed.

## CSS Styles

The CSS styles define the layout and appearance of the application, including:

- Centering the content both vertically and horizontally on the page.
- Styling the button and textarea.
- Applying a drop shadow to the content container.

## JavaScript Functionality

The JavaScript code handles the speech recognition functionality:

1. The `speakbtn` element is selected using `document.getElementById("speak")`.
2. The `text` element is selected using `document.querySelector("#text")`.
3. An event listener is added to the `speakbtn` element, which creates a new `webkitSpeechRecognition` object when clicked.
4. The recognition language is set to `"en-GB"`.
5. The `onresult` event handler is used to update the `text` element with the transcribed speech.
6. The `start()` method is called to begin the speech recognition process.

