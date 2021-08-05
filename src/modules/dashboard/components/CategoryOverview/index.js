/** @format */

import React, { useEffect, useState } from "react";

import { getCityHappinessLevel } from "../../api";
import CityHappinessLevel from "../CityHappinessLevel/CityHappinessLevel";

const ContainerCityHappinessLevel = ({ location }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const get = async () => {
      const { data } = await getCityHappinessLevel({ location });

      const { total, resolved } = data;

      const tempValue = total === 0 ? 0 : (resolved / total) * 100;

      setValue(tempValue);
    };

    get();
  }, [location]);

  return <CityHappinessLevel value={value} />;
};

export default ContainerCityHappinessLevel;
