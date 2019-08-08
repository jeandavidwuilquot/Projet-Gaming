import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const Header = () => 
<section id="header">
    <div className="inner">
        <span className="icon solid major fa fa-cloud"></span>
        <h1>Hi, I'm <strong>Photon</strong>, another fine<br />
        little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
        <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
        lobortis feugiat sapien sed etiam volutpat accumsan.</p>
        <ul className="actions special">
            <li><a href="#one" className="button scrolly">Discover</a></li>
        </ul>
    </div>
</section>


const Profil = () => 
    <div>
        <Header/>
    </div>;

ReactDom.render(
    <Profil/>,
    document.getElementById('rech')
);