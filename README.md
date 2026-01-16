# Daily Grind Coffee Shop Express Server

## How to Run
1. Install dependencies: `npm install`
2. Start the server either with `npm start` or nodemon: `npx nodemon`
3. Visit http://localhost:3001 in your browser and test routes `/` and `/contact` to view html content 

## Reflections
- I learned the difference between res.send and res.sendFile. Res.send sends text or JSON data directly to the path, while res.sendFile will read a file from the public directory and send its content. This was used to serve HTML files to the browser
- The path module with the __dirname variable helps to create absolute paths so the server finds the paths to the files reliably
- If I wanted to add another page, I would create another HTML file in the public folder and add a route handler with the path module that serves that file

This exercise was part of an assignment with Per Scholas.