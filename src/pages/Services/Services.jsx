import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { navigation } from "../../routes/navigation";

export default function Services() {
  return (
    <div>
      <Breadcrumbs routes={navigation} />
    </div>
  );
}
