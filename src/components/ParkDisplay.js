const ParkDisplay = (props) => {

    const loaded = () => {
        return (
            <>
            <h1>Park Page</h1>
            </>
        )
    }

    const loading = () => <h1>No park to display</h1>

    return props.park ? loaded() : loading()

};


export default ParkDisplay;