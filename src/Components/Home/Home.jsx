import { data } from "../data";
import Homestyle from '../Home/Home.css'

const Home = () => {

    return (
        <div>
            {
                data.map(ele => (
                    <div className="blog-preview" key={ele.id} >
                        <h2>{ele.title}</h2>
                        <p>Written by {ele.author}</p>
                    </div>
                ))
            }

        </div>

    );
}

export default Home;