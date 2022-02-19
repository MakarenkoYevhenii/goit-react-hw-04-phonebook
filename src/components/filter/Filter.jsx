import PropTypes from 'prop-types';

const Filter = ({ handleChange}) => {    
    
    return (

        <div className="form-group">
            <label htmlFor="" className="form-group-label">Фильтр:</label>
            <input  name="filter" onChange={handleChange} type="text" className="form-group-input" placeholder="по имени 'жертвы'" />
        </div>
    )
}

export default Filter;
Filter.propTypes={
        handleChange:PropTypes.func.isRequired,
}