import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "John C.", salary: 800, increase: true, rise: true, id: 1 },
                { name: "Alex B.", salary: 3000, increase: false, rise: false, id: 2 },
                { name: "Stiv S.", salary: 4000, increase: false, rise: false, id: 3 }
            ]
        }
        this.maxId = 4;
    }

    deletItem = (id) => {
        this.setState(({ data }) => {
            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArray = [...before, ...after];
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);
        //     const old = data[index];
        //     const newItem  = {...old, increase: !old.increase}
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];
        //     console.log(newArr);
        //     return {
        //         data: newArr
        //     }
        //     })
        //     или используя функцию map =>
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    // onToggleRise = (id) => {
    //     this.setState(({data}) => ({
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return {...item, rise: !item.rise}
    //             }
    //             return item;
    //         })
    //     }))

    // } можно избавиться от повторения путем переработки предыдущего метода

    render() {
        const increased = this.state.data.filter(item => item.increase === true).length
        return (
            <div className='app'>
                <AppInfo    numberOfEmployees = {this.state.data.length}
                            bonus = {increased}/>
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deletItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                    onAdd={this.addItem}
                    data={this.state.data} />
            </div>
        );
    }
}

export default App;