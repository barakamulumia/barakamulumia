import { ServicesOffered } from '../types/service';
import { client } from '@/sanity/lib/client';
import { servicesQuery } from '../queries/services.query';

export async function getServices(): Promise<ServicesOffered[]> {
  try {
    const services = (await client.fetch(servicesQuery)) as ServicesOffered[];
    return services;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}
