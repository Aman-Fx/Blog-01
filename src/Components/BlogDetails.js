import { useHistory, useParams } from "react-router-dom";
import { useFetch } from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:3333/blogs/" + id);
  const history = useHistory();

  const handleClick = () =>{
    fetch('http://localhost:3333/blogs/' + id, {
      method: 'delete'
    }).then(() => {
      history.push('/');
    })

  }

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loding...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by- {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
