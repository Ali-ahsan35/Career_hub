import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job); 
    return (
        <div>
            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details:</h2>
                    <h2 className="text-2xl font-semibold">Job Details Of: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Side Thimgs</h2>
                    <button className="btn btn-success">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
