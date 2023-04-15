import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('All'); // add state for category
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'http://192.168.1.8:3000/api/posts/posts',
        JSON.stringify({ title, content, category }), // include category in the payload
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      setTitle('');
      setContent('');
      setCategory('All'); // reset category after successful submission
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <form className="max-w-md w-full" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold mb-8">Create a New Post</h1>

        {/* Add select field for category */}
        <div className="mb-6">
          <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="All">All</option>
            <option value="Action/Adventure">Action/Adventure</option>
            <option value="Horror">Horror</option>
            <option value="Thriller/Suspense">Thriller/Suspense</option>
            <option value="Comedy">Comedy</option>
            <option value="Post-apocalyptic Fiction">Post-apocalyptic Fiction</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            rows={8}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
