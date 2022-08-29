function useState<S extends number | string = number>() {
    let state: S;

    function getState() {
        return state;
    }

    function setState(newState: S) {
        state = newState;
    }

    function logger(newState: S) {
        console.log("Logging...");
        console.log(newState);
    }

    return { getState, setState, logger };
}

const newState = useState();

newState.setState(123);

newState.logger(123321); 

console.log(newState.getState());