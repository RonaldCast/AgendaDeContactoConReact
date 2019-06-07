import React, {Component} from 'react'

class FormAddContact extends Component{
    constructor(){
        super()
        this.state = {
            name : '',
            lastName : '',
            telephone : ''
        }

        this.handleAddContactClick = this.handleAddContactClick.bind(this)
        this.handleGetValueChange = this.handleGetValueChange.bind(this)
    }

    handleGetValueChange(e){
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
        
    }
    async handleAddContactClick(e){
        e.preventDefault();
       

        if(this.validateInput()){
             let newContact = {
               nombre: this.state.name,
               apellido: this.state.lastName,
               telefono: this.state.telephone
             };
            var bodyContact = JSON.stringify(newContact);
        
            try {
              await  fetch("http://www.raydelto.org/agenda.php", {
                method: "POST",
                mode: "no-cors",
                redirect: "follow",
                headers: {
                  "Content-Type": "application/json"
                },
                body: bodyContact
              })
               this.props.onAddContact();
               this.setState({
                   name : '',
                   lastName : '',
                   telephone : ''
               })

            } catch (e) {
             
            }
        }
    }
    validateInput(){
          if (
            this.state.name.trim() === "" ||
            this.state.lastName.trim() === "" ||
            this.state.telephone.trim() === ""
          ) {
            return false;
          } else {
            return true;
          }
    }

    render(){
        return (
          <div className="col-md-4 container--form-contact">
            <div className="card shadow-box">
              <div className="card-header text-center">
                <h4>Form contact</h4>
              </div>
              <div className="card-body">
                <form id="formContact">
                    <div className="form-group">
                        <input type="text" name="name" id="" className="form-control" placeholder="Name" value={this.state.name} required onChange={this.handleGetValueChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="lastName" id="" className="form-control" placeholder="Lastname" required   value={this.state.lastName} onChange={this.handleGetValueChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="telephone" id="" className="form-control" placeholder="Telephone" required   value={this.state.telephone} onChange={this.handleGetValueChange}/>
                    </div>
                    <div className="text-center">
                        <button type="submit" id="btnSubmit"name="submit" className="btn btn-success pl-4 pr-4" onClick={this.handleAddContactClick}>Add</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default FormAddContact