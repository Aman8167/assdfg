import React from 'react'
import './Payment.css';
function Payment() {
  return (

    <div className="container-fluid ">
   
  <div class="form-body" >
<div className="card-1">
<div className="row justify-content-center">
<div className="col-md-10">
<div className="card-body mt-5">
<form>
<div className="form-group">
<label> Pickup Location:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Vendor Id
 "
/>
</div>
<div className="form-group">
<label> Date & Time</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Date and Time
 " 
/>
</div>
<div className="form-group">
<label> Drop Off Location:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Drop off Location
 " 
/>
</div>
<div className="form-group">
<label> Date &:</label>
<input 
  type="Date"
className="form-control  "
placeholder="Enter  your Date 
 " 
/>
</div>
<div className="form-group">
<label>  Time:</label>
<input 
  type="time"
className="form-control  "
placeholder="Enter  your Time
 " 
/>
</div>
<div className="form-group">
<label> Tripe Type:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Tripe Type
 " 
/>
</div>
<div className="form-group">
<label> Vehicle Type :</label>
<select  class="form-control  "id="SelectOption">
                <option value="1">Send To</option>
                <option value="1">Send To</option>
                <option value="1">Send To</option>
            </select>

</div>
<div className="form-group">
<label> Customer Name:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Customer Name
 " 
/>
</div>
<div className="form-group">
<label> Customer Mail:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Customer Mail
 " 
/>
</div>
<div className="form-group">
<label> Contact Number:</label>
<input 
  type="Number"
className="form-control  "
placeholder="Enter  your Contact Number
 " 
/>
</div>
<div className="form-group">
<label> Closing Kms:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Closing Kms
 " 
/>
</div>
<div className="form-group">
<label> Closing Time:</label>
<input 
  type="Time"
className="form-control  "
placeholder="Enter  your Closing Time
 " 
/>
</div>
<div className="form-group">
<label> Starting Kms:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Starting Kms
 " 
/>
</div>
<div className="form-group">
<label> Total Kms:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Total Kms
 " 
/>
</div>
<div className="form-group">
<label> Total Hours:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Total Hours
 " 
/>
</div>
<div className="form-group">
<label> 8 Hrs.  80Kms.@:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your 8 Hrs.  80Kms.@
 " 
/>
</div>
<div className="form-group">
<label> Amount:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Amount
 " 
/>
</div>
<div className="form-group">
<label> Extra Kms:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Extra Kms
 " 
/>
</div>
<div className="form-group">
<label> Amount:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Amount
 " 
/>
</div>
<div className="form-group">
<label> Extra Hours:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Extra Hours
 " 
/>
</div>
<div className="form-group">
<label>Amount:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Amount
 " 
/>
</div>
<div className="form-group">
<label>1 Day 300 kms:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your 1 Day 300 Kms
 " 
/>
</div>
<div className="form-group">
<label>Amount:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Amount
 " 
/>
</div>
<div className="form-group">
<label>CGST 2.5%:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your CGST 2.5%
 " 
/>
</div>
<div className="form-group">
<label>SGST 2.5%:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your SGST 2.5%
 " 
/>
</div>
<div className="form-group">
<label>Total Amount:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Total Amount
 " 
/>
</div>
<div className="form-group">
<label>Advance Payment:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Advance Payment
 " 
/>
</div>
<div className="form-group">
<label>Remaining Payment:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Remaining Payment
 " 
/>
</div>
<div className="form-group">
<label> Payment Method:</label>
<input 
  type="text"
className="form-control  "
placeholder="Enter  your Payment Method
 " 
/>
</div>
<br></br>
<button id="btn1" className="btn btn-danger " >
Edit
</button>
<button id="btn2" className="btn btn-danger " >
Save
</button>
<button id="btn3" className="btn btn-danger " >
Print
</button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
  )
}

export default Payment