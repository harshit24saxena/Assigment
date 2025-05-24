import { useEffect } from "react";
import "./ProfilePage.css";

export const ProfilePage = () => {
  useEffect(()=>{  
    const data = JSON.parse(localStorage.getItem('PD'))
    console.log(data);
  })
    
  return (
    <div className="container_profile">
      <h1>Account settings</h1>
      <div className="personal_detail">
        <img
          src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 icon">
  <path fill-rule="evenodd" d="M1 8a2 2 0 0 1 2-2h.93a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 8.07 3h3.86a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 16.07 6H17a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8Zm13.5 3a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM10 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
</svg>


        <div className="Name_email">
          <h2>Marry</h2>
          <h2>Marry@gmail.com</h2>
        </div>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, cum
        veritatis. Delectus sit reiciendis nihil inventore voluptates porro cum
        quo nemo autem ex. Velit earum vel alias error recusandae
        necessitatibus!
      </p>
      <div className="underline"></div>
    </div>
  );
};
