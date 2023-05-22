import { createClient } from 'next-sanity';

const client = createClient({
	projectId: '59tdp18w',
	dataset: 'production',
	apiVersion: '2023-05-01',
	useCdn: false,
});

export default client;
