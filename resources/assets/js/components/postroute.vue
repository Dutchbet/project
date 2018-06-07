<template>
<div>
 <form action="this.postroute" method="POST"></form>
<button type="submit" class="button-reflectie"><img src="/images/send.svg"></button>
Hello
</div>
</template>

<script>
export default {
 props: ['post-route']
}
</script>