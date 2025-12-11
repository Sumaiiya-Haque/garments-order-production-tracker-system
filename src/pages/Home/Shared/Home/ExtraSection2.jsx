const ExtraSection2 = () => {
  return (
    <section className="my-20 px-6 grid md:grid-cols-2 gap-10 items-center">
      <img
        src="https://i.ibb.co/f0v2hy5/garments-factory.jpg"
        className="rounded-xl shadow-lg"
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">Real‑Time Production Insights</h2>
        <p className="text-gray-700 mb-4">
          Monitor cutting, sewing, finishing & QC in real‑time using a modern dashboard.
        </p>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Live progress updates</li>
          <li>Worker activity insights</li>
          <li>Delay alerts & performance tracking</li>
        </ul>
      </div>
    </section>
  );
};

export default ExtraSection2;
