import React, {useState} from "react"

export default function Greeting() {
    const [user, setUser] = useState('')

    function handleClick() {
        setUser('Kat')
    }

    return (
        <main>
            <header>
                <label className='primary-color'>What's your name?<br />
                    <input type='text' placeholder='Enter your name' />
                    <button onClick={handleClick}>Submit</button>
                </label>
            </header>
            <section>
                <h1 className='primary-color'>Welcome back, {user}!</h1>
            </section>
        </main>
    )
}