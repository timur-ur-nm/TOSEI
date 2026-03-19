import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { navigation } from "../../routes/navigation";
import ContactSection from '../../components/UI/ContactSection'
export default function Contact() {
  return (
    <div className="container mx-auto px-4 md:px-11 py-4 flex flex-col gap-3">
      <Breadcrumbs routes={navigation} />
      <h1 className="text-2xl md:text-4xl font-bold">Контакты</h1>
      <ContactSection />
    </div>
  );
}
