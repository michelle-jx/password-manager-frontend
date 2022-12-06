import React, {useState, useEffect} from 'react'
import AccountCollection from './AccountCollection'
// import { AccountCircleOutlined } from '@mui/icons-material'

function AccountPage() {
    const [accounts, setAccounts] = useState([])
    const [users, setUsers] = useState([])
    const [passwords, setPasswords] = useState([])


    useEffect(()=>{
        fetchAll()
    },[])
    
    const fetchAll = () => {
       fetch("http://localhost:9292/accounts")
        .then(resp => resp.json())
        .then(dataAcc => {
            console.log(dataAcc)
            setAccounts(dataAcc)
        })

       
        fetch("http://localhost:9292/passwords")
            .then(resp => resp.json())
            .then(dataPW => {
                console.log(dataPW)
                setPasswords(dataPW)
            })

        
        fetch("http://localhost:9292/users")
            .then(resp => resp.json())
            .then(dataUser => {
                console.log(dataUser)
                setUsers(dataUser)
            })
        }
   

    function handleAddAccount(newAccount) {
        setAccounts([...accounts, newAccount])
    }

    return (
        <div>
            <AccountCollection accounts={accounts} users={users} passwords={passwords}/>
        </div>
    )
}

export default AccountPage;