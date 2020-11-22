<template>
  <b-container fluid>
    <b-row class="my-3">
      <b-col>
        <AddForm></AddForm>
      </b-col>
      <b-col>
        <b-input v-model="searchText" @change="search()"></b-input>
      </b-col>
    </b-row>

    <b-row v-if="posts != null">
      <div 
        class="col-6 d-flex justify-content-center"
        v-for="(post, index) in posts"
        :key="post.id"
        :index="index"
      >
        <b-card :title="post.title" class="w-100 mb-2">
          <b-card-text>{{ post.body }}</b-card-text>

          <div class="d-flex justify-content-end">
            <b-button
              class="mx-1"
              @click="update(post)"
              variant="info"
              data-toggle="modal"
              data-target="#staticBackdrop"
            >Edit</b-button>
            <b-button class="mx-1" variant="danger" @click="deletePost(post.id)">Delete</b-button>
          </div>
        </b-card>
      </div>
    </b-row>

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
                  v-model="editTitle"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Body</label>
                <textarea
                  v-model="editBody"
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
  </b-container>
</template>

<script>
import AddForm from "../components/AddForm";
import apiService from "../service/service";
const _apiService = new apiService();

export default {
  name: "Home",
  data: () => ({
    posts: null,
    _posts: null,
    editTitle: "hello",
    editBody: "how",
    searchText:'',
  }),
  components: {
    AddForm,
  },
  created() {
    this.$store
      .dispatch("getPosts")
      .then((res) => {
        this.posts = res;
        this._posts = res;
      })
      .catch((err) => {
        console.log(err);
        this.error = err;
      });
  },
  methods: {
    update(post){
      // _apiService.getPost(post)
      this.editTitle = post.title
      this.editBody = post.body
      console.log(post.body)
    },
    deletePost(id){
      _apiService.deletePost(id)
        .then(() => {
          console.log('delete')
          this.$router.go();
        })
        .catch(err => console.error(err))
    },
    search(){
      this.posts = null
      var _search = this.searchText
      console.log(_search)
      this.posts = this._posts.filter(function (el){
        console.log(el.title)
        return el.title.indexOf(_search) 
      })
      console.log(this.posts)
    }
  }
};
</script>
