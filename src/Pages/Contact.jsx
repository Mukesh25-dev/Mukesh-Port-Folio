import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white text-green-900 text-center flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <div className="flex items-center gap-3 bg-green-100 px-6 py-3 rounded-lg shadow-md">
        <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-green-700" />
        <p className="text-lg font-medium">dvrmukesh2002@gmail.com</p>
      </div>
      <hr className="border-t-2 border-green-500 w-3/4 mt-6" />
    </section>
  );
};

export default Contact;
