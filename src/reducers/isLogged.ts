const loggerReducer = (state = false, action: any) => {
    if (action.type === 'SIGN_IN') {
        return !state;
    } else {
        return state;
    }
};

export default loggerReducer;