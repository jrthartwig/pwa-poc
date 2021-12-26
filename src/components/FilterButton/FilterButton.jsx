const FilterButton = (props) => {
    
    return(
        <button value={props.value} onClick={props.onClickHandler}>{props.name}</button>
    )
}

export default FilterButton; 