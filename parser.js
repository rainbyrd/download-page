const https = require('https')
const url = 'https://web.ics.purdue.edu/~gchopra/class/public/pages/webdesign/05_simple.html'
https.get(url, (response) => {
    let webpageText = ''
    let webpageText1 = ''
    response.on('data', (chunk) => {
        webpageText += chunk.toString('utf8')
    })
    response.on('end', () => {
        // console.log(webpageText)
        /*
        Write some code that
        (a) finds all of the words from inside the <h1> tag of a webpage, and
        (b) converts those words into an array.
        So, if a webpage has the following tags:
        ------------------------------------------------------------------------
        <body>
            ...
            <h1>Welcome to Node.js!</h1>
            ......
            <h1>Working with npm</h1>
            ....
            <h1>Installing MongoDB</h1>
            ...
        </body>
        ------------------------------------------------------------------------
        Your array should look like this:
        ['Welcome', 'to', 'Node.js!', 'Working', 'with', 'npm', 'Installing', 'MongoDB']
        */

        // YOUR CODE HERE:
  let webpageText1 = webpageText.split('h1>')
  let webpageText2 = webpageText1.substring(0,10)
console.log(webpageText2)
// const words =
// const wordarray = words.split(" ")


    })
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`)
})
