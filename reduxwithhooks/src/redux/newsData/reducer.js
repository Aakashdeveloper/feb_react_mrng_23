import {
    LATEST_NEWS,
    GALLERY_NEWS,
    ARTICLE_NEWS
} from './actionType';

export const initialState = {};

export default (state=initialState,action) => {
    switch(action.type){
        case LATEST_NEWS:{
            return{
                ...state,
                latestNews:action.payload
            }
        }
        case GALLERY_NEWS:{
            return{
                ...state,
                galleryNews:action.payload
            }
        }
        case ARTICLE_NEWS:{
            return{
                ...state,
                articleNews:action.payload
            }
        }
        default:
            return state
    }
}