
const initialState = [{
    id:1,
    todo:'Recolectar la piedra del Alma',
    done:false
}];


const todoReducer = ( state = initialState, action = {} ) => {

    if ( action.type === '[TODO] add todo') {
        // con los 3 puntos devuelves un nuevo estate y no mutado
        return [...state,action.payload];
    }

    //siempre debe devolver un estado
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false
}

const addTodoAction = {
    type:'[TODO] add todo',
    payload: newTodo
}

todos = todoReducer(todos,addTodoAction);

console.log(todos);