<template>
  <section class="py-12 bg-green-900 h-screen">
    <div class="container px-4 mx-auto">
      <div class="flex max-w-md mx-auto flex-col text-center">
        <img
          class="h-12 block my-10"
          src="@/assets/icon.svg"
          alt="Icon for Branching Software"
        />
        <div class="mt-12 mb-8 p-8 bg-white rounded">
          <span class="text-sm text-gray-600">Sign In</span>
          <h4 class="mb-6 text-3xl">Path To Zero</h4>
          <Warning
            v-for="item in warningList"
            :text="item"
            :key="item"
            @removeWarning="removeWarning($event)"
          />
          <form>
            <div class="flex my-4 px-4 rounded">
              <input
                class="w-full py-4 text-sm placeholder-gray-400 font-semibold leading-none outline-none"
                type="email"
                ref="email"
                v-model="email"
                placeholder="Email"
              />
              <font-awesome-icon
                icon="at"
                class="h-6 w-6 my-auto text-gray-400"
              />
            </div>
            <div class="flex mb-6 px-4 rounded">
              <input
                class="w-full py-4 text-sm placeholder-gray-400 font-semibold leading-none outline-none"
                type="password"
                v-model="password"
                placeholder="Password"
              />
              <font-awesome-icon
                icon="key"
                class="h-6 w-6 my-auto text-gray-400"
              />
            </div>
            <button
              class="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-green-main hover:bg-green-highlight rounded"
              @click.prevent="signIn"
            >
              Sign In
            </button>
          </form>
          <div class="block mt-3">
            <a
              class="m-3 text-xs text-green-main text-center"
              href="/forgot-password"
            >
              Forgot Password
            </a>
            <a class="m-3 text-xs text-green-main text-center" href="/signup">
              No Account? Sign Up
            </a>
          </div>
        </div>
        <div>
          <p class="text-xs text-white text-center">
            <a
              class="underline hover:text-green-highlight"
              href="/privacy-policy"
              >Privacy Policy</a
            >
            and
            <a class="underline hover:text-green-highlight" href="/terms-of-use"
              >Terms of Use</a
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import router from "@/router";
import { defineComponent } from "vue";
import Warning from "@/components/alerts/Warning";

export default defineComponent({
  components: {
    Warning,
  },
  data() {
    return {
      email: "",
      password: "",
      warningList: [],
      loading: false,
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.$refs.email.focus();
    });
  },
  methods: {
    signIn() {
      this.warningList = [];
      if (this.email === "") {
        this.addWarning("Email is required");
      }
      if (this.password === "") {
        this.addWarning("Password is required");
      }
      if (this.warningList.length === 0) {
        this.sendRequest();
      }
    },
    signPass(response) {
      localStorage.setItem("userId", response.id);
      if (this.$route.query.go) {
        router.push({ name: this.$route.query.go });
      } else {
        router.push({
          name: "Overview",
        });
      }
    },
    sendRequest() {
      this.loading = true;
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      };
      fetch(
        "https://dt6hs018wd.execute-api.eu-west-2.amazonaws.com/dev/v1/signin",
        requestOptions
      )
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (await !response.ok) {
            this.addWarning(data.message);
            this.loading = false;
            return;
          }

          this.loading = false;
          this.signPass(data);
        })
        .catch(() => {
          this.addWarning("An error occurred, please retry.");
          this.loading = false;
        });
    },
    addWarning(text) {
      if (!this.warningList.includes(text)) {
        this.warningList.push(text);
      }
    },
    removeWarning(text) {
      this.warningList.splice(this.warningList.indexOf(text), 1);
    },
  },
});
</script>
