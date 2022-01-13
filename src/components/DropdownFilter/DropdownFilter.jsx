const DropdownFilter = (props) => {
    const { label,
        name,
        options,
        onChangeHandler } = props;

    return (

        <div className="dropdown">
            <label>{label}</label>
            <select name={name} id={name} onChange={onChangeHandler}>
                {
                    options.map((option, index) => (
                        <option key={index} value={option.value}>{option.name}</option>
                    ))
                }
            </select>
        </div>
    )
}
export default DropdownFilter