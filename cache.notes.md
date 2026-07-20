What does revalidate = 0 mean?
=> It forces Next.js to bypass caching entirel, hence a page fetches complete;y freshh on every single request

When would you NOT want fresh data (e.g., a blog post)?
=> F etching fresh data constantly is unnecessary for static content like a blog post, where the text rarely changes and caching significantly improves page load speeds.

What is ISR (Incremental Static Regeneration) and when is it the sweet spot?
=> serves as the perfect sweet spot by allowing you to update static pages in the background after a specific time interval.  This approach delivers the blazing-fast performance of a static website while ensuring content never stays outdated for too long.