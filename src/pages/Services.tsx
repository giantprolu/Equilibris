import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ServiceCategory from '../components/services/ServiceCategory';

const Services = () => {
  const serviceCategories = [
    {
      id: 'accompagnement',
      title: 'Accompagnement individuel & collectif',
      description: 'Nous proposons un coaching individuel (managers, salariés en transition, situations de mal-être, burn-out). Prévention de la souffrance au travail, épuisement professionnel, perte de sens Médiation et gestion de conflits interpersonnels ou d’équipe. Soutien à la reprise après arrêt (maladie, burn-out, conflits)',
      offerings: [
        'Coaching individuel de dirigeants et managers',
        'Facilitation d\'ateliers collectifs et team building',
        'Médiation et résolution de conflits',
        'Accompagnement des transitions professionnelles',
        'Gestion du stress'
      ],
      benefits: [
        'Développement du leadership et des compétences managériales',
        'Amélioration de la cohésion et de l\'efficacité collective',
        'Résolution durable des tensions et conflits',
        'Renforcement de la confiance et de l\'engagement'
      ],
      imageUrl: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      order: 'normal' as const
    },
    {
      id: 'conseil',
      title: 'Conseil RH & Droit social',
      description: 'Nos conseils aux équipes RH sur les relations sociales et les obligations légales aide à la gestion des situations sensibles : procédures disciplinaires, harcèlement, absences prolongées. Révision ou rédaction de documents RH : règlements intérieurs, chartes, notes internes. Appui dans les relations avec les représentants du personnel et les syndicats',
      offerings: [
        'Audit des pratiques RH et conformité légale',
        'Accompagnement des restructurations et réorganisations',
        'Prévention et gestion des risques psychosociaux',
        'Optimisation des relations sociales',
        'Conseil en droit social et contrats de travail'
      ],
      benefits: [
        'Sécurisation juridique des décisions et pratiques RH',
        'Prévention des litiges et contentieux',
        'Amélioration du climat social et de la QVT',
        'Gestion éthique et responsable des transformations'
      ],
      imageUrl: 'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      order: 'reverse' as const
    },
    {
      id: 'formations',
      title: 'Formations & sensibilisations',
      description: 'Nous concevons des ateliers sur la communication, le leadership bienveillant, la gestion du stress. Formation des managers aux risques psychosociaux et au droit du travail. Accompagnement des RH et CSE sur les obligations en matière de QVT et de prévention',
      offerings: [
        'Management et leadership',
        'Communication et intelligence émotionnelle',
        'Prévention des RPS et harcèlement',
        'Droit social pour managers',
        'Gestion des conflits et médiation'
      ],
      benefits: [
        'Montée en compétences des équipes managériales',
        'Culture d\'entreprise plus saine et inclusive',
        'Meilleure connaissance du cadre légal et des risques',
        'Application concrète des acquis en situation professionnelle'
      ],
      imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      order: 'normal' as const
    }
  ];

  return (
    <>
      <PageHeader 
        title="Nos services" 
        subtitle="Découvrez notre palette de services combinant Coach en psychologie & Conseil en droit social" 
        titleColor="text-[#eec1ac]"
        subtitleColor="text-white"
        backgroundColor="bg-primary-400"
      />
      
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-secondary-700">
              Chez Equilibris Consulting, nous proposons une approche unique qui intègre psychologie et droit 
              pour répondre de manière globale aux défis des organisations et de leurs collaborateurs.
            </p>
          </div>
          
          <div className="border-t border-secondary-200">
            {serviceCategories.map((category, index) => (
              <React.Fragment key={category.id}>
                <ServiceCategory {...category} />
                {index < serviceCategories.length - 1 && (
                  <div className="border-t border-secondary-200"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;