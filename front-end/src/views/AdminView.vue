<template>
<div class="admin">
      <h1>The SECRET Admin Page!</h1>
    <div class="heading">
      <div class="circle">1</div>
      <h2>Add a Recipe Item</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="name" placeholder="Name">
        <p></p>
        <input type="file" name="photo" @change="fileChanged">
        <button @click="upload">Upload</button>
      </div>
      <div class="form">
        <input type="textarea" v-model="diff" placeholder="Difficulty">
      </div>
      <div class="form">
        <input type="textarea" v-model="hours" placeholder="Hours to Make">
      </div>
      <div class="form">
        <input type="textarea" v-model="category" placeholder="Category">
      </div>
      <div class="upload" v-if="addRecipe">
        <h2>Name: {{addRecipe.name}}</h2>
        <p>Difficulty: {{addRecipe.diff}}</p>
        <p>Hours: {{addRecipe.hours}}</p>
	<p>Category: {{addRecipe.category}}</p>
        <img :src="addRecipe.path" />
      </div>
    </div>
    <div class="heading">
      <div class="circle">2</div>
      <h2>Edit/Delete a Recipe</h2>
    </div>
    <div class="edit">
      <div class="form">
        <input v-model="findRecipe" placeholder="Search">
        <div class="suggestions" v-if="suggestions.length > 0">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectRecipe(s)">{{s.name}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findRecipe">
        <input v-model="findRecipe.name">
        <input v-model="findRecipe.diff">
	<input v-model="findRecipe.hours">
	<input v-model="findRecipe.category">
        <img :src="findRecipe.path" />
      </div>
      <div class="actions" v-if="findRecipe">
        <button @click="deleteRecipe(findRecipe)">Delete</button>
        <button @click="editRecipe(findRecipe)">Edit</button>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AdminView',
  data() {
    return {
      name: "",
      file: null,
      addRecipe: null,
      recipes: [],
      findName: "",
      findRecipe: null,
      diff: "",
      hours: "",
      category: "",
    }
  },
  created() {
    this.getRecipes();
  },
  computed: {
    suggestions() {
      let recipes = this.recipes.filter(recipe => recipe.name.toLowerCase().startsWith(this.findName.toLowerCase()));
      return recipes.sort((a, b) => a.name > b.name);
    }
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    async upload() {
      try {
        console.log("trying upload");
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/recipes', {
          name: this.name,
          diff: this.diff,
          hours: this.hours,
          category: this.category,
          path: r1.data.path
        });
        this.addRecipe = r2.data;
console.log(this.addRecipe.path);
        console.log(" success");
      } catch (error) {
        console.log(error);
      }
    },
    async getRecipes() {
      try {
        let response = await axios.get("/api/recipes");
        this.recipes = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    selectRecipe(recipe) {
      this.findName = "";
      this.findRecipe = recipe;
    },
    async deleteRecipe(recipe) {
      try {
        await axios.delete("/api/recipes/" + recipe._id);
        this.findRecipe = null;
        this.getRecipes();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editRecipe(recipe) {
      try {
        await axios.put("/api/recipes/" + recipe._id, {
          name: this.findRecipe.name,
          diff: this.findRecipe.diff,
          hours: this.findRecipe.hours,
          category: this.findRecipe.category,
        });
        this.findRecipe = null;
        this.getRecipes();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>

<style scoped>

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}
</style>


