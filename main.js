// Vanessa Gutierrez 02/05/2021

const app = {
  data() {
    return {
      title: "Inventory Application",
      newProduct: "",
      products: [
        {
          id: 0,
          name: "Backpack",
          qty: 10,
        },
        {
          id: 1,
          name: "Notebook",
          qty: 15,
        },
      ],
    };
  },
  computed: {
    total() {
      let sum = 0;
      this.products.forEach((product) => {
        sum += product.qty;
      });
      return sum;
    },
  },
  methods: {
    addProduct() {
      if (this.newProduct.length > 0) {
        this.products.push({
          id: new Date().toISOString,
          name: this.newProduct,
          qty: 0,
        });
        this.newProduct = "";
      }
    },
  },
};

Vue.createApp(app).mount("#app");
