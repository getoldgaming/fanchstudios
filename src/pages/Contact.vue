<template>
  <section class="container contact-page">
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
// This page posts form data to an endpoint. By default it reads
// the endpoint from Vite env var VITE_FORMSPREE_ENDPOINT. Example:
// VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id

// Prefer env at build-time, but allow a runtime fallback (window.FORMSPREE_ENDPOINT)
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || (typeof window !== 'undefined' && window.FORMSPREE_ENDPOINT) || ''

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
      // simple validation
      if (!this.form.name || !this.form.email || !this.form.package || !this.form.service) {
        this.status = 'Please complete all required fields and select a package and service.'
        return
      }

      if (!/.+@.+\..+/.test(this.form.email)) {
        this.status = 'Please enter a valid email.'
        return
      }

      // Require a configured endpoint
      if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT.includes('your_form_id')) {
        this.status = 'Form not configured: set VITE_FORMSPREE_ENDPOINT in your .env with your Formspree endpoint.'
        return
      }

      this.submitting = true
      this.status = ''

      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(this.form)
        })

        if (!res.ok) {
          const text = await res.text().catch(() => res.statusText || 'error')
          throw new Error(`Submission failed: ${text}`)
        }

        this.status = 'Thanks — your message was sent.'
        this.form = { name: '', email: '', message: '', package: '', service: '' }
      } catch (err) {
        this.status = err.message || 'Submission failed — please try again later.'
      } finally {
        this.submitting = false
      }
    }
  }
}
</script>

<style scoped>
.contact-page .lead { max-width: 60ch; margin-bottom: 1rem }
.contact-form { display:flex; flex-direction:column; gap:12px; width:100%; max-width:960px; margin:0 auto; align-items:center }
.contact-form label { display:flex; flex-direction:column; gap:8px; width:75% }
.contact-form input, .contact-form textarea, .contact-form select { width:100%; padding:8px 10px; border:1px solid #ddd; border-radius:6px }
.form-actions { margin-top:8px }
.form-status { margin-top:8px; color:var(--accent) }
@media (max-width: 600px) {
  .contact-form label { width:100% }
}
</style>
