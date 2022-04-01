const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/recipes', {
  useNewUrlParser: true
});


// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

// Create a scheme for items in the museum: a title and a path to an image.
const recipeSchema = new mongoose.Schema({
  name: String,
  path: String,
  diff: String,
  hours: String,
  category: String,
});

// Create a model for items in the museum.
const Recipe = mongoose.model('Recipe', recipeSchema);



// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});


// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/recipes', async (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    diff: req.body.diff,
    hours: req.body.hours,
    category: req.body.category,
    path: req.body.path,
  });
console.log("new Recipe added ", req.body.name);
  try {
    await recipe.save();
    res.send(recipe);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the museum.
app.get('/api/recipes', async (req, res) => {
  try {
    let recipes = await Recipe.find();
    res.send(recipes);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//delete items from the list
app.delete('/api/recipes/:id', async(req, res) => {
  try {
    await Recipe.deleteOne({
        _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//edit the title of an object
app.put("/api/recipes/:id", async(req, res) => {
  console.log("edit recipe");
  try {
    let recipe = await Recipe.findOne({
      _id: req.params.id
    });
          console.log("current name:", recipe.name);
         console.log("change to:", req.body.name);
    recipe.name = req.body.name;
    recipe.diff = req.body.diff;
    recipe.hours = req.body.hours;
    recipe.category = req.body.category;
    await recipe.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.listen(3001, () => console.log('Server listening on port 3001!'));
