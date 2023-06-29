<template>
  <div>
      <!-- Landing page  -->
      <div class="lpage text-center text-white">
        <h2 class="welcomebox m-5 display-3">Welcome to Devotion Desktops </h2>
      </div>
      <!-- Featured products -->
      <div class="container-fluid text-center">
        <div class="row">
          <div class="col-sm-4 d-flex justify-content-center">
            <!-- Card 1 -->
            <div class="card text-bg-dark border-light mb-4" style="width: 18rem;">
              <h4>M.E.C.H</h4>
              <img src="https://i.postimg.cc/441SSQj4/starforge-final1.webp" class="card-img-top" loading="lazy" alt="Creator PC Ultimate">
              <div class="card-body">
                <h5 class="card-text">Intel Core i9-13900KS</h5>
                <h6 class="card-text text-success">R98390</h6>
              
              </div>
            </div>
          </div>
          <div class="col-sm-4 d-flex justify-content-center">
            <!-- Card 2 -->
            <div class="card text-bg-dark border-light mb-4" style="width: 18rem;">
              <h4>Creator PC Ultimate</h4>
              <img src="https://i.postimg.cc/5tFrKdWD/CS-450-172-400.webp" class="card-img-top" loading="lazy" alt="Creator PC Ultimate">
            <div class="card-body">
              <h5 class="card-text">Intel® Core™ Processor i9-13900K</h5>
              <h6 class="card-text text-success">R63227</h6>
              
              </div>
            </div>
          </div>
          <div class="col-sm-4 d-flex justify-content-center">
            <!-- Card 3 -->
            <div class="card text-bg-dark border-light mb-4" style="width: 18rem;">
              <h4>Syber M Pro 200</h4>
              <img src="https://i.postimg.cc/FsDw7VxC/CS-193-103.webp" class="card-img-top" loading="lazy" alt="Creator PC Ultimate">
              <div class="card-body">
                <h5 class="card-text">Intel® Core™ Processor i7-12700KF</h5>
                <h6 class="card-text text-success">R30046</h6>
              
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4 d-flex justify-content-center">
            <!-- Card 4 -->
            <div class="card text-bg-dark border-light mb-4" style="width: 18rem;">
                <h4>Hyper Liquid Alloy Elite</h4>
                <img src="https://i.postimg.cc/52yTvQ74/cs-193-113-400.webp" class="card-img-top" loading="lazy" alt="Creator PC Ultimate">            
              <div class="card-body">
                <h5 class="card-text">Intel® Core™ Processor i9-13900KF</h5>
                <h6 class="card-text text-success">R68286</h6>
              
              </div>
            </div>
          </div>
          <div class="col-sm-4 d-flex justify-content-center">
            <!-- Card 5 -->
            <div class="card text-bg-dark border-light mb-4" style="width: 18rem;">
              <h4>HYPER LIQUID PRO</h4>
              <img src="https://i.postimg.cc/c4sVxbf8/cs-450-166-400.webp" class="card-img-top" loading="lazy" alt="Creator PC Ultimate">
              <div class="card-body">
                <h5 class="card-text">Intel® Core™ Processor i7-13700KF</h5>
                <h6 class="card-text text-success">R51494</h6>
              
              </div>
            </div>
          </div>
          <div class="col-sm-4 d-flex justify-content-center">
            <!-- Card 6  -->
            <div class="card text-bg-dark border-light mb-4" style="width: 18rem;">
              <h4>AMD 9X Configurator</h4>
              <img src="https://i.postimg.cc/T3sSc2Fr/CS-192-303-400.webp" class="card-img-top" loading="lazy" alt="Creator PC Ultimate">
              <div class="card-body">
                <h5 class="card-text">AMD Ryzen™ 9 7900X3D Processor</h5>
                <h6 class="card-text text-success">R41411</h6>
              
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- button to products page -->
      <div class="Pbutton d-flex justify-content-center mb-4">
        <router-link to="/products" class="btn btn-outline-light">See all our Desktops</router-link>
      </div>

    </div>
</template>

<script>


export default {
  components: {

  }
}
</script>
