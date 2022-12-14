import React from 'react'
import './Styles/Contact.css'
import Footer from './Footer'

export default function Contact() {
  return (
    <div>
        <section class="cover">
            <div class="cover___filter"></div>
                <div class="cover___text">
                    <h1>Streetwear Brand</h1>
                    <h2>This is the second phrases of the site.</h2>
                </div>
        </section>
        <form class="contact-form">
            <label>Nome</label>
            <input type={Text} placeholder="Mario" name='Nome'></input>
            <label>Cognome</label>
            <input type={Text} placeholder="Rossi" name='Cognome'></input>
            <label>Email</label>
            <input type={Text} placeholder="mariorossi@esempio.it" name='Email'></input>
            <label>Descrivi il tuo problema</label>
            <input type={Text} placeholder="Ho avuto un problema con un ordine..." name='Problema'></input>
            <input type ={'submit'}></input>
            </form>
        <Footer />
    </div>
  )
}
