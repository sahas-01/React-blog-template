import { useState, useEffect } from "react";
import useFetch from "../../useFetch";
import BlogList from "../BlogList/BlogList";
import { data } from "../data";
import Homestyle from '../Home/Home.css'

const Home = () => {

    const {data : blogs,isPending,error} = useFetch('http://localhost:8000/blogs')
  

    // const handleDelete = (id) => {
    //     const filteredBlog = blogs.filter(blog=> blog.id != id)
    //     setBlogs(filteredBlog);
    // }
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    

    

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading.....</div>}
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}

export default Home;

