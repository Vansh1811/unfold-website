import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getBlogBySlug, getRecentBlogs } from '@/data/blogsData';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
  Contact,
} from 'lucide-react';

// Custom teaser copy per blog id
const blogTeaserById: Record<string, string> = {
  'us-incorp-part-1-c-corp':
    'Learn how to choose and register a Delaware C‑Corp, then unlock S‑Corp tax treatment so you protect your startup, stay investor‑ready, and avoid double taxation traps.',
  'us-incorp-part-2-llc':
    'Curious if an LLC is better than a C‑Corp for your US startup? This part breaks down when founders should prefer an LLC, key registration steps, and how to avoid costly compliance mistakes.',
  'us-incorp-part-3':
    'Not ready for a full‑fledged company yet? Explore how sole proprietorships, partnerships, and LLPs actually work in practice, and when they make sense for early‑stage founders.',
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const blog = getBlogBySlug(slug || '');
  const recentBlogs = getRecentBlogs(3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
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

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  const handleShare = () => {
    if (navigator && 'share' in navigator) {
      (navigator as any).share({
        title: blog.title,
        text: blog.summary,
        url: window.location.href,
      });
    } else {
      (navigator as any).clipboard.writeText(window.location.href);
      // plug your toast here if needed
    }
  };

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: blog.title },
  ];

  const teaserText = blogTeaserById[blog.id] ?? blog.summary;

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero */}
      <section className="hero-pattern pb-6 pt-10 md:pt-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={breadcrumbItems} />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 md:mb-5">
                <span className="inline-flex items-center rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  {blog.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] font-heading font-semibold text-navy leading-tight mb-3 md:mb-4">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-3 md:gap-5 text-xs md:text-sm text-slate-500 mb-5 md:mb-6">
                <div className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(blog.date)}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{blog.readTime}</span>
                </div>

                <div className="hidden h-4 w-px bg-slate-200 md:block" />

                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="ml-auto flex items-center gap-1.5 rounded-full border-slate-200 bg-white/70 text-xs font-medium text-slate-700 hover:border-gold/60 hover:text-navy"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  Share
                </Button>
              </div>

              <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                {blog.summary}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Body + sidebar */}
      <section className="pb-18 md:pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(260px,1fr)]">
            {/* Article */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="border border-slate-100 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.04)] rounded-2xl overflow-hidden">
                <CardContent className="p-5 md:p-7 lg:p-8">
                  {/* Smaller image + teaser */}
                  {blog.image && (
                    <div className="mb-5 flex flex-col sm:flex-row gap-4 items-start">
                      <div className="w-full sm:w-52 md:w-60 rounded-xl overflow-hidden shadow-sm bg-slate-100 flex-shrink-0">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-40 sm:h-44 md:h-52 object-cover transition-transform duration-500 hover:scale-[1.03]"
                        />
                      </div>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {teaserText}
                      </p>
                    </div>
                  )}

                  {!blog.image && (
                    <p className="mb-5 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {teaserText}
                    </p>
                  )}

                  {/* If you keep some HTML content, it appears under the teaser */}
                  {blog.content && (
                    <div
                      className="prose prose-sm md:prose-base max-w-none prose-headings:text-navy prose-headings:font-heading prose-a:text-gold hover:prose-a:text-yellow-600 prose-strong:text-navy"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                  )}

                  <div className="mt-8 md:mt-10 pt-6 border-t border-slate-200 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link to="/blog">
                      <Button
                        variant="outline"
                        className="border-navy text-navy hover:bg-navy hover:text-white"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Blog
                      </Button>
                    </Link>

                    <Button className="bg-gold hover:bg-yellow-500 text-gold font-semibold">
                      <Link
                        to={blog.externalUrl || '#'}
                        className="flex items-center gap-2"
                      >
                        Go to full article
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="sticky top-28 space-y-6 md:space-y-8">
                <Card className="shadow-card border border-slate-100 bg-white/95 rounded-2xl">
                  <CardContent className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-heading font-semibold text-navy mb-4 md:mb-5">
                      Recent Posts
                    </h3>
                    <div className="space-y-4">
                      {recentBlogs
                        .filter((recentBlog) => recentBlog.id !== blog.id)
                        .slice(0, 3)
                        .map((recentBlog) => (
                          <Link
                            key={recentBlog.id}
                            to={`/blog/${recentBlog.slug}`}
                            className="block group"
                          >
                            <div className="flex gap-3">
                              <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100">
                                {recentBlog.image && (
                                  <img
                                    src={recentBlog.image}
                                    alt={recentBlog.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                  />
                                )}
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

                <Card className="bg-navy text-white shadow-card border-0 rounded-2xl">
                  <CardContent className="p-4 md:p-6 text-center">
                    <h3 className="text-lg md:text-xl font-heading font-semibold text-gold mb-3 md:mb-4">
                      Need Expert Help?
                    </h3>
                    <p className="text-sm md:text-base text-white/90 mb-4 md:mb-6">
                      Our experts are ready to help you with your business compliance
                      needs.
                    </p>
                    <Button className="bg-gold hover:bg-yellow-500 text-navy font-semibold w-full">
                      <Link
                        to="/contact"
                        className="flex items-center justify-center gap-2"
                      >
                        Contact Us
                        <Contact className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
