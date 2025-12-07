import React from 'react';

// Определяем интерфейс для свойств компонента
interface GitHubLinkProps {
  /** * Динамический URL-адрес, который будет меняться 
   * при каждом использовании компонента.
   */
  href: string;
}

// Создаем функциональный компонент, принимающий href как prop
const GitHubLink: React.FC<GitHubLinkProps> = ({ href }) => {
  return (
    <div className="flex justify-center">
      <a
        className="
          inline-block 
          py-2 px-4            
          text-white           
          bg-gray-800          
          border-2 border-gray-800 
          rounded-lg           
          font-bold            
          text-base            
          cursor-pointer       
          m-4                 
          transition duration-300 
          hover:bg-gray-700    
          hover:border-gray-700
        "
        target="_blank"
        // Используем переданное свойство href
        href={href}
      >
        Посмотреть код этой страницы  GitHub
      </a>
    </div>
  );
};

export default GitHubLink;