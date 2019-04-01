<template>
  <main class="faq">
    <h1>Frenquently Asked Questions</h1>

    <div class="error" v-if="error">
      Can't load the questions
    </div>

    <section class="list">
      <article v-for="question in questions">
        <h2 v-html="question.title"></h2>
        <p v-html="question.content"></p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      questions: [],
      error: null,
    };
  },
  async created() {
    try {
      const response = await fetch('http://localhost:3000/question');
      if (response.ok) {
        this.questions = await response.json();
      } else {
        throw new Error('error');
      }
    } catch (error) {
        this.error = error;
    }
  }
}
</script>

<style>

</style>
