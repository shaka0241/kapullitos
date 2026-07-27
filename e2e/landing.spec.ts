import { test, expect } from '@playwright/test';

test('landing page loads and form works', async ({ page }) => {
  await page.goto('/');
  
  // Verify HeroSection content
  await expect(page.locator('text=Protegemos la salud')).toBeVisible();

  // Fill contact form
  await page.fill('input[name="nombre"]', 'Test Voluntario');
  await page.fill('input[name="email"]', 'test@ejemplo.com');
  await page.selectOption('select[name="especialidad"]', 'pediatria');
  await page.click('button[type="submit"]');
  
  // Verify success message
  await expect(page.locator('text=¡Gracias por tu interés! Nos pondremos en contacto pronto.')).toBeVisible();
});
