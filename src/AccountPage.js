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


    // const [accountData, setAccountData] = useState({
    //     website: "",
    //     username: "",
    //     password: ""
    // })

    function handleAddAccount(newAccount) {
        setAccounts([...accounts, newAccount])
    }









    return (
        <div style={{ display: correctPin ? 'Show' : 'Hide' }}>
            <AddAccount  handleAddAccount={handleAddAccount} accounts={accounts}/>
            <AddButton onClick={handleAddAccount} />
            <AccountCollection accounts={accounts} />
        </div>
    )
}

export default AccountPage;