import React, {useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'
import {useHistory} from 'react-router-dom'


const Quote = () => {
    const history = useHistory()
    const [ quote, setQuote ] = useState('')
    const [ tempQuote, setTempQuote ] = useState('')

    async function populateQuote() {
        const req = await fetch('/api/quote', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            },
        })

        const data = await req.json()
        if(data.status === 'ok') {
            setQuote(data.quote)
        } else {
            alert('theres an error in the quote data', data.error)
        }
        console.log("Quote data" ,data);
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            console.log("The user Quote",user)
            if(!user) {
                localStorage.removeItem('token')
                history.replace('/login')
            } else {
                populateQuote()
            }
        }
    }, [])

    async function updateQuote(e) {
        e.preventDefault()
        const req = await fetch('/api/quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                quote: tempQuote,
            }),
        })

        const data = await req.json()
        if(data.status === 'ok') {
            setTempQuote('')
            setQuote(data.quote)
        } else {
            alert('theres an error in the quote data', data.error)
        }
        console.log("Quote data" ,data);
    }

// not sure if this is even needed
    return (
        <div>
            <h1>Your quote: {quote || 'No quote found' }</h1>
            <form onSubmit={updateQuote}>
                <input
                    type="text"
                    placeholder="Quote"
                    value={tempQuote}
                    onChange={e => setTempQuote(e.target.value)}
                />
                <input 
                    type="submit"
                    vlaue="Update quote"
                />
            </form>
        </div>
    )
}

export default Quote;