import React from "react";
import './style.css';
import './demo.css';
export default function Profile() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" /> 
          <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
          <title>Student Profile Page Design Example</title>
          <meta name="author" content="Codeconvey" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet" /><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" />
          {/*Only for demo purpose - no need to add.*/}
          <link rel="stylesheet" href="css/demo.css" />
          <link rel="stylesheet" href="css/style.css" />
          <div className="ScriptTop">
            <div className="rt-container">
              <div className="col-rt-4" id="float-right">
                {/* Ad Here */}
              </div>
              <div className="col-rt-2">
                <ul>
                  <li><a href="C:\Users\gaurav hadge\Music\Gaurav\myapp\src\components\Convert.js" title="Back to tutorial page"> Edit Profile</a></li>
                </ul>
              </div>
            </div>
          </div>
          <header className="ScriptHeader">
            <div className="rt-container">
              <div className="col-rt-12">
                <div className="rt-heading">
                  <h1>Teacher Profile </h1>
                  {/* <p>A responsive Teacher profile </p> */}
                </div>
              </div>
            </div>
          </header>
          <section>
            <div className="rt-container">
              <div className="col-rt-12">
                <div className="Scriptcontent">
                  {/* Student Profile */}
                  <div className="student-profile py-4">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="card shadow-sm">
                            <div className="card-header bg-transparent text-center">
                            <img class="profile_img" src="https://source.unsplash.com/600x300/?student" alt="student dp"></img>
                              <h3>Prachi Godbole</h3>
                            </div>
                            <div className="card-body">
                              <p className="mb-0"><strong className="pr-1">Teacher ID:</strong>321000001</p>
                              <p className="mb-0"><strong className="pr-1">Institute:</strong>IET</p>
                              <p className="mb-0"><strong className="pr-1">Section:</strong>A</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="card shadow-sm">
                            <div className="card-header bg-transparent border-0">
                              <h3 className="mb-0"><i className="far fa-clone pr-1" />General Information</h3>
                            </div>
                            <div className="card-body pt-0">
                              <table className="table table-bordered">
                                <tbody><tr>
                                    <th width="30%">User Name</th>
                                    <td width="2%">:</td>
                                    <td>prachigodbole007</td>
                                  </tr>
                                  <tr>
                                    <th width="30%">first Name	</th>
                                    <td width="2%">:</td>
                                    <td>Prachi</td>
                                  </tr>
                                  <tr>
                                    <th width="30%">Last Name</th>
                                    <td width="2%">:</td>
                                    <td>Godbole</td>
                                  </tr>

                                  <tr>
                                    <th width="30%">Institute Name</th>
                                    <td width="2%">:</td>
                                    <td>Iet</td>
                                  </tr>

                                  <tr>
                                    <th width="30%">Address</th>
                                    <td width="2%">:</td>
                                    <td>A/p-dole society ,swargate </td>
                                  </tr>
                                  <tr>
                                    <th width="30%">Email--Address</th>
                                    <td width="2%">:</td>
                                    <td>prachigodbole@gmail.com</td>
                                  </tr>
                                  
                                  <tr>
                                    <th width="30%">Contact No.</th>
                                    <td width="2%">:</td>
                                    <td>9975268329</td>
                                  </tr>

                                  <tr>
                                    <th width="30%">Birth Date</th>
                                    <td width="2%">:</td>
                                    <td>5/08/1975</td>
                                  </tr>
                                </tbody></table>
                            </div>
                          </div>
                          <div style={{height: '26px'}} />
                          <div className="card shadow-sm">
                            <div className="card-header bg-transparent border-0">
                              <h3 className="mb-0"><i className="far fa-clone pr-1" />Other Information</h3>
                            </div>
                            <div className="card-body pt-0">
                              <p><h4>teaching is passion</h4></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* partial */}
                </div>
              </div>
            </div>
          </section>
          {/* Analytics */}
        </div>
      );
    }
  