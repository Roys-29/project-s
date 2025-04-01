import { useTranslation } from "react-i18next";
import { ChevronRight, BarChart3, MessageSquare, BarChart4, Lightbulb, Clock, CreditCard } from "lucide-react";

const Features = () => {
  const { t } = useTranslation();
  
  const featureIcons = [
    <BarChart3 className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    <MessageSquare className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    <BarChart4 className="w-6 h-6 text-teal-500 dark:text-teal-400" />,
    <Lightbulb className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    <Clock className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    <CreditCard className="w-6 h-6 text-teal-500 dark:text-teal-400" />
  ];

  const features = t("features.items", { returnObjects: true });

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="container mx-auto max-w-screen-xl">
        <div className="fade-in-section text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("features.title")}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="fade-in-section bg-slate-50 dark:bg-slate-700 p-8 rounded-xl card-hover"
            >
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-600 rounded-lg flex items-center justify-center mb-6">
                {featureIcons[index]}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {feature.description}
              </p>
              <a
                href="#"
                className="text-primary-600 dark:text-primary-400 font-medium flex items-center hover:underline group"
              >
                {feature.link}
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
