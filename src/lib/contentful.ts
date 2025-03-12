import * as contentful from "contentful";
import type { EntryFieldTypes } from "contentful";

export interface PeopleInfo {
  contentTypeId: "peopleInformation";
  fields: {
    name: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    keyCompetencies: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    story: EntryFieldTypes.RichText;
  };
}

export interface Services {
  contentTypeId: "services";
  fields: {
    title: EntryFieldTypes.Text;
    description: EntryFieldTypes.RichText;
    features: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;

    // CamelCase name of https://lucide.dev/icons/
    icon: EntryFieldTypes.Text;
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
