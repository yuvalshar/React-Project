function List() {
    
const fruits = [{id: 1, name: "apple", calories: 95},
                   {id: 2, name: "orange", calories: 47},
                   {id: 3, name: "coconut", calories: 159},
                   {id: 4, name: "lemon", calories: 29},
                   {id: 5, name: "watermelon", calories: 30}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALPHABRTICAL
    fruits.sort((a, b) => a.calories - b.calories); //NUMERIC
    // fruits.sort((a, b) => b.calories - a.calories); //REVERSE NUMERIC
    
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // const fruits = fruits.filter(fruit => fruit.calories >= 100);
    
    const listItems = fruits.map(fruit =>     <li key = {fruit.id}>
                                                    {fruit.name}: &nbsp;
                                                   <b>{fruit.calories}</b></li>);
    
    return(<ul>{listItems}</ul>);
    
}

export default List