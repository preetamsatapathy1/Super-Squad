import React from 'react';
import { connect } from "react-redux";
import { addCharacterById } from "../actions";
import '../styles/index.css';

function CharacterList(props) {
    console.log(props.characters)
    return (
        <div>
            <h4>Characters</h4>
            <ul className='list-group'>
                {
                    props.characters.map(character => {
                        return(
                            <li className = "list-group-item" key={character.id}>
                                <div className='list-item'>{character.name}</div>
                                <div className='list-item right-button' onClick={() => props.addCharacterById(character.id)}>+</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        characters: state.characters,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addCharacterById: (id) => dispatch(addCharacterById(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)
