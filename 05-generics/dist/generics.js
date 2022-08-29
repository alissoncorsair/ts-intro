"use strict";
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    function logger(newState) {
        console.log("Logging...");
        console.log(newState);
    }
    return { getState, setState, logger };
}
const newState = useState();
newState.setState(123);
newState.logger(123321);
console.log(newState.getState());
