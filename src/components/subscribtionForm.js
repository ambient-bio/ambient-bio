import React from 'react';
import addToMailchimp from "gatsby-plugin-mailchimp"





class SubscribtionForm extends React.Component {

  constructor() {
    super()
    this.state = { email: "", result: {"result": null} }
  }

  _handleSubmit = async e => {
    e.preventDefault()
		const result = await addToMailchimp(this.state.email)
		console.log("submitted!")
    this.setState({result: result})
    if (result.result === "error"){
      if (result.msg.includes("already subscribed")){
        alert("You are already subscribed to the list.")
      }
      else {
        alert(result.msg)
      }
    }
  }

  handleChange = event => {
    this.setState({ email: event.target.value })
    console.log(this.state.email)
  }

  render() {
    return (
      this.state.result.result === "success" ? (
        <div className="peer h-full w-full rounded-3xl bg-darkblue px-3 py-3.5 font-sans text-sm font-[200] text-verylightblue focus:outline-none appearance-none max-w-[350px] mx-auto text-center">                
          Thank you. We will be in touch.
        </div>
      ) : (
        <form className="w-full max-w-[350px] mx-auto" onSubmit={this._handleSubmit}>
					
          {/* <div className="font-sans flex items-center py-2">   
            <input 
            className="w-full rounded-l-3xl rounded-r-none p-3 mr-0 text-verylightblue bg-darkblue focus:outline-none appearance-none font-[200] text-sm"
            placeholder="Email address" 
            type="text" 
            aria-label="email" 
            onChange={this.handleChange}/>
            <button className="flex-shrink-0 px-8 rounded-r-3xl text-darkblue p-3 bg-verylightblue focus:outline-none font-[200] text-sm" type="submit">Get notified</button>
          </div> */}


		  		<div class="relative flex h-12">
						<button
							className="!absolute right-1 top-1 z-10 select-none rounded-3xl bg-verylightblue py-3 px-4 font-sans text-xs font-[200] text-darkblue focus:outline-none appearance-none"
							type="submit"
						>
							Get notified
						</button>
						<input
							className="peer h-full w-full rounded-3xl bg-darkblue px-3 py-2.5 pr-20 font-sans text-sm font-[200] text-verylightblue focus:outline-none appearance-none"
							placeholder="Email address" 
							type="text" 
							aria-label="email" 
							onChange={this.handleChange}
							required
						/>
					</div>
        </form>
      )
    )
  }
}

export default SubscribtionForm;