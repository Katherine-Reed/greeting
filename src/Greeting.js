import React, {useState} from "react"

export default function Greeting() {
    const [formData, setFormData] = useState({
        user: '',
        userName: ''
    })

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                user: 'Kat',
                [event.target.name]: event.target.value
            }
        })
    }

    function onSubmission(event) {
        event.preventDefault()
    }

    return (
        <main>
            <header>
                <label className='primary-color'>What's your name?<br />
                    <input type='text' name='userName' onChange={handleChange} value={formData.userName} />
                    <button onClick={onSubmission}>Submit</button>
                </label>
            </header>
            <section>
                <h1 className='primary-color'>Welcome back, {formData.user}!</h1>
                {formData.user === 'Kat' && <main>
                    <p>What's that? Your name isn't Kat? Well, the name is hard coded and I cannot change it.</p>
                    <p>That's not true, it's really easy to make the app accessible but the tutorial didn't cover that.</p>
                    <p>That's not true either. I'm just stubborn and can't be bothered to change it!</p>
                    <hr/>
                    <p className='italic'>Hi, {formData.userName}, this app was created to show you how much effort some people put into disrespecting others because they're selfish.<br/><br/>
                    This app would have been so much simpler to write if I had just used the name you provided in the first place.<br/><br/>
                    It's easy to respect someone else's name change or pronouns. Why make it hard on yourself and everyone else?</p>
                    <p className='bold'>Trans rights are human rights</p>
                    <p className='bold'>Love is love</p>
                    <p className='bold'>No<br/>H8</p>
                    </main>}
            </section>
        </main>
    )
}