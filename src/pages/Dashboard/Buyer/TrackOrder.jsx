import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const TrackOrder = () => {
  const { orderId } = useParams();
  const axiosSecure = useAxiosSecure();
  const [tracking, setTracking] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/orders/tracking/${orderId}`).then(res => {
      setTracking(res.data);
    });
  }, [orderId, axiosSecure]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6">
            📦 Order Tracking
          </h2>

          <ul className="timeline timeline-vertical">
            {tracking.map((step, index) => (
              <li key={index}>
                <div className={`timeline-start badge ${
                  index === tracking.length - 1
                    ? "badge-primary"
                    : "badge-outline"
                }`}>
                  {step.date}
                </div>
                <div className="timeline-middle">⬤</div>
                <div className="timeline-end timeline-box">
                  <h3 className="font-bold">{step.status}</h3>
                  <p className="text-sm text-gray-500">
                    {step.location}
                  </p>
                  {step.note && (
                    <p className="text-sm mt-1">{step.note}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
