import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const { t } = useTranslation();
  const plans = t("pricing.plans", { returnObjects: true });
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const toggleBillingPeriod = (period: "monthly" | "annual") => {
    setBillingPeriod(period);
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 demo-gradient">
      <div className="container mx-auto max-w-screen-xl">
        <div className="fade-in-section text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("pricing.title")}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {t("pricing.subtitle")}
          </p>
          <div className="flex justify-center mt-8">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-1 inline-flex">
              <button
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  billingPeriod === "monthly"
                    ? "bg-primary-600 text-white"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
                onClick={() => toggleBillingPeriod("monthly")}
              >
                {t("pricing.billingToggle.monthly")}
              </button>
              <button
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  billingPeriod === "annual"
                    ? "bg-primary-600 text-white"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
                onClick={() => toggleBillingPeriod("annual")}
              >
                {t("pricing.billingToggle.annual")}
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const isPopular = 'popular' in plan;
            
            return (
              <motion.div
                key={index}
                className={`fade-in-section bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border ${
                  isPopular
                    ? "border-2 border-primary-500 dark:border-primary-400 relative"
                    : "border-slate-100 dark:border-slate-700"
                } card-hover ${isPopular ? "md:-mt-4 md:mb-4" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {isPopular && (
                  <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium">
                    {plan.popular}
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">{billingPeriod === "annual" && plan.price !== "Custom" 
                      ? plan.price.replace('$', '$') // Replace with discounted price in production
                      : plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-slate-500 dark:text-slate-400 ml-2">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`block w-full py-3 text-center font-medium rounded-lg transition-colors ${
                      isPopular
                        ? "btn-gradient text-white"
                        : "bg-white dark:bg-slate-800 border border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-slate-50 dark:hover:bg-slate-700"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
