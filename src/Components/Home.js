import React from 'react';
import './Styles/Home.css';
import Card from "./Card";
import Banner from "./Banner";
import Footer from "./Footer";
import { Link } from "react-router-dom";

 function  Home () {
  return (
      <>
      <section class="cover-home">
            <div class="cover___filter-home"></div>
                  <div class="cover___text-home">
                        <h1>Streetwear Brand</h1>
                        <h2>This is the second phrases of the site.</h2>
                  <Link to = "/shop" style={{ textDecoration: 'none' }}>
                   <button className="button">Shop</button>
                  </Link>
                  </div>
      </section>  
      <section className='card-container'>
      <Card name="Air Force 1" image ="https://i.ibb.co/qkpxxCL/shoes1.jpg" text="La leggenda continua a risplendere con Nike Air Force 1 '07 l'edizione originale da basket che rivisita un classico molto amato: strati esterni resistenti con impunture, finiture essenziali e il giusto tocco di lucentezza per valorizzarti al meglio." />
      <Card name="Air Force 2" image ="https://i.ibb.co/6tyrfRm/shoes2.jpg" text="Questa scarpa racchiude tutto ciò che ami di più: strati esterni ben definiti, uno stile da basket di grande impatto e la giusta dose di brillantezza per far risplendere il tuo stile di gioco. Il collare imbottito a taglio alto con chiusura a strappo aggiunge un comfort classico." />
      <Card name="Air Force 3" image ="https://i.ibb.co/p26L4Rc/shoes3.jpg" text="Sfoggia un look leggendario con Nike Air Max 270 G. La silhouette è una ricostruzione fedele dell'icona originale Big Air, con l'aggiunta di mesh traspirante e un innovativo motivo di trazione per prestazioni di gioco ai massimi livelli." />
      </section>
      <Banner image="https://i.ibb.co/qkpxxCL/shoes1.jpg" title="Scopri la nuova collezione" subtitle="Scontata da oggi al 30%" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eos ex repudiandae labore reprehenderit alias odio suscipit, autem voluptas quaerat tempora dicta id vitae facilis corporis obcaecati cum repellat quod quas, consequatur soluta similique. Eveniet, ullam porro. Quidem, obcaecati ex."/>
      <Footer />
      </>

  )
}


export default Home;