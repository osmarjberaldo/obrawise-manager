
import { Book, Calendar, CheckSquare, ClipboardList, FileText, Image, MessageCircle, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ComoFunciona = () => {
  const { translations } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {translations.how_it_works_title}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                {translations.how_it_works_description}
              </p>
              <div className="flex justify-center">
                <Link to="/para-quem">
                  <Button 
                    className="bg-construction hover:bg-construction-dark text-white font-medium text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {translations.try_free}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  {translations.daily_history}
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  {translations.record_activities}
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  {translations.keep_client_updated}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                  {translations.how_it_works_practice}
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {translations.report_value}
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  {translations.helps_monitor}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
                {translations.simple_standardized}
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-construction/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-construction">1</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{translations.register_works}</h3>
                  </div>
                  <p className="text-gray-700 ml-16">
                    {translations.register_works_desc}
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-construction/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-construction">2</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{translations.create_daily_reports}</h3>
                  </div>
                  <p className="text-gray-700 ml-16">
                    {translations.create_daily_reports_desc}
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-construction/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-construction">3</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{translations.register_information}</h3>
                  </div>
                  <p className="text-gray-700 ml-16">
                    {translations.register_information_desc}
                  </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-construction/10 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-construction">4</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{translations.share_and_follow}</h3>
                  </div>
                  <p className="text-gray-700 ml-16">
                    {translations.share_and_follow_desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Register Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                {translations.what_to_register}
              </h2>
              <p className="text-lg text-gray-700 mb-10 text-center">
                {translations.what_to_register_desc}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { icon: FileText, text: translations.project_info },
                  { icon: Calendar, text: translations.deadlines },
                  { icon: Clock, text: translations.work_hours },
                  { icon: Cloud, text: translations.weather_condition },
                  { icon: Users, text: translations.workforce },
                  { icon: Truck, text: translations.equipment },
                  { icon: CheckSquare, text: translations.completed_tasks },
                  { icon: AlertTriangle, text: translations.issues },
                  { icon: Package, text: translations.received_materials },
                  { icon: MessageCircle, text: translations.comments },
                  { icon: Image, text: translations.photos_videos },
                  { icon: Paperclip, text: translations.attachments },
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-construction/5 transition-colors duration-300">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-construction/10 rounded-full flex items-center justify-center mb-3">
                        <item.icon className="w-6 h-6 text-construction" />
                      </div>
                      <span className="text-gray-800 font-medium">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* For Who Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
                {translations.who_is_for}
              </h2>
              
              <div className="bg-white rounded-xl shadow-md p-8 mb-10">
                <p className="text-lg text-gray-700 mb-6">
                  {translations.who_is_for_desc}
                </p>
                
                <ul className="space-y-3 ml-6">
                  {[
                    translations.benefit_track_multiple_works,
                    translations.benefit_daily_history,
                    translations.benefit_photos_videos,
                    translations.benefit_communication,
                    translations.benefit_data_analysis,
                    translations.benefit_daily_challenges,
                    translations.benefit_share_info
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {translations.report_should_not_be_complicated}
                </h3>
                <p className="text-lg text-gray-700 mb-8">
                  {translations.report_should_be_simple}
                </p>
                <Link to="/para-quem">
                  <Button 
                    className="bg-construction hover:bg-construction-dark text-white font-medium text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {translations.try_free}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

const Clock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const Cloud = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
  </svg>
);

const Truck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck">
    <path d="M10 17h4V5H2v12h3"></path>
    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"></path>
    <circle cx="7.5" cy="17.5" r="2.5"></circle>
    <circle cx="17.5" cy="17.5" r="2.5"></circle>
  </svg>
);

const AlertTriangle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
    <path d="M12 9v4"></path>
    <path d="M12 17h.01"></path>
  </svg>
);

const Package = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package">
    <path d="m7.5 4.27 9 5.15"></path>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
    <path d="m3.3 7 8.7 5 8.7-5"></path>
    <path d="M12 22V12"></path>
  </svg>
);

const Paperclip = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paperclip">
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
  </svg>
);

export default ComoFunciona;
