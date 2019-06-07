
import React, {Component} from 'react';
import '../style/App.css';

//components
import Navegation from './Navegation'
import FormAddContact from './FormAddContact';
import TableContact from './TableContact'

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts : []
    };

    this.handleGetAllContact = this.handleGetAllContact.bind(this)
  }

  handleGetAllContact() {
    fetch("http://www.raydelto.org/agenda.php")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          contacts: data,
        });
      });
     
    
  }

  componentDidMount(){
    this.handleGetAllContact()
  }

  render() {
    return (
      <div className="App">
        <Navegation />
        <section className="container mt-5">
          <div className="row">
            <FormAddContact onAddContact={this.handleGetAllContact}/>
            <TableContact listContacts={this.state.contacts} />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
