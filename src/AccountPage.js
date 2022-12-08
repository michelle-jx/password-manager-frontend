import React, { useState, useEffect } from 'react'
import AccountCollection from './AccountCollection'
import AddAccount from "./AddAccount";
import AddButton from './AddButton'

function AccountPage() {
    const [accounts, setAccounts] = useState([])
    const [users, setUsers] = useState([])
    const [passwords, setPasswords] = useState([])
    const [correctPin, setCorrectPin] = useState(false)

    

    
    useEffect(() => {
        fetchAll()
    }, [])
    
    const fetchAll = () => {
        fetch("http://localhost:9292/accounts")
            .then(resp => resp.json())
            .then(dataAcc => {
                /* console.log(dataAcc) */
                setAccounts(dataAcc)
            })
    }

    //if pin matches DB, setCorrectPin = true
     function handleSubmit(e) {
        //     setCorrectPin(true)
        e.preventDefault();
        console.log("submit") 
    }

    //where do we put the post??
    function handleAddAccount(newAccount) {
        setAccounts([...accounts, newAccount])
    }

    return (
            <div style={{ display: correctPin ? 'Show' : 'Hide' }}>
                <AddAccount handleSubmit={handleSubmit}/>
                <AddButton onClick={handleAddAccount} />
                <AccountCollection accounts={accounts}/>
            </div>
    )
}

export default AccountPage;