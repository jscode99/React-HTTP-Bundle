import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             posts: [],
             ErrMsg:''
         }
     }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((result) => {
            this.setState({posts:result.data})
        }).catch((err) => {
          this.setState({ErrMsg:'Error retrving data'})
        });
    }
     
    render() {
        const { posts,ErrMsg } = this.state
        
        return (
            <div>
                List Of Posts
                {
                    posts.length ?
                        posts.map(postData => <div key={postData.id}>{postData.title}</div>) :
                        null
                }
                {
                    ErrMsg ? <div>{ErrMsg}</div>:null
                }
            </div>
        )
    }
}

export default PostList
