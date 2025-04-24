import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase as BriefcaseBusiness, GraduationCap, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <>
      <PageHeader 
        title="Qui suis-je ?" 
        subtitle="Découvrez mon parcours et mon approche unique combinant psychologie et droit social."
        titleColor="text-[#eec1ac]"
        subtitleColor="text-white"
        backgroundColor="bg-primary-400"
      />
      
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-primary-800 mb-6">
                Vanessa Lefebvre
              </h2>
              <h3 className="text-xl text-yellow-600 mb-8">
                Fondatrice d'Equilibris Consulting
              </h3>
              
              <div className="space-y-6 text-secondary-800">
                <p>
                  Diplômée en psychologie et en droit social, j'accompagne les entreprises 
                  et leurs collaborateurs dans leurs transformations et problématiques humaines.
                </p>

                <p>
                  Mon parcours m'a permis de développer une expertise unique à l'intersection de la psychologie 
                  et du droit, me permettant d'aborder les situations professionnelles dans leur globalité, 
                  tant sur le plan humain que juridique.
                </p>
                
                <p>
                  Cette double compétence est au cœur de mon approche : comprendre les enjeux psychologiques 
                  tout en maîtrisant le cadre légal pour proposer des solutions pragmatiques, éthiques et durables.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent-100 rounded-lg transform -rotate-3"></div>
                <img 
                  src="/portait2.jpg" 
                  alt="Vanessa Lefebvre - Portrait" 
                  className="relative z-10 rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* <section className="section bg-primary-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-800 mb-6">
              Mon 
            </h2>
            <p className="text-lg text-secondary-700">
            Je propose une approche transversale, à la croisée de la psychologie du travail, du coaching et du droit social.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Formation</h3>
              <ul className="space-y-3 text-secondary-800">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Reste a compléter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Reste a compléter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Reste a compléter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Reste a compléter</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BriefcaseBusiness className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Expérience</h3>
              <ul className="space-y-3 text-secondary-800">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Reste a compléter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Reste a compléter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Reste a compléter</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Reste a compléter</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Spécialités</h3>
              <ul className="space-y-3 text-secondary-800">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Coaching de dirigeants et managers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Gestion des risques psychosociaux</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Accompagnement du changement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Médiation et résolution de conflits</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section> */}
      
      <section className="section bg-primary-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary-800 mb-6">
              Mon approche
            </h2>
            <p className="text-lg text-secondary-700">
            Je propose une approche transversale, à la croisée de la psychologie du travail, du coaching et du droit social.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-400 p-8 rounded-lg shadow-md border-t-4 border-[#eec1ac]"
            >
              <div className="flex items-center mb-6">
                <Users className="w-7 h-7 text-[#eec1ac] mr-3" />
                <h3 className="text-xl font-bold text-[#eec1ac]">Dimension psychologique</h3>
              </div>
              
              <p className="text-white mb-6">
                Je m'appuie sur les sciences comportementales pour comprendre les dynamiques individuelles 
                et collectives, identifier les leviers de motivation et accompagner le développement des potentiels.
              </p>
              
              <ul className="space-y-2 text-white">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Analyse des comportements et des interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Développement des compétences relationnelles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Accompagnement des transformations personnelles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Prévention des risques psychosociaux</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary-400 p-8 rounded-lg shadow-md border-t-4 border-[#eec1ac]"
            >
              <div className="flex items-center mb-6">
                <BookOpen className="w-7 h-7 text-[#eec1ac] mr-3" />
                <h3 className="text-xl font-bold text-[#eec1ac]">Dimension juridique</h3>
              </div>
              
              <p className="text-white mb-6">
                J'intègre systématiquement le cadre légal dans mes interventions pour garantir 
                la conformité des actions et sécuriser les pratiques RH et managériales.
              </p>
              
              <ul className="space-y-2 text-white">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Respect du cadre légal du travail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Sécurisation des pratiques managériales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Anticipation des risques juridiques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  <span>Conseil sur les obligations légales</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 lg:mt-16 bg-primary-400 p-8 rounded-lg border-l-4 border-[#eec1ac]"
          >
            <div className="flex items-center mb-6">
              <Zap className="w-7 h-7 text-[#eec1ac] mr-3" />
              <h3 className="text-xl font-bold text-[#eec1ac]">L'approche Equilibris Consulting</h3>
            </div>
            
            <p className="text-white mb-6">
              La combinaison de ces deux dimensions crée une synergie unique qui permet d'aborder chaque situation 
              sous un angle complet et de proposer des solutions pertinentes, durables et conformes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-white mb-3">Points forts</h4>
                <ul className="space-y-2 text-white">
                <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Double regard : humain et juridique, pour des actions bienveillantes et
                    rigoureuses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Expérience terrain avec une approche concrète des problématiques
                    vécues</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Écoute, engagement et pragmatisme, dans une logique de résultats
                    durables</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-3">Bénéfices clients</h4>
                <ul className="space-y-2 text-white">
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Économie de temps et d'énergie</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Réduction des risques juridiques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <span>Amélioration durable du climat social</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;