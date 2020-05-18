<template>
  <div class="contact-us">
    <RestaurantAddress/>
    <br>
    <GpsNavAppsButtons/>
    <br>
    <ContactButtons/>
  </div>
</template>

<script>
import { ContactButtons } from 'ContactButtons'
import { GpsNavAppsButtons } from 'GpsNavAppsButtons'
import { RestaurantAddress } from 'RestaurantAddress'

export default {
  name: 'ContactUs',
  components: {
    ContactButtons,
    GpsNavAppsButtons,
    RestaurantAddress
  }
}
</script>

<style lang="stylus">
.contact-us
  padding 0.5em
  margin 1em 0 !important
</style>
