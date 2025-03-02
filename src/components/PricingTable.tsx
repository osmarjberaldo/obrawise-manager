
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const getPlans = (translations) => [
  {
    name: translations.basic_plan,
    price: "R$ 99",
    billing: translations.per_month,
    description: translations.basic_plan_desc,
    features: [
      translations.up_to_5_projects,
      translations.two_users,
      translations.real_time_monitoring,
      translations.basic_reports,
      translations.email_support
    ],
    buttonText: translations.start_now,
    isPopular: false
  },
  {
    name: translations.professional_plan,
    price: "R$ 199",
    billing: translations.per_month,
    description: translations.professional_plan_desc,
    features: [
      translations.up_to_15_projects,
      translations.ten_users,
      translations.advanced_reports,
      translations.complete_budget_control,
      translations.mobile_app_access,
      translations.calendar_integration,
      translations.priority_support
    ],
    buttonText: translations.choose_plan,
    isPopular: true
  },
  {
    name: translations.enterprise_plan,
    price: "R$ 349",
    billing: translations.per_month,
    description: translations.enterprise_plan_desc,
    features: [
      translations.unlimited_projects,
      translations.unlimited_users,
      translations.custom_reports,
      translations.api_integrations,
      translations.advanced_security,
      translations.daily_backup,
      translations.document_management,
      translations.support_24_7
    ],
    buttonText: translations.talk_to_consultant,
    isPopular: false
  }
];

const PricingTable = () => {
  const { translations } = useLanguage();
  const plans = getPlans(translations);
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 text-sm font-medium text-construction bg-construction/10 rounded-full mb-4">
            {translations.our_plans}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {translations.choose_ideal_plan}
          </h2>
          <p className="text-lg text-gray-600">
            {translations.flexible_packages}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden shadow-pricing transition-all duration-300 hover:shadow-xl relative ${
                plan.isPopular ? "md:scale-105 ring-2 ring-construction" : ""
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-construction text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  {translations.most_popular}
                </div>
              )}
              <div className="p-6 md:p-8 border-b">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4 h-12">{plan.description}</p>
                <div className="flex items-baseline my-4">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.billing}</span>
                </div>
                <Button 
                  className={`w-full py-6 h-auto text-base ${
                    plan.isPopular 
                      ? "bg-construction hover:bg-construction-dark" 
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
              <div className="p-6 md:p-8 bg-gray-50">
                <h4 className="font-medium text-gray-900 mb-4">{translations.whats_included}:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 md:p-10 mt-16 shadow-subtle max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{translations.custom_plan}</h3>
              <p className="text-gray-600">{translations.talk_to_team}</p>
            </div>
            <Button 
              variant="outline" 
              className="border-construction text-construction hover:bg-construction/5 font-medium px-6 min-w-40"
              size="lg"
            >
              {translations.request_proposal}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
