import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  titleColor?: string;
  subtitleColor?: string;
  backgroundColor?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  titleColor = "text-primary-800", 
  subtitleColor = "text-secondary-700",
  backgroundColor = "bg-primary-50"
}) => {
  return (
    <div className={`py-20 ${backgroundColor}`}>
      <div className="container text-center">
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${titleColor}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${subtitleColor}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;