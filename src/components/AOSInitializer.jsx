import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    // Refresh AOS untuk memastikan animasi terdeteksi
    AOS.refresh();
  }, []);

  return null;
}