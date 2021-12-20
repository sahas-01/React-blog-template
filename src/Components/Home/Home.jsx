import React from "react";
import { useState, useEffect } from "react";
import useFetch from "../../useFetch";
import BlogList from "../BlogList/BlogList";
import { data } from "../data";
import Homestyle from '../Home/Home.css'
import axios from "axios";

const Home = () => {

    const [blogs, setBlogs] = useState("");
    React.useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            })
    }, []);




    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} />}
        </div>
    );
}

export default Home;

