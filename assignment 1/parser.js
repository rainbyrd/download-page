const https = require('https')
const url = 'https://www.littlewebhut.com/articles/simple_web_page/'
https.get(url, (response) => {
    let webpageText = ''
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
        webpageText = webpageText.split('h1>')
        webpageText = webpageText[1].slice(0, -2)
        webpageText = webpageText.split(' ')
        ------------------------------------------------------------------------
        Your array should look like this:
        ['Welcome', 'to', 'Node.js!', 'Working', 'with', 'npm', 'Installing', 'MongoDB']
        */

        // YOUR CODE HERE:
    webpageText = webpageText.split('h1>')

    for(i=0; i<webpageText.length; i++) {
        let w = webpageText[i].split('</h1')
        w = w.slice(0, -2)
        // w = w.split(' ')
        console.log(w)
}
    })
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`)
})
