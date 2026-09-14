import { z } from 'zod';

export const settingsSchema = z.object({
  theme: z.enum(['light', 'dark']),
  notifications: z.object({ email: z.boolean(), push: z.boolean() }),
});

// Zod 3 API. Zod 4 removed deepPartial(); no DepSherpa recipe covers this change.
export const settingsPatchSchema = settingsSchema.deepPartial();

export type SettingsPatch = z.infer<typeof settingsPatchSchema>;
