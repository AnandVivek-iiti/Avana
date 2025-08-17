import B from '../Images/events-images/B.png'
import B1 from '../Images/events-images/B1.png'
import B2 from '../Images/events-images/B2.png'
import B3 from '../Images/events-images/B3.png'
import B4 from '../Images/events-images/B4.png'
import B5 from '../Images/events-images/B5.png'
import image1 from "../Images/events-images/Margdarshan1.png";
import image2 from "../Images/events-images/Margdarshan2.png";
import image3 from "../Images/events-images/Margdarshan3.png";
import image4 from "../Images/events-images/Margdarshan4.png";
import image5 from "../Images/events-images/Margdarshan5.png";
import image6 from "../Images/events-images/Margdarshan6.png";
const gallery = [
  {
    src: B,
    alt: "Blood Donation Camp",
    caption: "Blood Donation Camp",
  },
  {
    src: B1,
    alt: "Blood Donation Camp",
    caption: "Blood Donation Camp",
  },
  {
    src: B3,
    alt: "Blood Donation Camp",
    caption: "Blood Donation Camp",
  },
  {
    src: B4,
    alt: "Blood Donation Camp",
    caption: "Blood Donation Camp",
  },
  {
    src: B5,
    alt: "Blood Donation Camp",
    caption: "Blood Donation Camp",
  },

  {
    src: image1,
    alt: "Margdarshan",
    caption: "Margdarshan",
  },
  {
    src: image2,
    alt: "Margdarshan",
    caption: "Margdarshan",
  },
  {
    src: image3,
    alt: "Margdarshan",
    caption: "Margdarshan",
  },
  {
    src: B2,
    alt: "Blood Donation Camp",
    caption: "Blood Donation Camp",
  },

  {
    src: image4,
    alt: "Margdarshan",
    caption: "Margdarshan",
  },
  {
    src: image5,
    alt: "Margdarshan",
    caption: "Margdarshan",
  },
  {
    src: image6,
    alt: "Margdarshan",
    caption: "Margdarshan",
  },
];

export default function GallerySection() {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-4xl font-semibold text-center text-gray-700 mb-4">Our Gallery</h2>
      <p className="text-center text-gray-500 text-lg mb-2">
        Every beautiful memory shall be lost to time unless captured in the right moment.
      </p>
      <p className="text-center text-gray-500 text-lg mb-8">
        Here are a few of those moments which we shall always cherish in our hearts
      </p>
      <div className="flex justify-center mb-8">
        <div className="w-24 h-1 bg-teal-600 rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {gallery.map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
            <span className="mt-4 text-gray-500 text-base">{img.caption}</span>
          </div>
        ))}
      </div>
    </section>
  );
}