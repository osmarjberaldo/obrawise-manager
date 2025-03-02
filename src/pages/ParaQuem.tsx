import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ParaQuem = () => {
  const { translations } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">{translations.who_is_for}</h1>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm mb-8">
            <p className="text-lg text-gray-700 mb-8">{translations.who_is_for_desc}</p>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{translations.app_benefits_title}</h2>
              <ul className="space-y-3 pl-5 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  {translations.benefit_1}
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  {translations.benefit_2}
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  {translations.benefit_3}
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  {translations.benefit_4}
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  {translations.benefit_5}
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  {translations.benefit_6}
                </li>
                <li className="flex items-start gap-2">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  {translations.benefit_7}
                </li>
              </ul>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Target Audience 1 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-construction mb-3">{translations.target_audience_1}</h3>
                <p className="text-gray-700">{translations.target_audience_1_desc}</p>
              </div>
              
              {/* Target Audience 2 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-construction mb-3">{translations.target_audience_2}</h3>
                <p className="text-gray-700">{translations.target_audience_2_desc}</p>
              </div>
              
              {/* Target Audience 3 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-construction mb-3">{translations.target_audience_3}</h3>
                <p className="text-gray-700">{translations.target_audience_3_desc}</p>
              </div>
              
              {/* Target Audience 4 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-semibold text-construction mb-3">{translations.target_audience_4}</h3>
                <p className="text-gray-700">{translations.target_audience_4_desc}</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/como-funciona">
              <Button className="bg-construction hover:bg-construction-dark text-white mr-4">
                {translations.how_it_works}
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-construction text-construction hover:bg-construction/10">
                {translations.home}
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ParaQuem;