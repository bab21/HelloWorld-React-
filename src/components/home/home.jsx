import React from 'react';
import './home.css';
import logo from 'C:/Users/hp/Desktop/HelloWorld/helloworld/src/assets/BL_logo_square_jpg.jpg'

class App extends React.Component{
  url ='https://www.bridgelabz.com/'
  constructor(){
    super();
    this.state={
      userName: '',
      nameError: ''
    }
  }
  onClick =($event)=>{
    console.log("save button is clicked",$event);
    window.open(this.url,"_blank");
  }

  onNameChange =(event)=>{
    console.log("value is ",event.target.value);
    const nameRegex =RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({userName: event.target.value})
    if(nameRegex.test(event.target.value)){
      this.setState({nameError: ''})
    }else{
      this.setState({nameError: "Name is Incorrect"})
    }
    // this.setState({userName: event.target.value})
  }

  render(){
    return(
      <>
      <div>
        <h1>Hello {this.state.userName} from BridgeLabz</h1>
        <img src={logo} onClick={this.onClick} width="25%" alt="The Bridge logo: a Bridge to Employment through lab works" />
      </div>
      <div>
        <input onChange={this.onNameChange}/>
        <span className="error-output">{this.state.nameError}</span>
      </div>
      <p>At BridgeLabz, we're a techie community of</p>
        <ul>
            <li>technologists</li>
            <li>thinkers</li>
            <li>Builders</li>
        </ul>
        <p>Working together to keep the Tech Employability of Engineers alive and accessible,
            so Tech Companies worldwide can get contributers and creators for Technology Solution
            We believe this act of human collaboration across an employability plateform is essential
            to individual growth and our collective future.</p>
        <p>To know more about us, visit <a href="https://www.bridgelabz.com/">BridgeLabz</a>
        to learn even more about our mission i.e. <strong>Employability to all</strong>.</p>
      </>
    );
  }
}
export default App;