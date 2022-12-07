import React, {useState, useEffect} from 'react'
import AccountCollection from './AccountCollection'
import PinInput from "./PinInput";
import AddButton from './AddButton'

function AccountPage() {
    const [accounts, setAccounts] = useState([])
    const [users, setUsers] = useState([])
    const [passwords, setPasswords] = useState([])
    const [correctPin, setCorrectPin] = useState(false)


    
    //if pin matches DB, setCorrectPin = true
    function handleSubmit(e) {
        //if pin = pin from DB, need toggle card details
        if (users.pin.includes(e.target.value))//how do i grab pin by user?? .find first to see if it exists within the users.pin array?
          setCorrectPin(true)
        else setCorrectPin(false)
    }

    useEffect(()=>{
        fetchAll()
    },[])
    
    const fetchAll = () => {
       fetch("http://localhost:9292/accounts")
        .then(resp => resp.json())
        .then(dataAcc => {
            /* console.log(dataAcc) */
            setAccounts(dataAcc)
        })

       
        fetch("http://localhost:9292/passwords")
            .then(resp => resp.json())
            .then(dataPW => {
                /* console.log(dataPW) */
                setPasswords(dataPW)
            })

        
        fetch("http://localhost:9292/users")
            .then(resp => resp.json())
            .then(dataUser => {
                /* console.log(dataUser) */
                setUsers(dataUser)
            })
        }
   

    function handleAddAccount(newAccount) {
        setAccounts([...accounts, newAccount])
    }

    return (
        <div style={{display: correctPin? 'Show' : 'Hide'}}>
            <PinInput handleSubmit={handleSubmit}/>
            <AddButton />
            <AccountCollection accounts={accounts} users={users} passwords={passwords} />
        </div>
    )
}

export default AccountPage;