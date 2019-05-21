import React, { Component } from "react";

function Poem() {
    const poem = 
    `It is a great big silly little love
    That plays on my mind even still

    Red shag rug and cigarettes after sex
    Secret bathroom visits
    It’s time for bed
    I’ve been in love with you for months

    Audiobooks, pumpkin seeds, debates 
    Imagined houses, kids’ names and kitchen duties
    What’s this song called? I can’t tell you
    Space cows!
    The mom van across California

    Chopstick battles and unagi prizes
    You’re invited to be our third wheel
    Befriend her! I think I came on too strong
    Our corner table in our corner shop

    Long lazy mornings
    Eyemask battles and victory cuddles
    Warm naked bodies pressed together
    Feigned reluctance, groutfits and poo foods

    White sand, piña colada and love of my life
    Happiest moments of all time
    Chasing puppies and drunken kisses
    Gracias Charlotte, pero he’s mine

    Tents, sleeping bag pillows and campfires
    Sh…no bears.
    Hydrate!
    My metro mountain man

    Welcome to the Blaisdell retreat
    We make an excellent tortellini
    Shower, jacuzzi and swimming pool
    Accompanied with some sex a-la-carte

    No
    Yes!
    No more times than you say yes
    Damnit

    What movie do you want to watch
    Idm, just not one of yours
    He’s got a bloody double!
    He was dead the whole time!
    Another brewski?
    And my girlfriends asleep

    Booty slaps and soft groans
    Look at me, I love you radha
    Cum position
    Ah simba!
    Jizz tears

    Hi can I call?
    You’re not on mute!
    Look how strong my arms look
    I miss you jacky

    Candles flickering in a dark room
    Sweet and sour melancholy
    Teary eyed letters and weak smiles
    I’m gonna miss you red
    I’m glad to have someone 
    That makes goodbye so hard`;

    const poemParas = poem.split('\n').map((item, key) => 
        <span key={key} className="mono text-darkgray">{item}<br/></span>
    );
    
    return (
      <div className="text-columns">
        <div style={{marginBottom: 50}}>
        <p className="playfair text-navy half-highlight" style={{marginTop: 0, paddingLeft: 0, fontSize: 55}}>A Great Big Silly Little Love</p>
        </div>
        {poemParas}
    </div>
    );
  }


export default Poem;