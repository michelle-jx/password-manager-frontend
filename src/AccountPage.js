import React, { useState, useEffect } from 'react'
import AccountCollection from './AccountCollection'
import AddEditAccount from "./AddEditAccount";
import AddButton from './AddButton'

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

    //if account.websites.!includes(website), run POST
    //else run PATCH
     function handleSubmit(e) {
        //     setCorrectPin(true)
        e.preventDefault();
        /*  if (!account.websites.includes(websites)) //how to give access to websites?
            //POST
            else handlePatchAccount() */
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
                <AddButton onClick={handleAddAccount} />
                <AccountCollection accounts={accounts} onPatchAccount={handlePatchAccount} onDeleteAccount={handleDeleteAccount}/>
            </div>
    )
}

export default AccountPage;