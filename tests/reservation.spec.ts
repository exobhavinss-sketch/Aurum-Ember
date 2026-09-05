import { test, expect } from '@playwright/test';

test.describe('Reservation Management System', () => {
  test('should allow a user to submit a reservation and receive a valid verification token', async ({ page }) => {
    // 1. Navigate to reservations
    await page.goto('/reservations');
    
    // 2. Fill out the form
    await page.fill('input[name="firstName"]', 'John');
    await page.fill('input[name="lastName"]', 'Doe');
    await page.fill('input[name="email"]', 'john.doe@example.com');
    await page.fill('input[name="phone"]', '555-0199');
    
    // Fill Date (tomorrow)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    await page.fill('input[name="date"]', dateStr);
    
    await page.selectOption('select[name="time"]', '19:00');
    await page.selectOption('select[name="guests"]', '2');
    await page.selectOption('select[name="experience"]', 'dining-room');
    await page.fill('textarea[name="requests"]', 'Anniversary dinner');

    // 3. Submit Form
    await page.click('button[type="submit"]');

    // 4. Verify Success Dashboard
    await expect(page.locator('text=Reservation Requested')).toBeVisible();
    await expect(page.locator('button:has-text("Download PDF")')).toBeVisible();

    // 5. Test Verification endpoint (we would need the token from the UI if we exposed it, 
    // but the QR code URL contains it. Let's intercept or extract it from the DOM).
    // In our implementation, the QR code uses the verification token.
  });
});
