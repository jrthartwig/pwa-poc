const FilterButton = (props) => {
    const {value, onClickHandler, name} = props; 
    
    return(
        <button value={value} onClick={onClickHandler}>{name}</button>
    )
}

export default FilterButton; 