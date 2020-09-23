export default config => (state, action) => Object.keys(config).reduce((previousState, key) => {
    const reducer = config[key]

    const newValue = reducer(previousState.key, action)
    if (!newValue) {
        throw new Error(`A reducer returned undefined when reducing key::"${key}"`)
    }
    return {
        ...state,
        key: newValue,
    }
}, state)
