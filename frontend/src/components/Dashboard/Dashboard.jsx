import React from "react";
import { LiaHotelSolid } from "react-icons/lia";
import { FaUsers, FaSuitcaseRolling } from "react-icons/fa6";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="">
      {/* <h2>Overview</h2> */}
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card bg-primary text-white">
            <div className="card-body flex-row items-center justify-between">
              <div className=""> 
                <p className="card-number ">5077</p>
                <h5 className="card-title">Registered Hotels</h5>
              </div>
              <LiaHotelSolid size={45} />
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card bg-success text-white">
            <div className="card-body flex-row items-center justify-between">
              <div>
                <p className="card-number">890</p>
                <h5 className="card-title">Total Customers</h5>
              </div>
              <FaUsers size={45} />
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card bg-danger text-white">
            <div className="card-body flex-row items-center justify-between">
              <div>
                <p className="card-number">4908</p>
                <h5 className="card-title">Total Bookings</h5>
              </div>
              <FaSuitcaseRolling size={45} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-4">
        <h2>Registered Hotels</h2>
        <div style={{ overflowY: "scroll", height:"55vh" }}>
          <table className="table table-bordered">
            <thead className="tableHead">
              <tr >
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
              </tr>  <tr>
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
              </tr>  <tr>
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
              </tr>  <tr>
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
              </tr>  <tr>
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
              </tr>  <tr>
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
              </tr>  <tr>
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
              </tr>  <tr>
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
    </div>
  );
};

export default Dashboard;
