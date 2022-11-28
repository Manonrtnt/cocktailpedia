const SearchRandom = {

    template: `
    <aside>
        <i class="fa-sharp fa-solid fa-shuffle fa-3x"></i>
        <h3>Propose-moi un cocktail !</h3>
        <button type="submit" @click.prevent="randomCocktailAlcoholic">Surprends-moi</button>
        <button type="submit" @click.prevent="randomCocktailSoft"><em>Surprends-moi (sans alcool)</em></button>
    </aside>
    `,
    emit : ["result"],
    data() {
        return { 
            idSoftCocktail : 0,
        };
    },
    methods : {
        //!FETCH API
        randomCocktailAlcoholic(){
            fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(
                (response) => {
                    response.json().then((data) => {
                        this.$emit("result", data.drinks);   
                    });
                }
            );     
        },
        randomCocktailSoft(){
            fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=non_alcoholic").then(
                (response) => {
                    response.json().then((data) => {
                        console.log(data)
                    });
                }
            );     
        }
    },
};

export default SearchRandom;
