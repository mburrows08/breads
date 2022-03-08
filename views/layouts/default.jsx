const React = require('react')

function Default(html){
    return (
        <html>
            <head>
                <title>Default</title>
            </head>
            <body>
                <h1>HTML Rendered!</h1>
                <div className="container">
                    {html.children}
                </div>
            </body>
        </html>
    )
}

//must use alternative syntax like className to make sure that there is not a syntax error for reserved words

/*We need to tell the code where to load the HTML children for our different views. 
We will do this in the body. 
When using {}, we are telling React/JSX to stop, evaluate what is inside, and then render the contents.*/

module.exports = Default