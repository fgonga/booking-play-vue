
<template>
  <div>
        <div id="header">
            <h1>Play framework booking demo</h1>
                <div id="options" v-if="user">
                    Connected as {{user.username}}
                    |
                    <a href="@{Hotels.index()}">Search</a>
                    |
                    <a href="@{Hotels.settings()}">Settings</a>
                    |
                    <a href="@{Application.logout()}">Logout</a>
                </div>
        </div>
        <div id="content">
        <child />
        </div>
        <div id="footer">
            Created with <a href="https://www.playframework.com">play framework</a> and really inspirated from the booking sample application provided by <a href="http://seamframework.org/">seam framework</a>
        </div>
  </div>
</template>
<script>
export default {
    name: "BasicAuth",
    data() {
        return {
          user:null
        }
    },
    created() {
    }
};
</script>

