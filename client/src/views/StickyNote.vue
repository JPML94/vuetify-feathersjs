<template>
    <div class="sticky-note">
      <h1>Title</h1>
      <p>This is the body of a note.</p>
    </div>
</template>

<script>

export default {
  name: "sticky-note",
};
</script>

<style>
.sticky-note {
    background-color: rgb(253, 253, 157) !important;
    border-color: rgb(252, 252, 131);
    text-decoration: none;
    position: absolute;
    width: 200px;
    min-height: 150px;
    border: 1px solid #fecbcb;
}
</style>
