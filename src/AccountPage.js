import React, { useState, useEffect } from 'react'
import AccountCollection from './AccountCollection'
import AddEditAccount from "./AddEditAccount";
// import AddButton from './AddButton'

function AccountPage() {
    const [accounts, setAccounts] = useState([])
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

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submitted')
        /* console.log(typeof(e.target.websites.value)) */
        fetch("http://localhost:9292/accounts", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            websites: e.target.websites.value,
            username: e.target.username.value,
            password: e.target.password.value,
          }),
        })
        .then(resp => resp.json())
        /* .then(resp => console.log(resp)) */
        .then(handleAddAccount)
      }

    function handleAddAccount(newAccount) {
        setAccounts([...accounts, newAccount])
    }

    
    function handlePatchAccount(websites) {
        
    }
    
    function handleDeleteAccount(websites) {
        //write the filtered array here, return all account.id !== id
        setAccounts(accounts.filter((account) => {
            return account.websites !== websites}))
    }

    return (
            <div style={{ display: correctPin ? 'Show' : 'Hide' }}>
                <AddEditAccount onSubmit={handleSubmit}/>
                {/* <AddButton onClick={handleAddAccount} /> */}
                <AccountCollection accounts={accounts} onPatchAccount={handlePatchAccount} onDeleteAccount={handleDeleteAccount}/>
            </div>
    )
}

export default AccountPage;