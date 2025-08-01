'use client';

import { useState, useRef, useCallback } from 'react';

const MyComponent = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const lastItemRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore(); 
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const newItems = []; // Fetch new items
      setItems((prevItems) => [...prevItems, ...newItems]);
      setLoading(false);
      // If no more items to load, set hasMore to false
      if (newItems.length === 0) {
        setHasMore(false);
      }
    }, 1000);
  };

  return (
    <div style={{ height: '400px', overflowY: 'scroll' }} onScroll={handleScroll}>
      {items.map((item, index) => (
        <div key={index}>
          {item}
          {index === items.length - 1 ? <div ref={lastItemRef}></div> : null}
        </div>
      ))}
      {loading && <div>Loading...</div>}
      {!loading && hasMore && <div ref={lastItemRef}></div>}
    </div>
  );
};

export default MyComponent;
