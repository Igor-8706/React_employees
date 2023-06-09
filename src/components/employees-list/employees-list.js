import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp, onChangeValue }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            // <EmployeesListItem name={item.name} salary={item.salary}/> или спред оператор ниже ->
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                onChangeValue={(newSalary) => onChangeValue(newSalary,id)}
            />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeesList;