import React, { Component } from 'react'
import axios from 'axios'


class PostForm extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             userId: '',
             title: '',
             body:''
         }
     }
    
    changeHandler = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault()
        // console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then((result) => {
            console.log(result)
        }).catch((err) => {
           alert('Error Occured')
        });
    }
     
    render() {
        const { userId, title, body } = this.state
        
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type='text' name='userId' value={userId} onChange={this.changeHandler} placeholder='Username'/>
                    </div>
                    <div>
                        <input type='text' name='title' value={title} onChange={this.changeHandler} placeholder='title'/>
                    </div>
                    <div>
                        <input type='text' name='body' value={body} onChange={this.changeHandler} placeholder='body'/>
                    </div>
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}

export default PostForm
