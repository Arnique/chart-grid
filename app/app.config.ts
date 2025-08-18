export default defineAppConfig({
  ui: {
    toast: {
      variants: {
        color: {
          error: {
            root: 'bg-error-800 ring-error text-white focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error',
            icon: 'text-white',
            description: 'text-white/70'
          },
        },
      }
    }
  }
})
