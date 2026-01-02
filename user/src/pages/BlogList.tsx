import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blogsData';
import Breadcrumbs from '@/components/Breadcrumbs';

const BlogList = () => {
  const breadcrumbItems = [{ label: 'Blog' }];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Header */}
      <section className="section-padding hero-pattern pb-10">
      {/* Header */}
<section className="section-padding hero-pattern pb-10">
  <div className="container-custom">
    <Breadcrumbs items={breadcrumbItems} />

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl"
    >
      {/* Eyebrow */}
      <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold mb-4">
        Insights & Resources
      </p>

      {/* Main heading with gold word + underline */}
      <div className="inline-block mb-4 md:mb-5">
        <h1 className="text-3xl md:text-5xl lg:text-[3.2rem] font-heading font-semibold text-navy leading-tight">
          Articles for{' '}
          <span className="text-gold">
            Ambitious   Founders
          </span>{' '}
          
        </h1>
        <div className="mt-2 h-[3px] w-24 rounded-full bg-gradient-to-r from-gold/80 via-gold to-transparent" />
      </div>

      {/* Subtitle */}
      <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
        Practical guidance on US incorporation, compliance, and growth so you can
        focus on building your company.
      </p>
    </motion.div>
  </div>
</section>
      </section>


      {/* Blog Grid */}
      <section className="pb-20">
        <div className="container-custom">
          {blogPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Articles are coming soon. Stay tuned.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="h-full"
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white/80 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold/70 hover:shadow-xl"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-slate-200">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gold/10 via-white to-navy/10">
                          <span className="text-xs font-medium tracking-wide text-slate-500">
                            COVER COMING SOON
                          </span>
                        </div>
                      )}

                      {/* Gradient overlay for text legibility */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Category badge */}
                      <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-700 shadow-sm">
                        {post.category}
                      </span>

                      {/* LinkedIn badge */}
                      {post.isExternal && (
                        <span className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-[#0A66C2] px-2.5 py-1 text-[11px] font-medium text-white shadow-sm">
                          <svg
                            className="h-3 w-3"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                          </svg>
                          LinkedIn
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                      <h3 className="mb-2 line-clamp-2 font-heading text-[1.05rem] font-semibold text-navy transition-colors group-hover:text-gold">
                        {post.title}
                      </h3>

                      <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                        {post.summary}
                      </p>

                      <div className="mb-4 flex items-center gap-4 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <div className="mt-auto flex items-center text-sm font-semibold text-gold">
                        <span className="relative">
                          Read article
                          <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gold transition-all group-hover:w-full" />
                        </span>
                        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogList;
