console.log("Hi there - ecommerce app coming soon!")

//use express to setup a new web server
const express = require('express')
const path = require('path')

const app = express()//obj that describes all the things our web server can. What kind of request to receive, and what to do when it comes (config)

//route handler: what to do when it receives an network request coming from the browser
app.get('/12', (req, res)=>{
    //req === incoming request from browser into our server and res is outgoning response (server -> browser)
    //extract user info -> req || communicate or interact w/user -> res

    res.send(`
    <div>
        <form method="post">
            <input name="email" type="email" placeholder="Enter email">
            <input name="password" type="password" placeholder="password">
            <input name="passwordConfirmation" type="password" placeholder="password confirmation">
            <button>Submit</button>
        </form>
    </div>
    `)
})

app.post('/12', (req, res)=> {
    res.send('Account created; The form-data has undergone a POST-request')
})


/*
- input ele name attribute, query string, form's method = POST, browser executes a post call, 404 not found, server tries to handle the post but need a route handler to process a post call,
form data inside response.body

*/



//start listening for incoming network trffic via port

app.listen(3001, ()=>{
    console.log('Listening')
})

//when we type in localhost:3001 we are making an http request to our express server hosted in our local machine. We make an http request (local...) -> express server sees the incoming request -> responds (w/res.send "message") -> browser receives this message which it loads up/prints on the screen



/*
LL:

1.//my approach in creating a new route handler to serve an html file; path.join is need to create an absolute path to our html file, and  __dirname -> built-in Node variable holding current directory 
app.get('/signup', (req, res)=>{
    res.sendFile(path.join(__dirname, '/signup.html'))
})

2. express and node works together on understanding the content we pass as RESPONSE to be read by browser. If the content looks like html, then browser is going to render it as html

*/