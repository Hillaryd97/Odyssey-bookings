import React from "react";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";

const AllHotels = () => {
  return (
    <div className="">
      {/* <h2>Overview</h2> */}
    
      <div className="col-12 mt-4">
        <h2>All Registered Hotels</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Hotel Name</th>
              <th scope="col">Location</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Rooms Count</th>
              <th scope="col">Facilities</th>
              <th scope="col">Registration Status</th>{" "}
              {/* New column for actions */}
            </tr>
          </thead>
          <tbody>
            {/* Sample data, replace with actual data from your application */}
            <tr>
              <td>{1}</td>
              <td>Hotel One</td>
              <td>City, Country</td>
              <td>+123456789</td>
              <td>hotelone@example.com</td>
              <td>2</td>
              <td>Pool, Gym</td>
              <td className="justify-center items-center text-center">
                <p>Approved</p>
                <div>
                  <button className="btn btn-success justify-center items-center mr-2">
                    <BsCheckCircle />
                  </button>
                  <button className="btn btn-danger justify-center items-center">
                    <BsXCircle />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>{1}</td>
              <td>Hotel One</td>
              <td>City, Country</td>
              <td>+123456789</td>
              <td>hotelone@example.com</td>
              <td>2</td>
              <td>Pool, Gym</td>
              <td className="justify-center items-center text-center">
                <p>Approved</p>
                <div>
                  <button className="btn btn-success justify-center items-center mr-2">
                    <BsCheckCircle />
                  </button>
                  <button className="btn btn-danger justify-center items-center">
                    <BsXCircle />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>{1}</td>
              <td>Hotel One</td>
              <td>City, Country</td>
              <td>+123456789</td>
              <td>hotelone@example.com</td>
              <td>2</td>
              <td>Pool, Gym</td>
              <td className="justify-center items-center text-center">
                <p>Approved</p>
                <div>
                  <button className="btn btn-success justify-center items-center mr-2">
                    <BsCheckCircle />
                  </button>
                  <button className="btn btn-danger justify-center items-center">
                    <BsXCircle />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>{1}</td>
              <td>Hotel One</td>
              <td>City, Country</td>
              <td>+123456789</td>
              <td>hotelone@example.com</td>
              <td>2</td>
              <td>Pool, Gym</td>
              <td className="justify-center items-center text-center">
                <p>Approved</p>
                <div>
                  <button className="btn btn-success justify-center items-center mr-2">
                    <BsCheckCircle />
                  </button>
                  <button className="btn btn-danger justify-center items-center">
                    <BsXCircle />
                  </button>
                </div>
              </td>
            </tr>

            {/* Add more rows with hotel details */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllHotels;
