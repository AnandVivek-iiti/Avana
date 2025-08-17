import image1 from "../../Images/events-images/Margdarshan1.png";
import image2 from "../../Images/events-images/Margdarshan2.png";
import image3 from "../../Images/events-images/Margdarshan3.png";
import image4 from "../../Images/events-images/Margdarshan4.png";
import image5 from "../../Images/events-images/Margdarshan5.png";
import image6 from "../../Images/events-images/Margdarshan6.png";

export default function Margdarshan() {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gradient from-yellow-300 to-orange-400 text-center mt-8 mb-8">
        Margdarshan
      </h1>

      <p className="mt-6 text-lg md:text-xl leading-relaxed text-justify">
        Education is one of the most powerful tools for change, and through the
        Margdarshan Programme, AVANA Club takes an active role in shaping young
        minds. Every Saturday, club members set aside time to visit government
        schools in Simrol, where they interact with students. These sessions are
        held at Government Higher Secondary School, Simrol and Kanyashala
        School, Simrol providing children with an enriching educational
        experience outside their regular curriculum.
      </p>

      <p className="mt-4 text-lg md:text-xl leading-relaxed text-justify">
        Our approach goes beyond textbooks—we focus on making learning engaging
        and interactive. By covering fundamental subjects like mathematics,
        science, and language, we help students build a strong academic
        foundation. To keep their curiosity alive, we introduce elements of
        creative thinking and problem-solving through puzzles, logical
        challenges, and quizzes. More than just lessons, these sessions inspire
        students to explore their talents and aim higher.
      </p>

      <p className="mt-4 text-lg md:text-xl leading-relaxed text-justify">
        Beyond weekly classes, Margdarshan hosts special events on occasions
        like the Diwali Celebration, where students participate and enjoy fun
        activities, fostering warmth, togetherness, and stronger bonds. The
        enthusiasm of the students, their eagerness to learn, and the bonds we
        build with them are what drive this initiative forward.
      </p>

      <p className="text-center text-2xl md:text-3xl text-black font-semibold mt-8">
        Education is more than knowledge—it’s opportunity, encouragement, and
        the power to dream big. Margdarshan embodies AVANA’s commitment to
        transforming lives through learning.
      </p>

      {/* Image Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img
              src={img}
              alt={`Margdarshan ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
