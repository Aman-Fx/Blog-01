import BlogList from "./Bloglist";
import { useFetch } from "./useFetch";

const Home = () => {
  const { data : blogs, isPending, error } = useFetch("http://localhost:3333/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loding...</div>}
      {blogs && <BlogList blogs={blogs}></BlogList>}
    </div>
  );
};

export default Home;

