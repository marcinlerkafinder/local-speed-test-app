# installation

Use node >= 10

`npm i`

# run

Download rendered html file using Chrome. Copy it to `public` folder - replace existing index.html file or use subfolders if needed (e.g. `./public/version1/index.html`)

Start the app:  
`npm run nodemon`

Goto `localhost:3060/` or `localhost:3060/version1` (if using folders) to see the page

# localhost tunnel

Use ngrok to simulate https tunnel and expose localhost to the public internet.

https://ngrok.com/

Run ngrok:  
`ngrok http localhost:3060`

Use https tunnel to simulate public internet connection (e.g. `https://6b7fe043.ngrok.io`)
