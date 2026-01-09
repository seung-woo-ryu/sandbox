import { defineConfig } from 'vitest/config'
import { preview } from '@vitest/browser-preview'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['src/**/*.browser.test.{ts,tsx}'],
    browser: {
      provider: preview(),
      enabled: true,
      instances: [{ name: 'chrome', browser: 'chrome' }],
    },
  },
})

