import React from 'react';

export default class ContactForm extends React.Component {
    state = {
        'firstName': '',
        'lastName': '',
        'enquiry': '',
        'refSource': '',
        'contact': []
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    showInfo = () => {
        alert(`Form submitted successfully! \n
        Here is a summary of what you submitted: \n 
        ${this.state.firstName} ${this.state.lastName} \n
        Enquiry on ${this.state.enquiry} \n
        You heard about us from: ${this.state.refSource}`)
    }

    render() {
        return (
            <React.Fragment>
                <div className="form-group">
                    <label>First Name: </label>
                    <input name="firstName" type="text" value={this.state.firstName}
                    onChange={this.updateFormField}></input>
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input name="lastName" type="text" value={this.state.lastName}
                    onChange={this.updateFormField}></input>
                </div>
                <div className="form-group">
                    <label>Enquiry on: </label>
                    <input name="enquiry" type="radio" value="support" checked={this.state.enquiry==='support'}
                    onChange={this.updateFormField}/>Support
                    <input name="enquiry" type="radio" value="sales" checked={this.state.enquiry==='sales'}
                    onChange={this.updateFormField}/>Sales
                    <input name="enquiry" type="radio" value="marketing" checked={this.state.enquiry==='marketing'}
                    onChange={this.updateFormField}/>Marketing
                </div>
                <div className="form-group">
                    <label>How did you hear about us?</label>
                    <select name="refSource" value={this.state.refSource}
                    onChange={this.updateFormField}>
                        <option value="word of mouth">Word of Mouth</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="social media">Social Media</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>How would you like to be contacted? </label>
                    <input name="contact" type="checkbox" value="email" checked={this.state.contact.includes('email')}/>Email
                    <input name="contact" type="checkbox" value="phone" checked={this.state.contact.includes('phone')}/>Phone 
                    <input name="contact" type="checkbox" value="mail" checked={this.state.contact.includes('mail')}/>Mail
                </div>
                <div>
                    <button disabled={this.state.firstName === '' ? true: this.state.lastName === '' ? true: 
                    this.state.enquiry === '' ? true: this.state.refSource === '' ? true: false} onClick={this.showInfo}>Submit</button>
                </div>
            </React.Fragment>
            
        );
    }
}