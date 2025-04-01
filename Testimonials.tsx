import { useTranslation } from "react-i18next";
import { ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials.items", { returnObjects: true });

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)", transition: { duration: 0.3 } }
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="container mx-auto max-w-screen-xl">
        <div className="fade-in-section text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("testimonials.title")}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="fade-in-section bg-slate-50 dark:bg-slate-700 p-8 rounded-xl"
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center mb-6">
                {Array(5).fill(null).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <blockquote className="text-slate-600 dark:text-slate-300 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-slate-300 dark:bg-slate-600 overflow-hidden">
                  <img
                    src={`https://randomuser.me/api/portraits/${index === 1 ? 'men' : 'women'}/${index + 1}.jpg`}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                    width="48"
                    height="48"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="fade-in-section mt-12 flex justify-center">
          <a href="#" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline font-medium group">
            {t("testimonials.more")}
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
