import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getBlogBySlug, getRecentBlogs } from '@/data/blogsData';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const blog = getBlogBySlug(slug || '');
  const recentBlogs = getRecentBlogs(3);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button 
            onClick={() => navigate('/blog')}
            className="bg-gold hover:bg-yellow-500 text-navy"
          >
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.summary,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: blog.title }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-pattern">
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
          
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="mb-4 md:mb-6">
              <span className="inline-block px-4 py-2 bg-gold/10 text-gold text-sm font-medium rounded-full">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-navy mb-4 md:mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 md:h-5 md:w-5" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                <span>{formatDate(blog.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 md:h-5 md:w-5" />
                <span>{blog.readTime}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="ml-auto"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Summary */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-12">
              {blog.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Featured Image */}
              <div className="aspect-video md:aspect-[16/9] overflow-hidden rounded-xl mb-8 md:mb-12">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog Content */}
              <div 
                className="prose prose-sm md:prose-lg max-w-none prose-headings:text-navy prose-headings:font-heading prose-a:text-gold hover:prose-a:text-yellow-600 prose-strong:text-navy prose-code:text-navy prose-code:bg-gold/10 prose-code:px-2 prose-code:py-1 prose-code:rounded"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 md:mt-16 pt-8 border-t border-gray-200">
                <Link to="/blog">
                  <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                  </Button>
                </Link>
                
                <Button className="bg-gold hover:bg-yellow-500 text-navy font-semibold">
                  Contact Our Experts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="sticky top-24 space-y-6 md:space-y-8">
                {/* Recent Posts */}
                <Card className="shadow-card border-0">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-heading font-semibold text-navy mb-4 md:mb-6">
                      Recent Posts
                    </h3>
                    <div className="space-y-4">
                      {recentBlogs.filter(recentBlog => recentBlog.id !== blog.id).slice(0, 3).map((recentBlog) => (
                        <Link
                          key={recentBlog.id}
                          to={`/blog/${recentBlog.slug}`}
                          className="block group"
                        >
                          <div className="flex gap-3">
                            <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden rounded-lg">
                              <img
                                src={recentBlog.image}
                                alt={recentBlog.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm md:text-base font-medium text-navy group-hover:text-gold transition-colors duration-300 line-clamp-2 mb-1">
                                {recentBlog.title}
                              </h4>
                              <p className="text-xs md:text-sm text-muted-foreground">
                                {formatDate(recentBlog.date)}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA Card */}
                <Card className="bg-navy text-white shadow-card border-0">
                  <CardContent className="p-4 md:p-6 text-center">
                    <h3 className="text-lg md:text-xl font-heading font-semibold text-gold mb-3 md:mb-4">
                      Need Expert Help?
                    </h3>
                    <p className="text-sm md:text-base text-white/90 mb-4 md:mb-6">
                      Our experts are ready to help you with your business compliance needs.
                    </p>
                    <Button className="bg-gold hover:bg-yellow-500 text-navy font-semibold w-full">
                      Get Free Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;