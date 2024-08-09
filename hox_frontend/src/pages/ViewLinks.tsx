import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewLinks: React.FC = () => {
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLinks = async () => {
      try {
        const response = await axios.get('/links'); // Ensure axios base URL is set correctly
        setLinks(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    getLinks();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Links</h1>
      <ul>
        {links.map((link: { id: string; title: string }) => (
          <li key={link.id}>
            <Link to={link.title}  >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewLinks;
