import React, { Component } from 'react';

class Comments extends Component{
    renderComment(comment,i){
        return(
            <div className='comment' key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className='remove-comment' onClick={this.props.removeComment.bind(null,this.props.params.postID,i)}>&times;</button>
                </p>
            </div>
        )
    }
    handleSubmit(e){
        e.preventDefault();
        const postId = this.props.params.postID;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        console.log(postId,author,comment);
        this.props.addComment(postId,author,comment);
        this.refs.commentForm.reset();
    }
    render(){
        return(
            <div className='comment'>
                {this.props.postComments.map(this.renderComment)}
                <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit}>
                    <input type='text' ref="author" placeholder='author' />
                    <input type='text' ref="comment" placeholder='comment' />
                    <input type='submit' hidden />
                </form>
            </div>
        )
    }
};

export default Comments;