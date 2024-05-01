import { useState } from "react";
import Button from "../components/Button";

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleSignUp = (e) => {
    e.preventDefault(); // Це перешкоджає стандартній поведінці відправки форми

    if (!isValidEmail) return;
    setEmail("");
    
    // Тут ви можете додати логіку для відправлення даних на сервер
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    setIsValidEmail(emailRegex.test(inputEmail) || inputEmail === '');
  };

  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>
      <form
        onSubmit={handleSignUp}
        className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full relative'
      >       
        <input
          id="email"
          name="email"
          type='text'
          placeholder='enter your email'
          className='input text-lg'
          autoComplete="off"
          value={email}
          onChange={handleEmailChange}
        />
        {!isValidEmail ? (
          <span className="text-red-800 text-lg absolute -top-3 left-10 font-semibold bg-white">Invalid email</span>
        ) : (
          <span className="text-green-700 text-lg absolute -top-3 left-10 font-semibold bg-white">email Ok!</span>
        )}
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button
            label='Sign Up'
            fullWidth
            disabled={!isValidEmail}
            type="submit"
          />
        </div>      
      </form>
    </section>
  );
};

export default Subscribe;