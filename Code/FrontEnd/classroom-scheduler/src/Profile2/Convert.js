import React from 'react'

export default function Convert() 
{
      return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Bootstrap demo</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" /> 
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossOrigin="anonymous" />
          <div className="container-xl px-4 mt-4">
            {/* Account page navigation*/}
            <nav className="nav nav-borders">
              <a className="nav-link active ms-0" href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details" target="__blank">Home</a>
              <a className="nav-link active ms-0" href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details" target="__blank">Logout</a>
            </nav>
            <hr className="mt-0 mb-4" />
            <div className="row">
              <div className="col-xl-4">
                {/* Profile picture card*/}
                <div className="card mb-4 mb-xl-0">
                  <div className="card-header">Profile Picture</div>
                  <div className="card-body text-center">
                    {/* Profile picture image*/}
                    <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                    {/* Profile picture help block*/}
                    <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    {/* Profile picture upload button*/}
                    <button className="btn btn-primary" type="button">Upload new image</button>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                {/* Account details card*/}
                <div className="card mb-4">
                  <div className="card-header">Account Details</div>
                  <div className="card-body">
                    <form>
                      {/* Form Group (username)*/}
                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="inputUsername">Username (how your name will appear to other users on the site)</label>
                        <input className="form-control" id="inputUsername" type="text" placeholder="Enter your username" defaultValue="username" />
                      </div>
                      {/* Form Row*/}
                      <div className="row gx-3 mb-3">
                        {/* Form Group (first name)*/}
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                          <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" defaultValue="Milind" />
                        </div>
                        {/* Form Group (last name)*/}
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                          <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" defaultValue="Kondekar" />
                        </div>
                      </div>
                      {/* Form Row        */}
                      <div className="row gx-3 mb-3">
                        {/* Form Group (organization name)*/}
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputOrgName">Organization name</label>
                          <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" defaultValue="Start Bootstrap" />
                        </div>
                        {/* Form Group (location)*/}
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputLocation">Address</label>
                          <input className="form-control" id="inputLocation" type="text" placeholder="Enter your Address" defaultValue="Kolhapur" />
                        </div>
                      </div>
                      {/* Form Group (email address)*/}
                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                        <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" defaultValue="name@example.com" />
                      </div>
                      {/* Form Row*/}
                      <div className="row gx-3 mb-3">
                        {/* Form Group (phone number)*/}
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                          <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" defaultValue="555-123-4567" />
                        </div>
                        {/* Form Group (birthday)*/}
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                          <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" defaultValue="06/10/1988" />
                        </div>
                        <div className="p-3 py-5">
                          <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus" />&nbsp;Experience</span></div><br />
                          <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" defaultValue /></div> <br />
                          <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" defaultValue /></div>
                        </div>
                      </div>
                      {/* Save changes button*/}
                      <button className="btn btn-primary" type="button">Save changes</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
