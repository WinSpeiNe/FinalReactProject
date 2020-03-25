import React from "react";
import {connect} from "react-redux";
import {increment, decrement, singIn} from "./actions";

interface stateA {
    counter: number,
    isLogged: boolean
}

const mapStateToProps = (state: stateA) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = {increment, decrement, singIn};

function Temp() {
    return (
        <div>
            <h1>
                Counter:
            </h1>
        </div>
    )
}