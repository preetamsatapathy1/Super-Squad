import { ADD_CHARACTER, REMOVE_CHARACTER } from "../actions";
import { createCharacter } from "./helpers";

function heroes(state=[], action){
    switch(action.type){
        case ADD_CHARACTER:
            let heroes = [...state, createCharacter(action.id)]
            return heroes;

        case REMOVE_CHARACTER:
            let filteredHeroes = state.filter(character => character.id !== action.id)
            return filteredHeroes;

        default:
            return state;
    }
}


export default heroes