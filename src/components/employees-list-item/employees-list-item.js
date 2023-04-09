import './employees-list-item.css';

const EmployeesListItem = (props) => {

    let newSalary = 0;
    const { name, salary, onDelete, onToggleProp, increase, rise, onChangeValue } = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (rise) { classNames += ' like' }
    if (increase) { classNames += ' increase' }

    const getNewSalary = (e) => {
        newSalary = +(e.target.value.replace(/\$/, ''));
        props.onChangeValue(newSalary);
    }


    return (
        <li className={classNames}>
            <span data-toggle="rise"
                onClick={onToggleProp}
                className="list-group-item-label">{name}
            </span>
            <input type="text"
                className="list-group-item-input"
                onChange={getNewSalary}
                defaultValue={salary + ' $'}
            />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    onClick={onToggleProp}
                    className="btn-cookie btn-sm " data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm "
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
};

export default EmployeesListItem;

// constructor(props) {
//     super(props);
//     this.state = {
//         increase: false,
//         like: false
//     }
// }

// onIcrease = () => {
//     this.setState(({ increase }) => ({
//         increase: !increase
//     }
//     ))
// }

// onRise = () => {
//     this.setState(({like}) => ({
//         like: !like
//     }))
// }