import React from 'react';
import doct1 from '../../images/dr1.jpg'
import doct2 from '../../images/dr2.jpg'
import doct3 from '../../images/dr3.jpg'
import doct4 from '../../images/dr4.jpg'




const Doctors = () => {
    return (
        <div id="doctor">
            <h1 className="text-center text-info fs-1 pt-5">Our Doctors</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 w-75 px-5 mx-5 my-5">
  <div class="col">
    <div class="card">
      <img src={doct1}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Pediatrician</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={doct2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Dental</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={doct3}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Prenatal</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={doct4} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Psychologist</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Doctors;