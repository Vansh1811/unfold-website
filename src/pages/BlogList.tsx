import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  BookmarkPlus,
  Twitter,
  Facebook,
  Linkedin,
  Tag,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
}

const blogPosts: Record<string, BlogPost> = {
  'modern-web-design-trends-2024': {
    id: 'modern-web-design-trends-2024',
    title: 'Modern Web Design Trends That Will Dominate 2024',
    excerpt: 'Discover the latest web design trends that are shaping the digital landscape in 2024. From minimalism to interactive experiences.',
    content: `
      <p>The world of web design is constantly evolving, and 2024 promises to bring some exciting new trends that will reshape how we think about digital experiences. As we move forward, designers are focusing more on user experience, accessibility, and creating meaningful connections between brands and their audiences.</p>

      <h2>1. Minimalism with Purpose</h2>
      <p>Minimalist design continues to dominate, but with a twist. In 2024, we're seeing "purposeful minimalism" where every element serves a specific function. This approach reduces cognitive load while maintaining visual appeal.</p>

      <h2>2. Bold Typography</h2>
      <p>Typography is taking center stage with oversized fonts, custom typefaces, and creative text treatments. Designers are using typography as a primary design element rather than just a way to convey information.</p>

      <h2>3. Interactive Micro-animations</h2>
      <p>Subtle animations and micro-interactions are becoming more sophisticated, providing feedback and guiding users through the interface in intuitive ways.</p>

      <h2>4. Dark Mode Design</h2>
      <p>Dark mode isn't just a trend anymore—it's an expectation. Modern websites are being designed with dark mode in mind from the ground up, not as an afterthought.</p>

      <h2>5. Sustainable Web Design</h2>
      <p>With growing environmental awareness, designers are focusing on creating more sustainable websites that consume less energy and resources.</p>

      <h2>Conclusion</h2>
      <p>These trends represent a shift towards more thoughtful, user-centered design approaches. By implementing these trends thoughtfully, designers can create websites that are not only visually appealing but also functional and accessible to all users.</p>
    `,
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Web Design',
    tags: ['Design', 'Trends', 'UI/UX', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1558655146-364adaf25c78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  }
};

const relatedPosts = [
  {
    id: 'seo-guide-small-business',
    title: 'Complete SEO Guide for Small Businesses in 2024',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1553830591-fddf9c784aab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'react-vs-vue-comparison',
    title: 'React vs Vue.js: Which Framework Should You Choose?',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
];

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <Button asChild>
            <Link to="/blog">← Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const shareUrl = `${window.location.origin}/blog/${post.id}`;

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-6 py-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm">
                    <BookmarkPlus className="h-4 w-4 mr-1" />
                    Save
                  </Button>
                  <div className="flex items-center space-x-2">
                    <Share2 className="h-4 w-4 text-gray-400" />
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-blue-600 prose-strong:text-gray-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${relatedPost.id}`}>
                    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-6">
                        <span className="text-xs text-blue-600 font-medium uppercase tracking-wide">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-800 mt-2 group-hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <div className="flex items-center text-blue-600 text-sm font-medium mt-4">
                          Read Article
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to implement these modern design trends in your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
