export default function Allposts({ postsList }) {
  return (
    <div className="allposts-container">
      <ul>
        {postsList.map((post) => {
          return (
            <li>
              <img src={post.coverImage} alt={post.title} />
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <div>
                <a href={post.slug}>Read more</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
