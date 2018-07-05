<template>
  <div class="post">
    <div class="post-header">
      <div class="user">
        <div class="avatar">
          <img :src="`https://avatar-retro.com/habbo-imaging/avatarimage?figure=${user.look}&direction=2&head_direction=2&action=,crr=6`">
        </div>
        <h4>{{ user.username }}</h4>
      </div>
      <div class="meta">
        <h1>Forum Post</h1>
        <p>Start typing your post below!</p>
      </div>
    </div>
    <editor v-model="content" class="post-content tinymce" :init="tinymce">
      <p>Please wait on the editor to load.</p>
    </editor>
    <button @click="modal=true" class="form__submit form__submit--inline">Post</button>
    <post-modal v-if="modal" :content="content" :section="section" @close="modal=false"></post-modal>
  </div>
</template>

<script>
import Modal from '../modals/post'
import Editor from '@tinymce/tinymce-vue';
export default {
  components : {
    'editor': Editor,
    'postModal' : Modal
  },
  data() {
    return {
      content : "Click here to start on your forum post",
      tinymce : {
        selector: 'div.tinymce',
        theme: 'inlite',
        plugins: 'image media table link paste contextmenu textpattern autolink codesample',
        insert_toolbar: 'quickimage quicktable media codesample',
        selection_toolbar: 'insert | fontsizeselect bold italic backcolor  | align | bullist numlist outdent indent | blockquote',
        inline: true,
        paste_data_images: true,
        branding : false
      },
      user : window.localStorage.getObject('user'),
      modal : false
    }
  },
  props : ["section"]
}
</script>
