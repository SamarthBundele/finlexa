import axios from 'axios';

interface WaitlistFormData {
  name: string;
  number: string;
  email: string;
}

export const submitWaitlistForm = async (formData: WaitlistFormData) => {
  const response = await axios.post('https://finlexa-61w5.vercel.app/api/waitlist', {
    name: formData.name,
    number: formData.number,
    email: formData.email,
  });
  return response.data;
};
