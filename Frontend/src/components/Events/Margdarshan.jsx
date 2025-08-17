import image1 from "../../Images/events-images/Margdarshan1.png";

export default function Margdarshan() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mt-8 mb-8">
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

      <p className="text-center text-2xl md:text-3xl text-orange-500 font-semibold mt-8">
        Education is more than knowledge—it’s opportunity, encouragement, and
        the power to dream big. Margdarshan embodies AVANA’s commitment to
        transforming lives through learning.
      </p>

      <div className="mt-10 flex justify-center">
        <img
          src={image1}
          alt="Margdarshan"
          className="rounded-xl shadow-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
}
