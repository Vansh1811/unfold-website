import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts, searchBlogs } from '@/data/blogsData';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState(blogPosts);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = searchBlogs(searchQuery);
    setFilteredBlogs(results);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    // Real-time search
    if (query.trim() === '') {
      setFilteredBlogs(blogPosts);
    } else {
      const results = searchBlogs(query);
      setFilteredBlogs(results);
    }
  };

  const categories = [...new Set(blogPosts.map(blog => blog.category))];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding hero-pattern">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-4 md:mb-6">
              Our <span className="text-gold">Blog</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Stay updated with the latest insights, guides, and news about business compliance, 
              registration, and growth strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 md:py-12 bg-light-gray">
        <div className="container-custom">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSearch} className="relative mb-6 md:mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-10 pr-4 py-3 text-base bg-white border-gray-200 focus:border-gold focus:ring-gold"
                />
              </div>
            </form>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={searchQuery === '' ? 'default' : 'outline'}
                onClick={() => {
                  setSearchQuery('');
                  setFilteredBlogs(blogPosts);
                }}
                className="text-sm"
              >
                All Posts
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  onClick={() => {
                    setSearchQuery(category);
                    const results = searchBlogs(category);
                    setFilteredBlogs(results);
                  }}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="h-full bg-white shadow-card hover:shadow-card-hover transition-all duration-300 border-0 group overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    <CardContent className="p-4 md:p-6 flex flex-col h-full">
                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full">
                          {blog.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-heading font-semibold text-navy mb-3 line-clamp-2 group-hover:text-gold transition-colors duration-300">
                        {blog.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3 flex-grow leading-relaxed">
                        {blog.summary}
                      </p>

                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3 md:h-4 md:w-4" />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                          <span>{formatDate(blog.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 md:h-4 md:w-4" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <Link to={`/blog/${blog.slug}`} className="mt-auto">
                        <Button 
                          variant="outline" 
                          className="w-full border-navy text-navy hover:bg-navy hover:text-white group-hover:bg-gold group-hover:border-gold group-hover:text-navy transition-all duration-300"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-12 md:py-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-navy mb-4">
                No blog posts found
              </h3>
              <p className="text-muted-foreground mb-6 md:mb-8">
                Try searching with different keywords or browse all posts.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setFilteredBlogs(blogPosts);
                }}
                className="bg-gold hover:bg-yellow-500 text-navy font-medium"
              >
                Show All Posts
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 md:mb-6">
              Stay Updated
            </h2>
            <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed px-4">
              Subscribe to our newsletter for the latest business insights, compliance updates, 
              and expert tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-gold focus:ring-gold"
              />
              <Button className="bg-gold hover:bg-yellow-500 text-navy font-semibold px-6 md:px-8 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;