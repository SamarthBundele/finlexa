// src/services/registerapi.ts
import axios from 'axios';

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export const registerUser = async (formData: RegisterFormData) => {
  const res = await axios.post('https://finlexa-61w5.vercel.app/api/users/register', formData);
  return res.data;
};
