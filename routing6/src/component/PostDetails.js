import React from 'react';

const PostDetails = (props) => {
    // console.log(props.location.search)
    // console.log(props.location.search.split('=')[1])
    //console.log(props.match.params.topic)
    return(
        <div className="panel panel-warning">
            <h1>Post Details</h1>
            {/* <div className="panel-heading">
                {props.match.params.topic} Details Page
            </div>
            <div className="panel-body">
                <h1>{props.match.params.topic} Details Page</h1>
                <p>
                    {props.match.params.topic} Details Page is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
                <h2>You are on Page Number {props.location.search.split('=')[1]}</h2>
            </div> */}
        </div>
    )
}

export default PostDetails;