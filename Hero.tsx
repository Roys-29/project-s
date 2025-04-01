import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 hero-gradient" id="hero">
      <div className="container mx-auto max-w-screen-xl">
        <motion.div
          className="fade-in-section flex flex-col md:flex-row items-center justify-between gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="md:w-1/2 space-y-6">
            <motion.h1 
              className="text-4xl sm:text-5xl font-extrabold tracking-tight"
              variants={itemVariants}
            >
              <span className="gradient-text">{t("hero.title")}</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl"
              variants={itemVariants}
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
              variants={itemVariants}
            >
              <a
                href="#demo"
                className="btn-gradient text-white font-medium px-8 py-3 rounded-lg text-center"
              >
                {t("hero.cta.primary")}
              </a>
              <a
                href="#features"
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-medium px-8 py-3 rounded-lg text-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                {t("hero.cta.secondary")}
              </a>
            </motion.div>
            <motion.div className="pt-6" variants={itemVariants}>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {t("hero.trusted")}
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-4">
                {t("hero.companies", { returnObjects: true }).map((company, index) => (
                  <div
                    key={index}
                    className="text-slate-400 dark:text-slate-500 font-medium"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div className="md:w-1/2 relative" variants={itemVariants}>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700">
              <div className="p-2 bg-slate-50 dark:bg-slate-700 border-b border-slate-100 dark:border-slate-600 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-2 text-xs text-slate-500 dark:text-slate-400">
                  Scout AI Dashboard
                </div>
              </div>
              <div className="p-5">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="Scout AI Dashboard interface showing analytics and insights"
                  className="rounded-lg w-full h-auto"
                  width="600"
                  height="400"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-100 dark:bg-primary-900/20 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-100 dark:bg-teal-900/20 rounded-full z-[-1]"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
