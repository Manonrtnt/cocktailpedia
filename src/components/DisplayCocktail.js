const DisplayCocktail = {
    template: 
    `<aside v-for="data in dataCocktail">
        <img :src="data.strDrinkThumb" alt=""/>
        <h3>{{data.strDrink}}<sup>{{data.strAlcoholic}}</sup></h3>
        <p>Catégorie : {{data.strCategory}}</p>
        <p>Liste ingrédients : </p>
        <ul>
            <li v-for="index in ingredientList(data)">{{index}}</li>
        </ul>
    </aside>`,
    
    props: ["dataCocktail"],
    methods : {
        ingredientList(data){
            let tabIngredient = [];
            for (let i=1; i<=15; i++){
                let addIngredient = data["strIngredient" + i];
                if (addIngredient){
                    tabIngredient.push(addIngredient);
                };
            };
            return tabIngredient;
        }
    }
};

export default DisplayCocktail;