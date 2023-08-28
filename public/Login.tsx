
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login  (){
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  

  const handleLogin = () => {
    // Burada kullanıcı adı ve şifrenin doğru olup olmadığını kontrol edin.
    // Eğer doğru ise ana sayfaya yönlendirin, değilse hata mesajı gösterin.
    if (username === 'correctUsername' && password === 'correctPassword') {
      router.push('/home');
    } else {
      alert('Hatalı kullanıcı adı veya şifre.');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Kullanıcı Adı"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Giriş Yap</button>
    </div>
  );
};

