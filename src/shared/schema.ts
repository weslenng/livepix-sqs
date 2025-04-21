import { z } from "zod";

export const Widget = z.object({
  token: z.string(),
});

export type Widget = z.infer<typeof Widget>;

export type GenericEvent = {
  message: {
    event: string;
  };
};

export const Notification = z.object({
  id: z.string(),
  message: z.object({
    payload: z.object({
      data: z.object({
        config: z.object({
          textToSpeechUrl: z.string().nullable(),
        }),
        data: z.object({
          amount: z.object({
            currency: z.string(),
            formatted: z.string(),
            value: z.number(),
          }),
          author: z.string().nullable(), // Não tenho certeza se esse campo é nullable
          message: z.string().nullable()
        }),
      }),
    }),
  }),
});

export type Notification = z.infer<typeof Notification>;

export const Ping = z.object({
  message: z.object({
    payload: z.number(),
  }),
});

export type Ping = z.infer<typeof Ping>;
