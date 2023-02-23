
import inquirer from "inquirer";
// import Square from "./lib/shape";
import fs from "fs";
import Square from "./lib/shape.js";


inquirer.prompt( [
    
        {
            type: "input",
            name: "text",
            message: "what text do you want for the logo?"
        },
        {
            type: "input",
            name: "textColor",
            message: "what text color do you want?"
        },
        {
            type: "list",
            name: "shape",
            message: "what shape do you want?",
            choices: ["circle", "triangle", "Square"]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "what shape color do you want?"
        },
        

    ]
).then(({text, textColor, shape, shapeColor}) => {
    console.log(data);

    let logoShape;
    

    // if the user chose square
    logoShape = new Square()
    // assuming you asked a question about shapeColor
    // blue
    logoShape.setColor(data.shapeColor);

    // take the data and create svg mar
    // create a NEW svg obj




    fs.writeFile("logo.svg", "<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"150\" cy=\"100\" r=\"80\" fill=\""+ data.shapeColor + "\" /><text x=\"150\" y=\"125\" font-size=\"60\" text-anchor=\"middle\" fill=\"white\">SVG</text></svg>" , 
            (err) => {console.log(err)
        })
})

// let square = new Square()

// console.log(square.render())

