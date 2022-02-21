import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Post = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

   useEffect( () => {
       async function getAllPost(){
           try {
            const post_data = await axios.get("http://django.localhost:8000/posts/")
            console.log(post_data.data)
            setPosts(post_data.data)
           } catch (error) {
               console.log(error)
           }
       }
       getAllPost()
   }, [])

  return (
    <>
        {
            posts.map((item, index) => 
                <div className="post-block" key={index}>
                    <div className="row">
                        <div className="col-md-3 col-xs-12 post-img">
                            <img src={item.blog_image} alt={item.title} />
                        </div>
                        <div className="col-md-9 col-xs-12">
                            <h3 className="heading">{item.title}</h3>
                            <div className="p-heading">
                                <p>{item.contents}</p>
                            </div>
                            <a href="#" className="btn btn-success text-white">
                            Read More</a>
                        </div>
                    </div>
                </div>
            )
        }
    </>
  )
}


export default Post;