import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Leyi Li',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'Build an inclusive world',
        subTitle: 'Provide everyone an inclusive environment to live and learn',
        text: 'This is my personal goal and philosophy.'
      },
      about: {
        title: 'About Me',
        experience: [
          {title: 'Preschool Teacher Assistance',
          location: 'Denise Louie Education Center | Seattle, WA, USA',
          description: 'Organize classroom environment, Create lesson plans',
          date:"2018 - 2019",
          type: 'work'},
          {title: 'Master\'s Degree',
          location: 'University of Sussex | Brighton, United Kingdom',
          description: 'Major in International Education and Development',
          date:"2017 - 2018",
          type: 'education'},
          {title: 'Bachelor\'s Degree',
          location: 'Shenzhen University | Shenzhen, China',
          description: 'Major in Biology',
          date:"2012 - 2016",
          type: 'education'},
        ]
      },
      contact: {
        title: 'Let\'s Talk'
      }
    };
  }

  render() {
    return (
      <Router>
         <Container className="p-0" fluid={true}>

            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>Leyi Li</Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">

                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>

              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
            <Route path="/about" render={() => <AboutPage title={this.state.about.title} experience={this.state.about.experience} />} />
            <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

            <Footer />

         </Container>
      </Router>
    );
  }
}

export default App;
