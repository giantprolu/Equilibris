import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import MethodStep from '../components/method/MethodStep';
import InterventionFormat from '../components/method/InterventionFormat';
import { Search, Lightbulb, Target, Presentation, Users, ArrowRight, Clock, MapPin, CreditCard, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const Method = () => {
  const methodSteps = [
    {
      number: 1,
      title: "Diagnostic",
      description: "Analyse approfondie de la situation, des enjeux et des besoins grâce à des entretiens, observations et questionnaires spécifiques.",
      icon: <Search className="w-6 h-6 text-primary-600" />
    },
    {
      number: 2,
      title: "Conception",
      description: "Élaboration d'une démarche sur-mesure adaptée aux objectifs, aux contraintes et au contexte spécifique de votre organisation.",
      icon: <Lightbulb className="w-6 h-6 text-primary-600" />
    },
    {
      number: 3,
      title: "Intervention",
      description: "Mise en œuvre de l'accompagnement selon les modalités définies, avec une approche flexible qui s'adapte aux évolutions et besoins.",
      icon: <Target className="w-6 h-6 text-primary-600" />
    },
    {
      number: 4,
      title: "Évaluation",
      description: "Mesure des résultats et de l'impact des actions menées, ajustements si nécessaire et recommandations pour pérenniser les acquis.",
      icon: <Presentation className="w-6 h-6 text-primary-600" />
    }
  ];

  const interventionFormats = [
    {
      title: "Format d'intervention",
      description: "Nous nous adaptons à vos besoins et contraintes pour proposer le format d'intervention le plus adapté.",
      details: [
        "Coaching individuel en face-à-face",
        "Ateliers collectifs et formations",
        "Médiation et facilitation de groupe",
        "Audit et conseil opérationnel",
        "Conférences et sensibilisations"
      ],
      icon: <Users className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Durée et fréquence",
      description: "Nos interventions s'adaptent à votre calendrier et aux objectifs définis ensemble.",
      details: [
        "Intervention ponctuelle (1 à 3 jours)",
        "Accompagnement court terme (1 à 3 mois)",
        "Accompagnement moyen terme (3 à 6 mois)",
        "Accompagnement long terme (6 à 12 mois)",
        "Suivi périodique et sessions de rappel"
      ],
      icon: <Clock className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Lieu d'intervention",
      description: "Nous intervenons dans vos locaux ou à distance, selon vos préférences et contraintes.",
      details: [
        "Dans vos locaux (Paris et région parisienne)",
        "Dans nos bureaux (Paris centre)",
        "À distance (visioconférence)",
        "Format hybride (présentiel et distanciel)",
        "Séminaires résidentiels (France entière)"
      ],
      icon: <MapPin className="w-8 h-8 text-primary-600" />
    },
    {
      title: "Tarification",
      description: "Nos tarifs sont adaptés à la nature de l'intervention et à la taille de votre organisation.",
      details: [
        "Forfait journée d'intervention",
        "Forfait par projet ou mission",
        "Tarif horaire pour le coaching individuel",
        "Abonnement pour un accompagnement régulier",
        "Devis personnalisé sur demande"
      ],
      icon: <CreditCard className="w-8 h-8 text-primary-600" />
    }
  ];

  return (
    <>
      <PageHeader 
        title="Notre méthode" 
        subtitle="Une démarche structurée et sur-mesure qui s'adapte à vos besoins et spécificités."
        titleColor="text-[#eec1ac]"
        subtitleColor="text-white"
        backgroundColor="bg-primary-400" 
      />
      
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-secondary-700">
              Chez Equilibris Consulting, nous avons développé une méthodologie qui place l'humain 
              au centre tout en garantissant le respect du cadre légal. Notre approche se déroule 
              en 4 étapes clés pour garantir des résultats durables et mesurables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {methodSteps.map((step, index) => (
              <MethodStep 
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary-50 p-8 rounded-lg mb-16"
          >
            <div className="flex items-start">
              <div className="bg-white rounded-full p-2 mr-4 mt-1">
                <Compass className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Notre valeur ajoutée : l'approche transversale</h3>
                <p className="text-secondary-800 mb-6">
                  Ce qui distingue notre méthodologie, c'est l'intégration systématique des dimensions psychologiques 
                  et juridiques à chaque étape du processus. Cette approche transversale permet de :
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3">Sur le plan psychologique</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-accent-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-secondary-800">Comprendre les comportements et motivations</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-accent-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-secondary-800">Développer le potentiel individuel et collectif</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-accent-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-secondary-800">Favoriser le bien-être et l'engagement</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-primary-800 mb-3">Sur le plan juridique</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-accent-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-secondary-800">Sécuriser les pratiques et décisions</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-accent-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-secondary-800">Anticiper et prévenir les risques légaux</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-accent-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-secondary-800">Garantir la conformité des actions engagées</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <h2 className="text-3xl font-bold text-primary-800 text-center mb-12">Modalités d'intervention</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interventionFormats.map((format, index) => (
              <InterventionFormat 
                key={index}
                title={format.title}
                description={format.description}
                details={format.details}
                icon={format.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Method;