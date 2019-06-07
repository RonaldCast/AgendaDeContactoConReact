import React, { Component } from 'react'

export default class TableContact extends Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                     contacts: [],
                     searchContact: "",
                     countContact: 0,
                     filterContact: []
                   };

                   this.handleSeachContactOnChange = this.handleSeachContactOnChange.bind(
                     this
                   );
                 }

                 componentWillReceiveProps(nextProp) {
                   this.setState({
                     contacts: nextProp.listContacts,
                     countContact: nextProp.listContacts.length,
                     filterContact: nextProp.listContacts
                   });

   
                 }

                 handleSeachContactOnChange(e) {
                   console.log(this.state.contacts);

                   const { name, value } = e.target;
                   this.setState({
                     [name]: value
                   });

                   let filterContact = this.state.contacts.filter(
                     contact => {
                       return contact.nombre
                         .toUpperCase()
                         .includes(
                           this.state.searchContact.toUpperCase()
                         );
                     }
                   );

                   this.setState({
                     filterContact: filterContact
                   });
                 }

                 render() {
                   const listContact = this.state.filterContact.map(
                     (item, i) => {
                       return (
                         <tr key={i}>
                           <td>{item.nombre}</td>
                           <td>{item.apellido}</td>
                           <td>{item.telefono}</td>
                         </tr>
                       );
                     }
                   );

                   return (
                     <div className="col-md-8  container--table-contact">
                       <div className="card shadow-box">
                         <div className="card-header text-center">
                           <h4>
                             Contacts
                             <span className="ml-2 badge badge-success number--contact">
                               {this.state.countContact}
                             </span>
                           </h4>
                         </div>
                         <div className="card-body">
                           <div className="input-group">
                             <input
                               type="text"
                               className="form-control searchContact"
                               placeholder="Search for name"
                               onChange={
                                 this.handleSeachContactOnChange
                               }
                               name="searchContact"
                             />
                           </div>

                           <div className="table-contact mt-3">
                             <table className="table">
                               <thead className="thead-dark">
                                 <tr>
                                   <th>Name</th>
                                   <th>Lastname</th>
                                   <th>Telephone</th>
                                 </tr>
                               </thead>
                               <tbody className="bodyTableList">
                                 {listContact}
                               </tbody>
                             </table>
                           </div>
                         </div>
                       </div>
                     </div>
                   );
                 }
               }
