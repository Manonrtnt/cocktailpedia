import SearchName from "./components/SearchByName.js";
import SearchIngredient from "./components/SearchByIngredient.js";
import SearchRandom from "./components/SearchByRandom.js";
import MainMenu from "./components/MainMenu.js";
import App from "./App.js";
import DisplayCocktail from "./components/DisplayCocktail.js";
import router from "./router/index.js";



const options = {
    data() {
        return { 
            ingredients: [],
            dataCocktail: [],
            displayMessage : "Use one of the forms to explore the cocktails!",
        };
    },
    //?COMPONENTS
    components: {
        MainMenu,
        SearchName,
        SearchIngredient,
        SearchRandom,
        App,
        DisplayCocktail
    },
    //?SETTER METHODS
    methods: {
        setResult(result){
            this.dataCocktail = result;
        },
    },
    //!MOUNTED API
    mounted() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").then(
            (response) => {
                response.json().then((data) => {
                    this.ingredients = data.drinks;
                });
            }
        );
    },
};

const app = Vue.createApp(options);

//!ROUTER
app.use(router);

//!MOUNT
app.mount("#app");