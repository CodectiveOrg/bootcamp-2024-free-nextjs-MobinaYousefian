type Post = {
  id: number;
  title: string;
};

export default async function Home() {
  const res: Response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      cache: "no-store",
    },
  );

  const posts: Post[] = await res.json();

  return (
    <main>
      <h1>به تماشاچی خوش اومدی!</h1>
      <hr />
      <h2>Test Request (Dynamic Route)</h2>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
