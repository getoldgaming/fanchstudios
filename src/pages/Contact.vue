<template>
  <section class="container contact-page" style="padding:48px 0">
    <h1 class="hero-title">Contact</h1>
    <p class="lead">Fill out the form below and I'll get back to you within 48 hours.</p>

    <form class="contact-form" @submit.prevent="onSubmit" novalidate>
      <label>
        Name
        <input v-model="form.name" type="text" required />
      </label>

      <label>
        Email
        <input v-model="form.email" type="email" required />
      </label>

    <label>
      Service
      <select v-model="form.service" required>
        <option disabled value="">Select a service</option>
        <option value="Boudoir Experience">Boudoir Experience</option>
        <option value="Couples Boudoir">Couples Boudoir</option>
        <option value="Bridal Boudoir">Bridal Boudoir</option>
        <option value="Cosplay">Cosplay</option>
        <option value="Pin-up">Pin-up</option>
        <option value="Fine Art Nude">Fine Art Nude</option>
      </select>
    </label>

    <label>
      Package
      <select v-model="form.package" required>
        <option disabled value="">Select a package</option>
        <option value="Bronze">Bronze</option>
        <option value="Silver">Silver</option>
        <option value="Gold">Gold</option>
      </select>
    </label>

    <label>
      Message (optional)
      <textarea v-model="form.message" rows="6"></textarea>
    </label>

      <div class="form-actions">
        <button class="btn" type="submit" :disabled="submitting">
          {{ submitting ? 'Sending...' : 'Send Message' }}
        </button>
      </div>

      <p v-if="status" class="form-status">{{ status }}</p>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
  form: { name: '', email: '', message: '', package: '', service: '' },
      submitting: false,
      status: ''
    }
  },
  created() {
    const q = (this.$route && this.$route.query) ? this.$route.query : {}
    if (q.package) this.form.package = q.package
    if (q.service) this.form.service = q.service
  },
  watch: {
    '$route.query'(q) {
      if (q.package) this.form.package = q.package
      if (q.service) this.form.service = q.service
    }
  },
  methods: {
    async onSubmit() {
      if (!this.form.name || !this.form.email || !this.form.package || !this.form.service) {
        this.status = 'Please complete all required fields and select a package and service.'
        return
      }

      // Basic email check
      if (!/.+@.+\..+/.test(this.form.email)) {
        this.status = 'Please enter a valid email.'
        return
      }

      this.submitting = true
      this.status = ''

  // Mock submit - replace with fetch to your backend or Netlify/Forms integration
  await new Promise(r => setTimeout(r, 800))

  this.status = 'Thanks — your message was sent.'
      this.submitting = false
  this.form = { name: '', email: '', message: '', package: '', service: '' }
    }
  }
}
</script>

<style scoped>
.contact-page .lead { max-width: 60ch; margin-bottom: 1rem }
.contact-form { display:flex; flex-direction:column; gap:12px; max-width:720px }
.contact-form label { display:flex; flex-direction:column; gap:8px }
.contact-form input, .contact-form textarea, .contact-form select { padding:8px 10px; border:1px solid #ddd; border-radius:6px }
.form-actions { margin-top:8px }
.form-status { margin-top:8px; color:var(--accent) }
</style>
