import React from 'react';
import {useParams,useSearchParams} from 'react-router-dom';

const PostDetails = () => {
    let params = useParams();
    let [searchParams] = useSearchParams();
    return(
        <div className="panel panel-warning">
            <div className="panel-heading">
                {params.topic} Details Page
            </div>
            <div className="panel-body">
                <h1>{params.topic} Details Page</h1>
                <p>
                    {params.topic} Details Page is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
                <h2>You are on Page Number {searchParams.getAll('page')}</h2>
            </div>
        </div>
    )
}

export default PostDetails;