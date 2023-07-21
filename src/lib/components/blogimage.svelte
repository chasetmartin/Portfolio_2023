<script>
    export let photo;
    export let alt;
</script>

<img src={photo} alt={alt} width="80%" class="centerphoto">

<style>
    .centerphoto {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 90%;
    }
</style>