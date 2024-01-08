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

//middleware helper function 
const bodyParser = (req, res, next) => {

    if (req.method === "POST") {

        req.on('data', (data)=>{
            console.log
            const parsed = (data.toString('utf8').split('&'))
    
            const formData = {}
    
            for (let data of parsed) {
                const [key,value] = data.split('=')
                formData[key] = value
            }

            console.log(formData)
            req.body = formData
            next()//sign that our middleware function has completed its work, and call the next callback function 
        })
    } else {
        next()
    }

}

app.post('/12', bodyParser, (req, res)=> {
    //we pass the bodyParse function in the middle, and it has access to req, and res arguments, which it calls upon
    console.log(req)

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


3.
Q: 
for general search query into the website, we use .get request eg: 'steel pot'. However if user wants to log into their account, then we want to do a post request becuase of security, but post generally means we are creating a new entry of sorts (right?) but we are essentially doing a get type of activity right becuase we are try to tell tell the user if their password is accepted or not. Is it such that depsite it being a post - we necessarily dont have to create a new entry and can do what we want?

4. my approach to add key-value pair into formData obj        
for (let data of parsed) {
    const iterationArray = (data.split('='))
    formData[`${iterationArray[0]}`] = iterationArray[1]

    const [key,value] = data.split('=')
    formData[key] = value
}
*/