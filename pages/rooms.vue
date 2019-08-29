<template>
  <div class="rooms">
      <h1>部屋作成</h1>
      <input type="text" v-model="newRoom">
      <button v-on:click="saveRoom">Send</button>
      <br>
      <hr>
      <h1>部屋一覧</h1>
      <ul class="room-list">
        <li v-for="(room, i) in rooms" :key="i">
        <ul>
          <li>{{ room.content }}</li>
        </ul>
      </li>
    </ul>
          <a href="/account">ログイン画面</a>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import { db } from '../plugins/firebase'
import { mapGetters, mapState } from 'vuex'

export default {
  data() {
    return {
      loaded: false,
      newRoom: '',
    }
  },
  created: function() {
        this.$store.dispatch('setRoomsRef', db.collection('rooms'))
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
    ...mapGetters({ rooms: 'getRooms' })
  },
  mounted() {
    setTimeout(() => {
      if (!this.isAuthenticated) {
        // ログインしていなかったら飛ぶページを設定
        this.$router.push('account')
      }
      this.loaded = true
    }, 0)
  },
  methods: {
    saveRoom () {
      console.log("save")
      if (!this.newRoom.length) {
        return
      }
      const newRoom = { content: this.newRoom }
      this.newRoom = ''
      db.collection('rooms').add(newRoom)
              this.$store.dispatch('setRoomsRef', db.collection('rooms'))
    },
  }
}
</script>

<style scoped>
ul, li {
  list-style: none;
}

</style>