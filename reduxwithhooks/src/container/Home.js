import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {newsSelectors} from '../redux/newsData';
import {
    getLatestNews,
    getGalleryNews,
    getArticleNews
} from '../services/getNewsData';
import LatestNews from '../component/Home/LatestDisplay';
import GalleryNews from '../component/Home/GalleryDisplay';
import ArticleNews from '../component/Home/ArticleDisplay';


const Home = () => {
    const dispatch = useDispatch();

    const latestNewsList = useSelector(
        newsSelectors.getLatestNews
    )

    const galleryNewsList = useSelector(
        newsSelectors.getGalleryNews
    )

    const articleNewsList = useSelector(
        newsSelectors.getArticleNews
    )

    console.log(">>>latestNewsList",latestNewsList)
    console.log(">>>galleryNewsList",galleryNewsList)

    useEffect(() =>{
        dispatch(getLatestNews())
        dispatch(getGalleryNews())
        dispatch(getArticleNews())
    },[])

    return (
        <>
           <LatestNews ldata={latestNewsList?.data}/>
           <ArticleNews adata={articleNewsList?.data}/>
           <GalleryNews gdata={galleryNewsList?.data}/>
        </>
    )

}

export default Home