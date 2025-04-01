import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const Demo = () => {
  const { t } = useTranslation();
  const demoButtons = t("demo.buttons", { returnObjects: true });

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 demo-gradient">
      <div className="container mx-auto max-w-screen-xl">
        <div className="fade-in-section text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("demo.title")}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {t("demo.subtitle")}
          </p>
        </div>

        <div className="fade-in-section bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-100 dark:border-slate-700 max-w-4xl mx-auto">
          <div className="p-2 bg-slate-50 dark:bg-slate-700 border-b border-slate-100 dark:border-slate-600 flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="ml-2 text-xs text-slate-500 dark:text-slate-400">
              Scout Interactive Demo
            </div>
          </div>

          <div className="p-6">
            <div className="bg-slate-800 rounded-lg overflow-hidden aspect-video flex items-center justify-center relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Interactive demo of Scout's features and capabilities"
                className="w-full h-auto object-cover"
                width="800"
                height="450"
              />

              <motion.div 
                className="absolute flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <button
                  aria-label="Play demo video"
                  className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm hover:bg-opacity-30 transition-all"
                >
                  <Play className="w-8 h-8 text-white" fill="white" />
                </button>
              </motion.div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {demoButtons.map((button, index) => (
                <motion.button
                  key={index}
                  className="p-4 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-left"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <span className="block text-sm font-medium mb-1">{button.title}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{button.description}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="fade-in-section mt-12 text-center">
          <a
            href="#contact"
            className="btn-gradient text-white font-medium px-8 py-3 rounded-lg inline-block"
          >
            {t("demo.cta")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Demo;
