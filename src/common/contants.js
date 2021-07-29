/** @format */

export const COLOR_BLACK = "#000";
export const COLOR_WHITE = "#FFF";

export const theme = {
  primary: "",
  secondary: "",
  padding: "4px",
  margin: "4px",
};

export const FETCH_STATUS = {
  none: "NONE",
  loading: "LOADING",
  error: "ERROR",
  success: "SUCCESS",
};

export const GENDER = {
  male: "MALE",
  female: "FEMALE",
  other: "OTHER",
};

export const LOCATIONS = {
  bangaluru: "BANGALURU",
  delhi: "DELHI",
  mumbai: "MUMBAI",
};

export const LOCATIONS_ARR = Object.entries(LOCATIONS).map(
  ([value, label]) => ({ label: label, value: value })
);

export const PROFESSIONS = {
  doctor: "DOCTOR",
  engineer: "ENGINEER",
  farmer: "FARMER",
  other: "OTHER",
};

export const ACCOUNT_TYPE = {
  user: "USER",
  manager: "MANAGER",
  admin: "ADMIN",
};

/**
 * NONE - when issue was created
 * REVIEW - issue will be reviews by officers
 * PROGRESS - discussion has started on this issue
 * ACTION - action has been initiated by officers
 * RESOLVED - issue has been resolved
 */
export const GRIEVANCE_STATUS = {
  none: "NONE",
  review: "REVIEW",
  // progress: "PROGRESS",
  action: "ACTION",
  resolved: "RESOLVED",
};

export const GRIEVANCE_CATEGORIES = [
  "Road Safety & Traffic",
  "Electricity",
  "Ration Service",
  "Housing and Development",
  "Water Delivery",
  "Sanitation",
  "Vigilance & Anti-corruption",
  "Public Safety",
  "Healthcare",
];
