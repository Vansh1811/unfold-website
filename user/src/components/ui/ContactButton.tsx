// src/components/ContactButton.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ContactButtonProps {
  text?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'xl' | 'icon' | 'iconSm' | 'iconLg';
  className?: string;
  serviceId?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({  
  text = 'Get Quote',
  variant = 'default',   
  size = 'default', 
  className = '',   
  serviceId
}) => {
  const contactUrl = serviceId  
    ? `/contact?service=${serviceId}` 
    : '/contact';

  return (
    <Button 
      asChild 
      variant={variant} 
      size={size} 
      className={className}
    >
      <Link to={contactUrl}>
        {text}
      </Link>
    </Button>
  );
};

export default ContactButton;
