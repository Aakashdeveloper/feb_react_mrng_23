import React from 'react';
import StockList from './stockList';
import UserList from './userList';
import Hoc from './Hoc';

const stocks =  [
    {
        id: 1,
        name: 'TCS'
            
    },
    {
        id: 2,
        name: 'Infosys'
    },
    {
        id: 3,
        name: 'Reliance'
    }
]

const Users = [
    {
        id: 1,
        name: 'Krunal'
          
    },
    {
        id: 2,
        name: 'Ankit'
    },
    {
        id: 3,
        name: 'Rushabh'
    }
  ]

const StockComponent = Hoc(StockList,stocks)
const UserComponent = Hoc(UserList,Users)

const App = () => {
    return(
        <>
            <StockComponent/>
            <UserComponent/>
        </>
    )
}

export default App