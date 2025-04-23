import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import CaseStudy from '../components/case-studies/CaseStudy';
import { TrendingUp, Heart, Users } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Transformation d'une équipe managériale en difficulté",
      client: "Secteur bancaire",
      context: "Une équipe de direction composée de 12 managers traversait une période de forte tension suite à une réorganisation interne. Les conflits étaient nombreux, la confiance brisée et la performance en baisse.",
      challenge: "Rétablir un climat de confiance, améliorer la communication et développer une dynamique collaborative efficace, tout en respectant le cadre juridique de l'entreprise.",
      approach: [
        "Diagnostic approfondi des dynamiques d'équipe et entretiens individuels",
        "Coaching individuel des managers sur leurs postures et comportements",
        "Ateliers collectifs de cohésion et de communication",
        "Formation aux techniques de feedback et de résolution de conflit",
        "Mise en place d'un cadre de travail collaboratif et respectueux"
      ],
      results: [
        "Amélioration significative du climat social et de la confiance",
        "Développement de méthodes de travail collaboratives et efficaces",
        "Hausse de 40% de la productivité collective en 6 mois",
        "Diminution des risques juridiques liés aux tensions internes",
        "Meilleure gestion des émotions et des situations conflictuelles"
      ],
      duration: "8 mois",
      teamSize: "12 personnes",
      metrics: [
        {
          label: "Productivité",
          value: "+40%",
          icon: <TrendingUp className="w-5 h-5 text-accent-500" />
        },
        {
          label: "Bien-être",
          value: "+68%",
          icon: <Heart className="w-5 h-5 text-accent-500" />
        },
        {
          label: "Rétention",
          value: "100%",
          icon: <Users className="w-5 h-5 text-accent-500" />
        }
      ],
      imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      order: "normal" as const
    },
    {
      title: "Accompagnement RH lors d'une restructuration",
      client: "Industrie manufacturière",
      context: "Une entreprise de 150 salariés devait procéder à une restructuration importante impliquant la suppression de 25 postes, tout en préservant les compétences clés et le climat social.",
      challenge: "Conduire la restructuration de manière juridiquement sécurisée tout en minimisant l'impact sur le bien-être des salariés et en préservant l'engagement des équipes maintenues.",
      approach: [
        "Audit organisationnel et juridique complet pour identifier les meilleures options",
        "Conception d'un plan de restructuration conforme aux obligations légales",
        "Accompagnement des managers dans la communication et la gestion du changement",
        "Mise en place d'un dispositif de soutien psychologique pour les salariés",
        "Développement d'un plan de reclassement et d'accompagnement individuel"
      ],
      results: [
        "Restructuration menée sans contentieux juridique",
        "75% des salariés concernés ont retrouvé un emploi dans les 6 mois",
        "Maintien de l'engagement des équipes restantes malgré le contexte",
        "Préservation de la réputation de l'entreprise et de sa marque employeur",
        "Mise en place d'une nouvelle organisation plus efficiente"
      ],
      duration: "12 mois",
      teamSize: "150 personnes",
      metrics: [
        {
          label: "Litiges évités",
          value: "100%",
          icon: <TrendingUp className="w-5 h-5 text-primary-600" />
        },
        {
          label: "Reclassement",
          value: "75%",
          icon: <Heart className="w-5 h-5 text-primary-600" />
        },
        {
          label: "Engagement",
          value: "Maintenu",
          icon: <Users className="w-5 h-5 text-primary-600" />
        }
      ],
      imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      order: "reverse" as const
    }
  ];

  return (
    <>
      <PageHeader 
        title="Études de cas" 
        subtitle="Découvrez comment nous avons accompagné nos clients dans la résolution de leurs problématiques." 
      />
      
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-secondary-700">
              À travers ces cas concrets, nous illustrons notre approche et les résultats obtenus 
              pour nos clients. Chaque intervention est unique et adaptée aux besoins spécifiques 
              de l'organisation et de ses collaborateurs.
            </p>
          </div>
          
          <div className="border-t border-secondary-200">
            {caseStudies.map((caseStudy, index) => (
              <React.Fragment key={index}>
                <CaseStudy {...caseStudy} />
                {index < caseStudies.length - 1 && (
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

export default CaseStudies;