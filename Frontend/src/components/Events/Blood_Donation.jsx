import B from '../../Images/events-images/B.png'
import B1 from '../../Images/events-images/B1.png'
import B2 from '../../Images/events-images/B2.png'
import B3 from '../../Images/events-images/B3.png'
import B4 from '../../Images/events-images/B4.png'
import B5 from '../../Images/events-images/B5.png'
export default function BloodDonation() {
  const images = [B, B1, B2, B3, B4, B5];
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gradient from-red-300 to-red-500 text-center mt-8 mb-8">
        Blood Donation Drive
      </h1>

      <p className="mt-6 text-lg md:text-xl leading-relaxed text-justify">
        The 12th Annual Blood Donation Drive at IIT Indore was successfully
        organized on February 4th as part of the Institute’s 16th Foundation Day
        celebration. The event was led by the Health Centre and Avana Club, in
        collaboration with Model Blood Bank, M.Y. Hospital, and M.G.M. Medical
        College, Indore. Avana Club played a pivotal role in the event’s
        execution, working tirelessly for two weeks to ensure seamless
        coordination. Ensuring the safety of each and every donor was the top
        priority of AVANA. The Nalanda Auditorium Facade area was meticulously
        decorated with rangoli, floral arrangements, and posters, creating an
        inviting atmosphere for donors. To boost awareness, Avana collaborated
        with Aaina (dramatics club) for a Nukkad Natak and Kalakriti (art club)
        for designing Canvas posters displayed at venue. The Nukkad Natak also
        helped in dispelling misconceptions and promoting awareness about the
        importance of voluntary blood donation. The event was inaugurated by
        Prof. Suhas Joshi, Director of IIT Indore, who also became the first
        donor of the day. With enthusiastic participation from students,
        faculty, and staff, a total of 261 individuals donated blood, making the
        initiative a resounding success.
      </p>

      <p className="text-center text-2xl md:text-3xl text-black font-semibold mt-8">
        <span className="text-red-500">Your donation can give a precious smile to someone's face.</span>
        <br />
        <span className="text-red-500">Your donation can give a second chance to someone's life.</span>
        <br />
        <span className="text-red-500">Your donation can be hope for someone's existence.</span>
        <br />
        Be a blood donor, be a hero.
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
