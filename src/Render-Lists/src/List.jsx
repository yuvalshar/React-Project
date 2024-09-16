function List() {
    
    const fruit = [{id: 1, name: "apple", clories: 95},
                   {id: 2, name: "orange", clories: 47},
                   {id: 3, name: "coconut", clories: 159},
                   {id: 4, name: "lemon", clories: 29},
                   {id: 5, name: "watermelon", clories: 30}];

    const listItems = fruit.map(fruits => <li key = {fruits.id}>{fruits.name}</li>);
    
    return(<ul>{listItems}</ul>);
    
}

export default List