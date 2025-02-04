import axios from 'axios';
import { GROQ_API_CONFIG } from '../constants';

export const groqClient = axios.create({
  baseURL: GROQ_API_CONFIG.BASE_URL,
  headers: {
    'Authorization': `Bearer ${GROQ_API_CONFIG.API_KEY}`,
    'Content-Type': 'application/json'
  }
});