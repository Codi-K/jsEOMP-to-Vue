<template>
  <div>
    <!-- page heading  -->
    <div class="heading">
      <h2 class="head text-white text-center">Desktops</h2>
    </div>

    <div class="contactbtn">
      <!-- Modal for contact us  -->
      <div class="modal-add d-flex justify-content-between p-4">
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-outline-light"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
        >
          Contact Us
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel2">
                  Email us below:
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-center">
                <!-- form spree link-->
                <form action="https://formspree.io/f/xeqwyaew" method="POST">
                  <label>
                    <h5>Enter Your Name:</h5>
                    <input
                      type="name"
                      name="name"
                      class="inputC"
                      placeholder="Name..."
                      required
                    />
                  </label>
                  <label>
                    <h5>Enter Your Email:</h5>
                    <input
                      type="email"
                      name="email"
                      class="inputC"
                      placeholder="Email..."
                      required
                    />
                  </label>
                  <label>
                    <h5>Enter Your Message:</h5>
                    <input
                      type="text"
                      name="message"
                      class="inputC"
                      placeholder="Message..."
                      required
                    />
                  </label>

                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" class="btn btn-secondary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- Sort/filtering button -->
        <div class="dropdown">
          <button
            class="btn btn-outline-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort
          </button>
          <ul class="dropdown-menu dropdown-menu-dark text-center">
            <button class="dropdown-item" id="price" onclick="priceLow()">
              Price: Lowest
            </button>
            <button class="dropdown-item" id="name" onclick="priceHigh()">
              Price: Highest
            </button>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
        <div class="row">
      <div class="col p-3 text-center" v-for="item in desktop" :key="item.id">
        <div
          class="card text-bg-dark border-light container-fluid"
          style="width: 25rem"
        >
          <h4>{{ item.name }}</h4>
          <img
           :src="item.imageUrl"
            class="card-img-top"
            loading="lazy"
            :alt="item.name"
          />
          <div class="card-body">
            <h5 class="card-text">{{ item.details }}</h5>
            <h5 class="card-text p-2 text-success">R {{ item.price }}</h5>

              <button type="button" class="btn btn-outline-light m-2 ">
                Add to Cart
              </button>
              <button type="button" class="btn btn-outline-light">
                View More
              </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    desktop() {
      return this.$store.state.desktop
    },
  },
      mounted() {
      this.$store.dispatch("fetchDesktop")
    },
};
</script>

<style scoped></style>
