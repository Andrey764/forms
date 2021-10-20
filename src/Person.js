import React from "react";

export class Person extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            surname:"",
            patronumic:"",
            age:0,
            phone:"",
            email:"",
            city:""
        }

        this.NameIn = this.NameIn.bind(this);
        this.SurnameIn = this.SurnameIn.bind(this);
        this.PatronymicIn = this.PatronymicIn.bind(this);
        this.AgeIn = this.AgeIn.bind(this);
        this.PhoneIn = this.PhoneIn.bind(this);
        this.EmailIn = this.EmailIn.bind(this);
        this.CityIn = this.CityIn.bind(this);
        this.Submit = this.Submit.bind(this);
    }
    Submit(event){
        alert(`${this.state.name}  ${this.state.surname}  ${this.state.patronumic}  `+
        `${this.state.age}  ${this.state.phone}  ${this.state.email} ${this.state.city}`)
    }

    NameIn(event) {
        this.setState({name: event.target.value});
    }
    SurnameIn(event) {
        this.setState({surname: event.target.value});
    }

      PatronymicIn(event) {
        this.setState({patronumic: event.target.value});
      }

      AgeIn(event) {
        this.setState({age: event.target.value});
      }

      PhoneIn(event) {
        this.setState({phone: event.target.value});
      }

      EmailIn(event) {
        this.setState({email: event.target.value});
      }

      CityIn(event) {
        this.setState({city: event.target.value});
      }
      render() {
        return (
          <form onSubmit={this.Submit} style={{display:"flex",flexDirection: "column", width:"30%",marginLeft:"auto",marginRight:"auto"}}>
            <label>
              Имя:
              <input type="text" value={this.state.name} onChange={this.NameIn} />
            </label>

            <label>
              Фамилия:
              <input type="text" value={this.state.surname} onChange={this.SurnameIn} />
            </label>

            <label>
              отчество:
              <input type="text" value={this.state.patronumic} onChange={this.PatronymicIn} />
            </label>

            <label>
              Возрост:
              <input type="text" value={this.state.age} onChange={this.AgeIn} />
            </label>

            <label>
              номер телефона:
              <input type="text" value={this.state.phone} onChange={this.PhoneIn} />
            </label>

            <label>
              емаил:
              <input type="text" value={this.state.email} onChange={this.EmailIn} />
            </label>

            <label>
              город проживания:
              <input type="text" value={this.state.city} onChange={this.CityIn} />
            </label>
            <input type="submit" value="Отправить" />
          </form>
        );
      }
}