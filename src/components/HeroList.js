import React from 'react';
import { connect } from "react-redux";
import { removeCharacterById } from '../actions';

const HeroList = (props) => {
    return(
        <div>
            <h4>Your Hero Squad</h4>
            <ul className="list-group">
                {
                    props.heroes.map(hero => {
                        return(
                            <li key={hero.id} className="list-group-item">
                                <div className="list-item">
                                    {hero.name}
                                </div>
                                <div className="list-item right-button" onClick={() => props.removeCharacterById(hero.id)}>-</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        heroes: state.heroes
    }
}

const mapDispatchToProps = disatch => {
    return{
        removeCharacterById: (id) => disatch(removeCharacterById(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeroList)