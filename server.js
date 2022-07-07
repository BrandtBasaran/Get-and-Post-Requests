const { response } = require('express');
var express = require('express');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var app = express();

var ingredients = [
    {
        "id": "232kAk",
        "text": "eggs"
    },

    {
        "id": "234frA",
        "text": "milk"

    },

    {
        "id": "2f23rA",
        "text": "bread"

    },

    {
        "id": "234619",
        "text": "salt"

    },
];

app.get('/', function(request, response) {
    response.send(ingredients);
});

app.post('/', function(request, response) {
    var ingredients = request.body;
    if (!ingredient || ingredient.text === "") {
        response.status(500).send({error: "Your ingredient must have name"});
    } 
    else {
        ingredients.push(ingredient);
        response.status(200).send(ingredients);
    }
})


app.listen(3000, function() {
    console.log("First API running on port 3000")
});

