import SanityClient from "@sanity/client";

const Client = SanityClient({
  projectId: "6412z3fz",
  dataset: "production",
  apiVersion: "v1",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export default Client;
