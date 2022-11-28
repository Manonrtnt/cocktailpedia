const SearchIngredient = {
    template: 
    `<aside>
        <i class="fa-sharp fa-solid fa-book-bookmark fa-3x"></i>
        <h3>Rechercher un cocktail par ingrédient</h3>
        <select @change="selectOption($event)">
            <option value="">--Choisir un ingrédient--</option>
            <option v-for="ingredient in ingredients">{{ingredient.strIngredient1}}</option>
        </select>
        <i v-if="message">{{message}}</i>
        <br>
        <button type="submit" @click.prevent="searchByIngredient">Rechercher</button>
    </aside>`,
    // props : retrieve data ingredients from parent component 
    props: ["ingredients"],
    // emit : send data to parent component
    emit : ["result"],
    data() {
        return { 
            selectedOption : '',
            dataTemp : [],
            message : null,
        };
    },
    methods : {
        //!FETCH API
        searchByIngredient() {
            // condition if the user has selected ingredient
            if(this.selectedOption){
                // fetch with the selected option 
                fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + this.selectedOption)
                .then(
                    (response) => {
                        response.json().then((data) => {
                            let tabIngredient = data.drinks
                            // loop : select each cocktail with idDrink 
                            for (let i = 0; i < tabIngredient.length; i++) {
                                fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + tabIngredient[i]["idDrink"])
                                    .then(
                                        (response) => {
                                            response.json().then((data) => {
                                                // save cocktail info
                                                this.dataTemp[i] = data.drinks[0]
                                                this.message = null
                                            })
                                        }
                                    )
                            };
                        });
                    }
                )
                // $emit : send data to parent component 
                this.$emit("result", this.dataTemp)
            // else display a message and return 0 to parent component
            } else {
                this.message = "select an ingredient"
                this.$emit("result", 0); 
            }
        },
        // retrieve the value of the selected field
        selectOption(event){
            this.selectedOption = event.target.value;
        }
    },
};

export default SearchIngredient;