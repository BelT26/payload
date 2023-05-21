import { CollectionConfig } from "payload/types";

const Experiences: CollectionConfig = {
  slug: "experiences",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    { name: "name", type: "text", label: "Name" },
    { name: "description", type: "text", label: "Description" },
    { name: "cost", type: "number", label: "Cost" },
  ],
  timestamps: false,
};

export default Experiences;
