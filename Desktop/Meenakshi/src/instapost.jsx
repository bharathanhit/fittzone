import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const InstagramFeed = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedTag = queryParams.get("tag");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null); // For modal

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://graph.facebook.com/v21.0/17841450342423502/media?fields=id,caption,media_url,permalink&access_token=EAAK26d54WrcBQDD8NNsIooqvL9wome0YebuP2AC9LpXjOPOrkRGxOGmGx7ZA56mV0QHn1uy0fwr7Dw9rsstSAFYJ1QbhZAeV3Gk7DzDtK0D9gjmJOuyyWMsvLm22n0IS1oBZCGCBjWTSqh4KLfcWnavpX5eEp6IjH2oyVlHCXaafEfGlwjX5iZAkW79Jj18qNtRU1ZC01U8SbVbWqWAtRAvZBEt8G5wme7P0DaO0BipxWfoJVH3YHSbyjaBpk71Ll9KqL5CgTNyqZBNYO4zJzIW"
        );
        const data = await res.json();

        if (data.data) {
          const filtered = data.data.filter((post) =>
            post.caption?.toLowerCase().includes(`#${selectedTag?.toLowerCase()}`)
          );
          setPosts(filtered);
        }
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [selectedTag]);

  if (loading) return <p className="text-center py-10">Loading posts...</p>;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">
          No posts found for #{selectedTag}.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="relative cursor-pointer group overflow-hidden rounded-xl shadow-md"
              onClick={() => setSelectedImage(post.media_url)}
            >
              <img
                src={post.media_url}
                alt={post.caption}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-60 transition duration-300"></div>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full px-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected Post"
              className="w-full rounded-xl max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InstagramFeed;