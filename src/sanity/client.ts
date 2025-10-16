import { createClient } from "@sanity/client";

const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-10-01"; // Default to a valid date

export const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion, // Use the validated or default API version
    useCdn: true,
});

export const previewClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion,
    useCdn: false,
    token: process.env.SANITY_API_READ_TOKEN,
});

export const getClient = (preview = false) => (preview ? previewClient : sanityClient);