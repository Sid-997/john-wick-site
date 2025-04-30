import React from 'react';

function Gallery() {
  const images = [
    "https://www.tallengestore.com/cdn/shop/products/JohnWick-KeanuReeves-HollywoodEnglishActionMoviePoster-4_2a472c77-bed1-4a8b-81ad-6d82ab500c5e.jpg?v=1649071635",
    "https://www.rollingstone.com/wp-content/uploads/2023/03/john-wick-chapter-4-JW4_Unit_210715_00159_R_rgb.jpg?w=1581&h=1054&crop=1",
    "https://images.fandango.com/images/fandangoblog/19_John_Wick_3%20copy.jpg",
    "https://img.buzzfeed.com/buzzfeed-static/static/2023-02/22/21/asset/0703f192aed2/sub-buzz-797-1677100994-1.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
    "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/02/john-wick-chapter-4-behind-the-scenes-video-teases-crazy-fight-scenes.jpg?q=50&fit=crop&w=1140&h=&dpr=1.5",
    "https://wallpapercave.com/wp/wp4623777.jpg",
    "https://wallpapercave.com/wp/wp3917309.jpg",
    "https://wallpapercave.com/wp/wp4414555.jpg",
    "https://mrwallpaper.com/images/high/hd-john-wick-and-his-dog-x3kdwy4i9sztuvo1.webp",
  ];

  return (
    <div className="gallery-container" style={{ padding: '3rem', background: '#111', color: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>
        John Wick Gallery
      </h2>
      <div
        className="gallery-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: '0 0 20px rgba(255, 0, 0, 0.3)',
              transition: 'transform 0.3s ease',
            }}
          >
            <img
              src={img}
              alt={`John Wick ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
