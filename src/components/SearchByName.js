const SearchName = {
    template: `
    <aside>
        <i class="fa-sharp fa-solid fa-magnifying-glass fa-3x"></i>        
        <h3>Rechercher un cocktail par nom</h3>
        <input type="text" v-model="nameCocktail" placeholder="Nom" />
        <i v-if="message">{{message}}</i>
        <br>
        <button type="submit" @click.prevent="searchByName">Rechercher</button>
    </aside>
    `,
    data() {
        return { 
            nameCocktail : '',
            message : null,
        };
    },
    // send the data to the parent component with $EMIT
    emit : ["result"],

    methods : {
        //!FETCH API
        searchByName(){
            // condition if the user has given a cocktail name
            if(this.nameCocktail){
                fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + this.nameCocktail).then(
                    (response) => {
                        response.json().then((data) => {
                            // condition if cocktail name exists or not
                            if(data.drinks){
                                // send the data to the parent component with $EMIT
                                this.$emit("result", data.drinks);
                                this.message = null 
                            } else {
                                this.message = "no result, try again"
                                this.$emit("result", 0); 
                            }
                        
                        });
                    }
                );
            // else display a message
            } else {
                this.message = "you have to write a cocktail name"
            }
            
        },
    },
};

export default SearchName;