# Voice to Text Converter

This project is a web application that allows users to convert their spoken words into text. It demonstrates how to integrate speech recognition functionality into a web application using JavaScript and interact with a server-side PHP script to save the transcribed text.

## Features

1. **Speech Recognition**: The application uses the `webkitSpeechRecognition` API to capture the user's spoken words and convert them into text.
2. **Text Display**: The transcribed text is displayed in a textarea for the user to view and interact with.
3. **Server-side Integration**: The application sends the transcribed text to a PHP script running on a server (in this case, `localhost:3000`) using an AJAX request. The PHP script saves the transcribed text to a database.

## Technologies Used

- HTML
- CSS
- JavaScript
- PHP
- MySQL (for the database)

## How to Use

1. **Set up the Server Environment**:
   - Install a local web server (e.g., XAMPP, WAMP, or MAMP) that includes PHP and MySQL.
   - Create a database named `voice_to_text` and a table named `transcripts` with a column named `text` to store the transcribed text.
   - Update the `$servername`, `$username`, `$password`, and `$database` variables in the `save_transcript.php` file with your server configuration.

2. **Run the Application**:
   - Place the HTML, CSS, and JavaScript files in your local web server's document root.
   - Open the HTML file in a web browser (preferably Chrome or another browser that supports the `webkitSpeechRecognition` API).
   - Click the "Start speaking" button and begin speaking. The transcribed text will be displayed in the textarea and simultaneously saved to the database.

## File Structure

- `index.html`: The main HTML file that contains the structure of the web application.
- `style.css`: The CSS file that styles the web application.
- `voiceTotext.js`: The JavaScript file that handles the speech recognition and AJAX request to the server.
- `save_transcript.php`: The PHP script that receives the transcribed text from the AJAX request and saves it to the database.

## Output 

(https://github.com/user-attachments/assets/2897c116-c261-459f-ba18-6eae07144222)



