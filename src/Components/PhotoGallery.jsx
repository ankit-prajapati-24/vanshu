import ScrollAnimation from 'react-animate-on-scroll';
import i1 from '../images/Screenshot 2024-11-17 001310.jpg';
import i2 from '../images/Screenshot 2024-11-17 001131.jpg';
import i3 from '../images/Screenshot 2024-11-17 001242.jpg';
import i4 from '../images/Screenshot 2024-11-17 001414.jpg';
import i5 from '../images/Screenshot 2024-11-17 001439.jpg';
import i6 from '../images/Screenshot 2024-11-17 001511.jpg';
import i7 from '../images/Screenshot 2024-11-17 001511.jpg';
import i8 from '../images/WhatsApp Image 2024-11-17 at 09.44.57_7ae078ee.jpg';
import i9 from '../images/WhatsApp Image 2024-11-17 at 09.44.56_3d2e1afa.jpg';
import i10 from '../images/WhatsApp Image 2024-11-17 at 09.44.56_00465d8e.jpg';
import i11 from '../images/WhatsApp Image 2024-11-17 at 09.44.55_d58f959c.jpg';
import i12 from '../images/WhatsApp Image 2024-11-17 at 09.44.55_8cec3488.jpg';
import i13 from '../images/WhatsApp Image 2024-11-17 at 09.44.55_3c5c8a66.jpg';
import i14 from '../images/WhatsApp Image 2024-11-17 at 09.44.54_9bd3422f.jpg';

//SPAPS
import s1 from '../images/IMG-20240220-WA0016.jpg';
import s2 from '../images/IMG_20241031_235244_517.jpg';
import s3 from '../images/IMG_20241031_235246_161.jpg';
import s4 from '../images/Snapchat-1207414193.jpg';
import s5 from '../images/Snapchat-1347510999.jpg';
import s6 from '../images/Snapchat-1584897044.jpg';
import s7 from '../images/Snapchat-1785586432.jpg';
import s8 from '../images/Snapchat-1846791632.jpg';
import s9 from '../images/Snapchat-759470058.jpg';
import s10 from '../images/Snapchat-713424546.jpg';

const photos = [
  { id: 1, src: i1, alt: 'Photo 1', caption: 'A beautiful girl in traditional saree 💕' },
  { id: 2, src: i2, alt: 'Photo 2', caption: 'Wedding special 💘' },
  { id: 3, src: i3, alt: 'Photo 3', caption: 'Simple girl with dark humor 😅' },
  { id: 4, src: i4, alt: 'Photo 4', caption: 'Gulab ke haath mein gulab 🌹' },
  { id: 5, src: i5, alt: 'Photo 5', caption: 'Husn Pari ✨' },
  { id: 6, src: i6, alt: 'Photo 6', caption: 'Black and white beauty 🖤🤍' },
  { id: 7, src: i7, alt: 'Photo 7', caption: 'Lost in nature 🍃' },
  { id: 8, src: s4, alt: 'Photo 12', caption: 'My favorite ❤️😍 (Yrr ye kitni cute hai!)' },
  { id: 9, src: s6, alt: 'Photo 14', caption: 'Wife material ✨' },
  { id: 10, src: s7, alt: 'Photo 15', caption: 'Beautiful chaos 🌸' },
  { id: 12, src: i8, alt: 'Photo 16', caption: 'Making memories together 📷' },
  { id: 13, src: i9, alt: 'Photo 17', caption: 'Cherished moments 💖' },
  { id: 14, src: i10, alt: 'Photo 18', caption: 'A day to remember 🌟' },
  { id: 15, src: i11, alt: 'Photo 19', caption: 'Timeless vibes 🕰️' },
  { id: 16, src: i12, alt: 'Photo 20', caption: 'Golden hour glow 🌞' },
  { id: 17, src: i13, alt: 'Photo 21', caption: 'Candid smiles 😄' },
  { id: 18, src: i14, alt: 'Photo 22', caption: ' cute moment with me 🙈' }
];

const PhotoGallery = () => {
  return (
    <div id="gallery" className="bg-gray-900 py-16 text-white overflow-y-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-pink-500">Photo Gallery</h2>

      {/* Photo Gallery Section */}
      <div className="max-w-[800px] mx-auto space-y-8 flex flex-col items-center justify-center mb-20">
        {photos.map((photo, index) => (
          <ScrollAnimation
            key={photo.id}
            animateIn={index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight'}
            // animateOnce={true}
            duration={1.2}
            className="w-full flex justify-center"
          >
            <div
              className={`overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } flex items-center space-x-4`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full max-w-[300px] max-h-[300px] object-cover rounded-md"
              />
              <div className="text-center mt-2 text-lg font-medium text-pink-300">
                {photo.caption}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    
      {/* Slider Section */}
      <div className="banner">
        <div className="slider" style={{ '--quantity': 10 }}>
        <div className="item" style={{ '--position': 1 }}>
            <img src={i1} alt="Photo 1" />
          </div>
          <div className="item" style={{ '--position': 2 }}>
            <img src={i2} alt="Photo 2" />
          </div>
          <div className="item" style={{ '--position': 3 }}>
            <img src={i3} alt="Photo 3" />
          </div>
           <div className="item" style={{ '--position': 4 }}>
            <img src={s1} alt="Photo 3" />
          </div>
          <div className="item" style={{ '--position': 5 }}>
            <img src={s2} alt="Photo 3" />
          </div>
          <div className="item" style={{ '--position': 6 }}>
            <img src={s3} alt="Photo 3" />
          </div>
          <div className="item" style={{ '--position': 7 }}>
            <img src={s4} alt="Photo 3" />
          </div>
          <div className="item" style={{ '--position': 8 }}>
            <img src={s5} alt="Photo 3" />
          </div>
          <div className="item" style={{ '--position': 9 }}>
            <img src={s6} alt="Photo 3" />
          </div>
          <div className="item" style={{ '--position': 10 }}>
            <img src={s7} alt="Photo 3" />
          </div>
          <div className="item" style={{ '--position': 11 }}>
            <img src={s8} alt="Photo 3" />
          </div>
          {/* Add other items as needed */}
        </div>
        <div className="content">
          <h1 data-content="Vanshu❤️">Vanshu❤️</h1>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
