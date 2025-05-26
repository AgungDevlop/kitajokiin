import React, { useEffect, useState } from 'react';

interface PostArticle {
  slug: string;
  content: string;
  author: string;
  publishedDate: string;
}

interface PostArticleProps {
  slug: string;
}

const PostArticle: React.FC<PostArticleProps> = ({ slug }) => {
  const [article, setArticle] = useState<PostArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch('/data/postArticle.json');
        if (!response.ok) {
          throw new Error('Failed to fetch article data');
        }
        const data: PostArticle[] = await response.json();
        const foundArticle = data.find((item) => item.slug === slug);
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          setError('Article not found');
        }
      } catch (err) {
        setError('Error loading article');
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  if (loading) {
    return <div className="text-gray-200 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-400 text-center">{error}</div>;
  }

  return (
    <div className="prose prose-invert text-gray-200 max-w-3xl mx-auto">
      <div dangerouslySetInnerHTML={{ __html: article!.content }} data-aos="fade-up" data-aos-delay="400" />
      <div className="mt-6 text-sm text-gray-400" data-aos="fade-up" data-aos-delay="500">
        <p>By {article!.author}</p>
        <p>Published on {new Date(article!.publishedDate).toLocaleDateString('id-ID', { dateStyle: 'long' })}</p>
      </div>
    </div>
  );
};

export default PostArticle;