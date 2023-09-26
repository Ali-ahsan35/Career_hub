import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-[148px] h-[40px] "
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
            <button className="px-5 py-2 font-bold border rounded border-purple-200 mr-4 text-pink-300">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-bold border rounded border-purple-200 text-pink-300">{job_type}</button>
        </div>
        <div className="my-4 flex">
            <h2 className="flex items-center mr-2"><CiLocationOn className="text-2xl mr-2"></CiLocationOn> {location} </h2>
            <h2 className="flex items-center mr-2"><AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar> {salary} </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
          <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
