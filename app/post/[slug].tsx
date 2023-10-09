import { client } from "@/client";

type Post = {
  _id: string;
  title?: string;
  slug?: {
    current: string;
  };
};

export async function PostIndex() {
  const posts = await client.fetch<Post[]>(`*[_type == "post"]`);

  return (
    <ul>
      {posts ? (
        posts.map((post) => (
          <li key={post._id}>
            <a href={post?.slug?.current}>{post?.title}</a>
          </li>
        ))
      ) : (
        <></>
      )}
    </ul>
  );
}
