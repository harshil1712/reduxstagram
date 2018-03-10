import React, { Component } from 'react';
import Photo from './photo';

class Single extends Component{
    render(){
        const i = this.props.posts.findIndex((post)=> post.code === this.props.params.postID);
        const post = this.props.posts[i];
        // console.log(i);
        return(
            <div className='single-photo'>
                <Photo i={i} post={post} {...this.props} />
            </div>
        )
    }
};

export default Single;