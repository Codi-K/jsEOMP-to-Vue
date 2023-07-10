<template>
  <div>
    <!-- page heading  -->
    <div class="heading">
      <h2 class="head text-white text-center">Admin Page</h2>
    </div>
    <!-- Modal -->
    <div class="modal-add d-flex justify-content-between p-4">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-outline-light"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Product
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" >
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add new Product
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <!-- Add products  -->
            <div class="modal-body">
              <h5>Name</h5>
              <input
                type="text"
                class="modal-input inputN"
                placeholder="Enter product name..."
                v-model="product.name"
              />
              <h5>ImageURL</h5>
              <input
                class="modal-input inputI"
                placeholder="Enter image URL..."
                v-model="product.imageUrl"
              />
              <h5>Details</h5>
              <input
                type="text"
                class="modal-input inputD"
                placeholder="Enter details of product..."
                v-model="product.details"
              />
              <h5>Price</h5>
              <input
                type="text"
                class="modal-input inputP"
                placeholder="Enter price..."
                v-model="product.price"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-secondary newproduct" @submit.prevent="addProduct">
                Add New Product
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- sort button -->
      <button type="button" class="btn btn-outline-light">Sort</button>
    </div>
    <!-- table -->
    <div class="container-fluid table-responsive mb-4">
      <table class="text-center text-white">
        <thead class="header tr">
          <th>Name</th>
          <th id="image">Image</th>
          <th id="td4">Details</th>
          <th id="price">Price</th>
          <th id="edit">Edit</th>
          <th id="td7">Delete</th>
        </thead>
        <!-- Display products on table from Js -->
        <tbody id="products" v-for="item in desktop" :key="item.div">
          <tr class="tr">
            <td id="td2">{{ item.name }}</td>
            <td id="td3">
              <img
                class="image-fluid image"
                id="image"
                v-bind:src="item.imageUrl"
                loading="lazy"
                v-bind:alt="item.name"
              />
            </td>
            <td id="td4">{{ item.details }}</td>
            <td id="td5" class="text-success">R{{ item.price }}</td>
            <td id="td6">
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-outline-light"
                data-bs-toggle="modal"
                data-bs-target="#editModal"
              >
                Edit
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="editModal"
                tabindex="1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1
                        class="modal-title text-black fs-5"
                        id="exampleModalLabel1"
                      >
                        Edit Product
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <h5 class="text-black">Name</h5>
                      <input
                        type="text"
                        class="modal-input"
                        id="inputeN"
                        placeholder="Enter name..."
                      />
                      <h5 class="text-black">ImageURL</h5>
                      <input
                        type="text"
                        class="modal-input"
                        id="inputeI"
                        placeholder="Enter Image URL..."
                      />
                      <h5 class="text-black">Details</h5>
                      <input
                        type="text"
                        class="modal-input"
                        id="inputeD"
                        placeholder="Enter details..."
                      />
                      <h5 class="text-black">Price</h5>
                      <input
                        type="text"
                        class="modal-input"
                        id="inputeP"
                        placeholder="Enter price..."
                      />
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
            <td id="td7">
              <button type="button" class="btn btn-outline-light dbtn">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    desktop() {
      return this.$store.state.desktop;
    },
  },
  mounted() {
    this.$store.dispatch("fetchDesktop");
  },
  name: "addProduct",
  data() {
    return {
      product: {
        name: "",
        imageUrl: "",
        details: "",
        price: "",
      },
    };
  },
  methods: {
    addProduct() {
      fetch("https://codi-k.github.io/JSeompVUE-json-server/data.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          imageUrl: this.imageUrl,
          details: this.details,
          price: this.price
        }),
      })
        .then(response => response.json())
        .then(data => console.log(data))
    }
  }
};
</script>

<style scoped></style>
