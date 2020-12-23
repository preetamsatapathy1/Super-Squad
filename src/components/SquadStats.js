import React from 'react';
import { connect } from "react-redux";

const SquadStats = (props) => {

    const strength = () => {
        let strength = 0;
        props.heroes.forEach(hero => strength+= hero.strength)
        return strength
    }

    const intelligence = () => {
        let intelligence = 0
        props.heroes.forEach(hero => intelligence+= hero.intelligence )
        return intelligence
    }

    const speed = () => {
        let speed = 0
        props.heroes.forEach(hero => speed+= hero.speed )
        return speed
    }

    return(
        <div>
            <h4>Squad Stats</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <b>Overall Strength:</b> {strength()}
                </li>
                <li className="list-group-item">
                    <b>Intelligence:</b> {intelligence()}
                </li>
                <li className="list-group-item">
                    <b>Speed:</b> {speed()}
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        heroes: state.heroes
    }
}

export default connect(mapStateToProps, null)(SquadStats)