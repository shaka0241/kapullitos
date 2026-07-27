import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('landing page loads, passes a11y, and form works', async ({ page }) => {
  await page.goto('/');
  
  // Verify HeroSection content
  await expect(page.locator('text=Protegemos la salud')).toBeVisible();

  // Accessibility check
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);

  // Fill contact form
  await page.fill('input[name="nombre"]', 'Test Voluntario');
  await page.fill('input[name="email"]', 'test@ejemplo.com');
  await page.selectOption('select[name="especialidad"]', 'pediatria');
  await page.click('button[type="submit"]');
  
  // Verify success message
  await expect(page.locator('text=¡Gracias por tu interés! Nos pondremos en contacto pronto.')).toBeVisible();
});
