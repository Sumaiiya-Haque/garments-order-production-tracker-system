import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const data = [
    { id: 1, name: "John Doe", text: "Amazing tracking system! Made our workflow 2x faster." },
    { id: 2, name: "Sarah Khan", text: "Very professional UI and excellent features." },
    { id: 3, name: "Rahim Uddin", text: "Helped us manage production seamlessly!" },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? data.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === data.length - 1 ? 0 : i + 1));

  return (
    <section className="my-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Customer Feedback</h2>

      <div className="max-w-xl mx-auto bg-base-200 p-8 rounded-xl shadow">
        <FaQuoteLeft className="text-4xl text-primary mx-auto mb-4" />
        <p className="text-lg mb-4">{data[index].text}</p>
        <h3 className="font-bold">— {data[index].name}</h3>

        <div className="flex justify-center gap-4 mt-6">
          <button className="btn btn-sm" onClick={prev}><FaChevronLeft /></button>
          <button className="btn btn-sm" onClick={next}><FaChevronRight /></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
