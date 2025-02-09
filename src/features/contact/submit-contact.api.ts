import axios from 'axios';

interface SubmitContactRequest {
  first_name: string;
  last_name?: string;
  email: string;
  message?: string;
}

export const submitContactInfo = async (request: SubmitContactRequest) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_CORE_API_URL}/notifications/consultancy-request`,
    request,
  );

  if (response.status >= 300) {
    throw new Error('Failed to submit contact');
  }

  return response.data;
};
