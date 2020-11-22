<template>
  <div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-info" data-toggle="modal" data-target="#staticBackdrop">+</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="onSubmit">
              <div class="form-group">
                <label for="exampleInputEmail1">Title</label>
                <input
                  v-model="title"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Body</label>
                <textarea
                  v-model="body"
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                ></textarea>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from "../service/service";
const _apiService = new apiService();

export default {
  name: "AddForm",
  data: () => ({
    title: "",
    body: "",
  }),
  methods: {
    onSubmit() {
      const post = {
        title: this.title,
        body: this.body,
      };
      console.log(post);
      _apiService
        .writePost(post)
        .then((res) => {
          this.title = "";
          this.body = "";
          console.log(res);
          this.$router.go();
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>